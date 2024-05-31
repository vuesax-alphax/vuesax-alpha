import { extname, resolve } from 'path'
import * as fse from 'fs-extra'
import {
  getPackageManifest,
  projRoot,
  vsOutput,
  vsPackage,
} from '@vuesax-alpha/build-utils'
import type { TaskFunction } from 'gulp'

//path
const { name, version } = getPackageManifest(vsPackage)
const DOCS_DIR = resolve(projRoot, 'docs/components')
const EN_WEB_TYPES_JSON = resolve(vsOutput, 'web-types.en-US.json')

//regex
const TYPE_EN_MD = 'en-US.md'
const COMPONENT_NAME_RE = /\\components\\([^\\.]+)\.md$/
const TIP_EN_TITLE_ATTRIBUTES_RE = /PROPS:\n/
const TIP_EN_TITLE_EVENTS_RE = /EVENTS:\n/
const TIP_EN_TITLE_SLOTS_RE = /SLOTS:\n/
const API_RE = /^---([\s\S]*?)---/m

interface compileTemplateOptions {
  md: string
  json: string
  titleAttributes: RegExp
  titleEvents: RegExp
  titleSlots: RegExp
}

interface PropType {
  name: string
  description: string
  default?: string | null
  type?: string
  values?: string
}

const { readdirSync, readFileSync, writeFileSync, pathExistsSync, lstatSync } =
  fse

const isMD = (file: string) => pathExistsSync(file) && extname(file) === '.md'

const isDir = (file: string) =>
  pathExistsSync(file) && lstatSync(file).isDirectory()

const compileDir = (
  path: string,
  webTypes: Record<string, any>,
  options: compileTemplateOptions
) => {
  const dir = readdirSync(path)
  dir.forEach((filename) => {
    const filePath = resolve(path, filename)
    isDir(filePath) && compileDir(filePath, webTypes, options)
    isMD(filePath) && compileMD(filePath, webTypes, options)
  })
}

const compileMD = (
  path: string,
  webTypes: Record<string, any>,
  options: compileTemplateOptions
) => {
  const md = readFileSync(path, 'utf-8')
  const match = path.match(COMPONENT_NAME_RE)
  if (match && match.length > 0) {
    let componentName = match[1]
    if (componentName === 'README') {
      componentName = 'button'
    }
    const { attributesTable, eventsTable, slotsTable } = compileTable(
      md,
      options.titleAttributes,
      options.titleEvents,
      options.titleSlots
    )

    const table = {
      attributesTable,
      eventsTable,
      slotsTable,
    }
    compileWebTypes(table, webTypes, componentName)
  }
}

const compileWebTypes = (
  table: Record<string, any>,
  webTypes: Record<string, any>,
  componentName: string
) => {
  const { attributesTable, eventsTable, slotsTable } = table
  const attributes = attributesTable.map((row: any) => ({
    name: row.name,
    description: row.description,
    default: row.default,
    value: {
      type: row.values ?? '-',
      kind: 'expression',
    },
  }))
  const events = eventsTable.map((row: any) => ({
    name: row.name,
    description: row.description,
  }))
  const slots = slotsTable.map((row: any) => ({
    name: row.name,
    description: row.description,
  }))
  webTypes.contributions.html.tags.push({
    name: `vs-${componentName}`,
    attributes,
    events,
    slots,
  })
}

const parseMarkdown = (md: string) => {
  const lines = md.split('\n')
  const props: PropType[] = []
  let currentProp: Partial<PropType> = {}
  const defaultMap: (keyof Partial<PropType>)[] = [
    'type',
    'description',
    'default',
    'values',
  ]

  lines.forEach((line) => {
    const trimmedLine = line.trim()
    if (trimmedLine.startsWith('- name:')) {
      if (Object.keys(currentProp).length !== 0) {
        props.push(currentProp as PropType)
        currentProp = {}
      }
      const match = trimmedLine.match(/^([^:]+):\s*(.*)$/)
      if (match) {
        currentProp.name = match[2]
      }
    } else {
      defaultMap.forEach((item) => {
        const match = trimmedLine.match(/^([^:]+):\s*(.*)$/)
        if (trimmedLine.startsWith(`${item}:`) && match) {
          currentProp[item] = match[2]
        }
      })
    }
  })

  if (Object.keys(currentProp).length !== 0) {
    props.push(currentProp as PropType)
  }
  return props
}

const extractSection = (md: string, startRe: RegExp, endRe?: RegExp) => {
  const startIndex = md.search(startRe)
  if (startIndex === -1) return ''

  let endIndex: number | undefined
  if (endRe) {
    let endIndex = md.search(endRe)
    if (endIndex === -1) endIndex = md.length
  }

  return md.slice(startIndex + startRe.source.length, endIndex).trim()
}

const compileTable = (
  md: string,
  propsRe: RegExp,
  eventRe: RegExp,
  slotRe: RegExp
) => {
  const apiMatched = md.match(API_RE)
  if (!apiMatched) {
    return {
      attributesTable: [],
      eventsTable: [],
      slotsTable: [],
    }
  }
  md = apiMatched[1].trim()

  let attributesTable: PropType[] = []
  let eventsTable: PropType[] = []
  let slotsTable: PropType[] = []

  const propsMd = extractSection(md, propsRe, eventRe || slotRe)
  const eventMd = extractSection(md, eventRe, slotRe)
  const slotMd = extractSection(md, slotRe)

  attributesTable = parseMarkdown(propsMd)
  eventsTable = parseMarkdown(eventMd)
  slotsTable = parseMarkdown(slotMd)

  return {
    attributesTable,
    eventsTable,
    slotsTable,
  }
}

const compileLanguageMD = (options: compileTemplateOptions) => {
  const webTypes = {
    framework: 'vue',
    version,
    name,
    contributions: {
      html: {
        tags: [],
        'types-syntax': 'typescript',
      },
    },
  }
  compileDir(DOCS_DIR, webTypes, options)
  writeFileSync(options.json, JSON.stringify(webTypes, null, 2))
}

export const buildExtensionHelper: TaskFunction = async () => {
  compileLanguageMD({
    md: TYPE_EN_MD,
    json: EN_WEB_TYPES_JSON,
    titleAttributes: TIP_EN_TITLE_ATTRIBUTES_RE,
    titleEvents: TIP_EN_TITLE_EVENTS_RE,
    titleSlots: TIP_EN_TITLE_SLOTS_RE,
  })
}
