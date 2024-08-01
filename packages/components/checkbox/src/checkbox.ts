import { useColorProp } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isNumber,
  isString,
} from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean | object

export type CheckboxModelType = CheckboxValueType | CheckboxValueType[]

export const checkboxProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<CheckboxModelType>([
      String,
      Number,
      Boolean,
      Object,
      Array,
    ]),
    default: undefined,
  },

  notValue: {
    type: definePropType<CheckboxModelType>([
      String,
      Number,
      Boolean,
      Object,
      Array,
    ]),
  },

  /**
   * @description self value of the Checkbox, used inside a `checkbox-group`
   */
  value: {
    type: definePropType<CheckboxModelType>([
      String,
      Number,
      Boolean,
      Object,
      Array,
    ]),
  },

  /** @description checkbox id */
  id: {
    type: String,
    default: null,
  },

  /** @description Set indeterminate state, only responsible for style control */
  indeterminate: {
    type: Boolean,
  },

  /** @description if the Checkbox is checked */
  checked: {
    type: Boolean,
  },

  /** @description Force checked component */
  checkedForce: {
    type: Boolean,
  },
  /**
   * @description whether the Checkbox is disabled
   */
  disabled: {
    type: Boolean,
  },
  /**
   * @description if the Checkbox is loading
   */
  loading: {
    type: Boolean,
  },
  /**
   * @description Label of the Checkbox
   */
  label: {
    type: String,
  },
  /**
   * @description Change the position of the label.
   */
  labelBefore: {
    type: Boolean,
  },
  /**
   * @description Add a line in the center of the label when checked.
   */
  lineThrough: {
    type: Boolean,
  },
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: undefined,
  },
  /**
   * @description minimum number of checkbox checked
   */
  min: {
    type: Number,
  },
  /**
   * @description maximum number of checkbox checked
   */
  max: {
    type: Number,
  },
} as const)

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxModelType) =>
    isString(val) || isNumber(val) || isBoolean(val) || isArray(val),
  change: (val: CheckboxModelType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxEmitsFn = EmitFn<CheckboxEmits>
export type CheckboxInstance = InstanceType<typeof Checkbox>
