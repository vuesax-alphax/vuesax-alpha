---
PROPS:
  #__________________________________
  - name: value
    type: Number/String
    values: Number,String
    description: display value.
    default: "' '"
    link: null
    usage: '#default'
    code: >
      <vs-badge :value="7">
        <vs-button>Badge</vs-button>
      </vs-badge>
    #__________________________________
  - name: max
    type: Number
    values: Number
    description: maximum value, shows <code>{max}+</code> when exceeded. Only works if value is a number.
    default: null
    link: null
    usage: '#max-value'
    code: >
      <vs-badge :value="100" :max="19" type="primary" >
        <vs-button >comment</vs-button>
      </vs-badge>
    #__________________________________
  - name: is-dot
    type: Boolean
    values: true,false
    description: Show with little dots level.
    default: false
    link: null
    usage: '#red-dot'
    code: >
      <vs-badge :value="100" :max="19" is-dot type="primary" >
        <vs-button >comment</vs-button>
      </vs-badge>
    #__________________________________
  - name: hidden
    type: Boolean
    values: true,false
    description: hidden badge.
    default: false
    link: null
    usage: '#controlled-visibility'
    code: >
      <vs-badge :value="3"  :hidden="hidden">
        <vs-avatar shape="square" color="#ccc"> </vs-avatar>
      </vs-badge>
    #__________________________________
  - name: type
    type: String
    values: 'primary, success, warn, info, danger'
    description: badge type.
    default: danger
    link: null
    usage: '#default'
    code: >
      <vs-badge :value="2" type="warn">
        <vs-button shape="square">square</vs-button>
      </vs-badge>
    #__________________________________
  - name: show-zero
    type: Boolean
    values: true,false
    description: Whether to show badge when value is zero.
    default: true
    link: null
    usage: '#show-zero'
    code: >
      <vs-badge :value="2" type="warn" show-zero >
        <vs-button shape="square">square</vs-button>
      </vs-badge>
    #__________________________________
  - name: color
    type: String
    values: String
    description: background color of the dot.
    default: null
    link: null
    usage: '#default'
    code: >
        <vs-badge :value="2" class="item" color="#ccc"> text </vs-badge>
    #__________________________________
  - name: offset
    type: Array
    values: 'Record< number, number>'
    description: Adjusting the position of the badge
    default: null
    link: null
    usage: '#offset'
    code: >
      <vs-badge :value="3" :offset=[-20,20] class="item" >
        <vs-avatar shape="square" color="#ccc"> </vs-avatar>
      </vs-badge>
    #__________________________________
  - name: processing
    type: Boolean
    values: true,false
    description: Set processing prop to indicate it is processing.
    default: false
    link: null
    usage: '#processing'
    code: >
      <vs-badge :value="2" processing  >
        <vs-button shape="square">square</vs-button>
      </vs-badge>
    #__________________________________
  - name: badge-style
    type: object
    values: 'CSSProperties'
    description: custom style of badge.
    default: ''
    link: null
    usage: null
    code: null
    #__________________________________
  - name: badge-class
    type: String
    values: 'String'
    description: custom class of badge.
    default: ''
    link: null
    usage: null
    code: null
    #__________________________________

SLOTS:
  - name: default
    type: slot
    values:
    description: customize default content
    default: null
    example: null
    link: null
    usage: '#default'
    code: >
      <vs-badge :value="2">
        <vs-button shape="square">square</vs-button>
      </vs-badge>

UPDATES:
  - type
---

# Badge

<card>

## Default


**Typically displaying unread messages count.**
You can use it on buttons,text,avatars,etc.

<template #example>
<badge-default />
</template>

<template #template>

@[code{1-19}  vue{3-5}](../.vuepress/components/badge/default.vue)

</template>

<template #style>

@[code{21-25}](../.vuepress/components/badge/default.vue)

</template>

</card>

<card>

## Max Value


Set `max` prop to handle overflow situation.

::: tip
The max value is defined by property max which is a  `Number`. Note that it only works when value is also a `Number`.
:::

<template #example>
<badge-max />
</template>

<template #template>

@[code{1-13}  vue{3-5}](../.vuepress/components/badge/max.vue)

</template>

<template #style>

@[code{15-19}](../.vuepress/components/badge/max.vue)

</template>

</card>

<card>

## Customizing content


Displays text content other than numbers.

When value is a String, it can display customized text.


<template #example>
<badge-customizations />
</template>

<template #template>

@[code{1-10}  vue{3-5}](../.vuepress/components/badge/customizations.vue)

</template>

<template #style>

@[code{12-16}](../.vuepress/components/badge/customizations.vue)

</template>

</card>

<card>

## Red Dot


Use a red dot to mark content that needs to be noticed.

Use the attribute `is-dot`. It is a Boolean.


<template #example>
<badge-red-dot />
</template>

<template #template>

@[code{1-16}  vue{3-5}](../.vuepress/components/badge/red-dot.vue)

</template>

<template #style>

@[code{18-22}](../.vuepress/components/badge/red-dot.vue)

</template>

</card>

<card>

## Offset


Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.


<template #example>
<badge-offset />
</template>

<template #template>

@[code{1-15}  vue{3}](../.vuepress/components/badge/offset.vue)

</template>

<template #style>

@[code{17-21}](../.vuepress/components/badge/offset.vue)

</template>

</card>

<card>

## Processing


Set `processing` prop to indicate it is processing.


<template #example>
<badge-processing />
</template>

<template #template>

@[code{1-16}  vue{3}](../.vuepress/components/badge/processing.vue)

</template>

<template #style>

@[code{18-22}](../.vuepress/components/badge/processing.vue)

</template>

</card>

<card>

## Controlled visibility


Set `hidden` prop to control the visibility of the badge.


<template #example>
<badge-controlled-visibility />
</template>

<template #template>

@[code{1-9}  vue{3}](../.vuepress/components/badge/controlled-visibility.vue)

</template>

<template #script>

@[code{11-15}](../.vuepress/components/badge/controlled-visibility.vue)

</template>

<template #style>

@[code{17-21}](../.vuepress/components/badge/controlled-visibility.vue)

</template>

</card>

<card>

## Show Zero


Set `show-zero` prop to display zero.According to reason, it is hidden.


<template #example>
<badge-show-zero />
</template>

<template #template>

@[code{1-11}  vue{6}](../.vuepress/components/badge/show-zero.vue)

</template>

<template #script>

@[code{13-17}](../.vuepress/components/badge/show-zero.vue)

</template>

<template #style>

@[code{19-23}](../.vuepress/components/badge/show-zero.vue)

</template>

</card>


<card>

## API

</card>
