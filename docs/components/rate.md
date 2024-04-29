---
PROPS:
  #__________________________________
  - name: model-value/v-model
    type: Number
    values: Number
    description: binding value.
    default: 0
    link: null
    usage: '#default'
    code: >
      <vs-rate v-model="value" />
    #__________________________________
  - name: id
    type: String
    values: String
    description: native <code>id</code> attribute.
    default: null
    link: null
    usage: '#id'
    code: null
    #__________________________________
  - name: low-threshold
    type: Number
    values: Number
    description: threshold value between low and medium level. The value itself will be included in low level.
    default: 2
    link: null
    usage: '#low-threshold'
    code: null
    #__________________________________
  - name: high-threshold
    type: Number
    values: Number
    description: threshold value between medium and high level. The value itself will be included in high level.
    default: 4
    link: null
    usage: '#high-threshold'
    code: null
    #__________________________________
  - name: max
    type: Number
    values: Number
    description: max rating score.
    default: 5
    link: null
    usage: '#max'
    code: >
      <vs-rate v-model="value" max="5" />
    #__________________________________
  - name: colors
    type: Object
    values: 'string[] , Record:< number| string>'
    description: colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color
    default: ['#f7ba2a', '#f7ba2a', '#f7ba2a']
    link: null
    usage: '#default'
    code: >
       <vs-rate v-model="value2" colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
    #__________________________________
  - name:  void-color
    type: String
    values: String
    description: component of unselected icons.
    default: '#c6d1de'
    link: null
    usage: '#void-color'
    code: >
      <vs-rate v-model="value" void-color="#c6d1de" />
    #__________________________________
  - name: disabled-void-color
    type: String
    values: String
    description: color of unselected read-only icons.
    default: '#eff2f7'
    link: null
    usage: '#disabled-void-color'
    code: null
    #__________________________________
  - name: icons
    type: Object
    values: 'string[],component[],Record< number，string | Component>'
    description: icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component.
    default: '[StarFilled, StarFilled, StarFilled]'
    link: null
    usage: '#more-icons'
    code: >
      <vs-rate v-model="value" icons="[StarFilled, StarFilled, StarFilled]" />
    #__________________________________
  - name: void-icon
    type: string
    values: 'string,Component'
    description: component of unselected icons.
    default: 'Star'
    link: null
    usage: '#more-icons'
    code: >
      <vs-rate v-model="value" void-icon="Star" />
    #__________________________________
  - name: disabled-void-icon
    type: string
    values: 'string,Component'
    description: component of unselected read-only icons.
    default: 'StarFilled'
    link: null
    usage: '#disabled-void-icon'
    code: null
    #__________________________________
  - name: disabled
    type: Boolean
    values: 'true,false'
    description: whether Rate is read-only.
    default: 'false'
    link: null
    usage: '#read-only'
    code: >
      <vs-rate v-model="value" disabled />
  #__________________________________
  - name: allow-half
    type: Boolean
    values: 'true,false'
    description: whether picking half start is allowed.
    default: 'false'
    link: null
    usage: '#with-allow-half'
    code: >
      <vs-rate v-model="value" allow-half />
  #__________________________________
  - name: show-text
    type: Boolean
    values: 'true,false'
    description: whether to display texts.
    default: 'false'
    link: null
    usage: '#with-text'
    code: >
      <vs-rate
      v-model="value"
      :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
      show-text
      />
  #__________________________________
  - name: show-score
    type: Boolean
    values: 'true,false'
    description: whether to display current score. show-score and show-text cannot be true at the same time.
    default: 'false'
    link: null
    usage: '#read-only'
    code: >
      <vs-rate
      v-model="value"
      show-score
      text-color="#ff9900"
      score-template="{value} points"
      />
  #__________________________________
  - name: text-color
    type: String
    values: 'String'
    description: color of texts.
    default: ''
    link: null
    usage: '#text-color'
    code: >
      <vs-rate
      v-model="value"
      show-score
      text-color="#ff9900"
      score-template="{value} points"
      />
  #__________________________________
  - name: texts
    type: array
    values: 'String[]'
    description: text array
    default: '[Extremely bad, Disappointed, Fair, Satisfied, Surprise]'
    link: null
    usage: '#texts'
    code: null
  #__________________________________
  - name: score-template
    type: String
    values: 'String'
    description: score template.
    default: ''
    link: null
    usage: '#score-template'
    code: >
      <vs-rate
      v-model="value"
      show-score
      text-color="#ff9900"
      score-template="{value} points"
      />
  #__________________________________
  - name: size
    type: String
    values: 'large,default, small'
    description: size of Rate.
    default: 'default'
    link: null
    usage: '#size'
    code: >
      <vs-rate
      v-model="value"
      size="small"
      />
    #__________________________________
  - name: clearable
    type: Boolean
    values: 'true,false'
    description: whether value can be reset to <code>0</code>.
    default: 'false'
    link: null
    usage: '#clearable'
    code: >
      <vs-rate
      v-model="value"
      clearable
      />
    #__________________________________
  - name: label
    type: String
    values: 'String'
    description: same as <code>aria-label</code> in Rate
    default: ''
    link: null
    usage: '#label'
    code: null

EVENTS:
  - name: change
    type: 'Function'
    values: '(value: number) => void'
    description: 	Triggers when rate value is changed.
    default: null
    link: null
    code: null
    usage: ''

EXPOSES:
  - name: setCurrentValue
    type: 'Function'
    values: '(value: number) => void'
    description: 	set current value.
    default: null
    link: null
    code: null
    usage: ''
   #__________________________________
  - name: resetCurrentValue
    type: 'Function'
    values: '(value: number) => void'
    description: 	reset current value.
    default: null
    link: null
    code: null
    usage: ''
UPDATES:
  - type
---

# Rate

<card>

## Default

Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the <code>colors</code> attribute, and their two thresholds can be defined by <code>low-threshold</code> and <code>high-threshold</code>, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.

<template #example>
<rate-default />
</template>

<template #template>

@[code{1-10} vue{4,8}](../.vuepress/components/rate/default.vue)

</template>

<template #script>

@[code{12-18} vue{6}](../.vuepress/components/rate/default.vue)

</template>

<template #style>

@[code{20-39} vue](../.vuepress/components/rate/default.vue)

</template>

</card>

<card>

## Size

Rate has `small`,`default` and `large` sizes.

<template #example>
<rate-size />
</template>

<template #template>

@[code{1-7} vue{3-5}](../.vuepress/components/rate/size.vue)

</template>

<template #script>

@[code{9-13} vue](../.vuepress/components/rate/size.vue)

</template>

<template #style>

@[code{15-20} vue](../.vuepress/components/rate/size.vue)

</template>

</card>

<card>

## With allow-half

Add attribute allow-half Half star allowed

<template #example>
<rate-allow-half />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/rate/allow-half.vue)

</template>

<template #script>

@[code{7-11} vue](../.vuepress/components/rate/allow-half.vue)

</template>

</card>

<card>

## With text

Using text to indicate rating score

Add attribute `show-text` to display text at the right of Rate. You can assign texts for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.

<template #example>
<rate-text/>
</template>

<template #template>

@[code{1-9} vue{3-7}](../.vuepress/components/rate/text.vue)

</template>

<template #script>

@[code{11-15} vue](../.vuepress/components/rate/text.vue)

</template>

<template #style>

@[code{17-27} vue](../.vuepress/components/rate/text.vue)

</template>

</card>

<card>

## Clearable

You can reset the value to 0 when you click at the same value again.

<template #example>
<rate-clearable/>
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/rate/clearable.vue)

</template>

<template #script>

@[code{7-11} vue](../.vuepress/components/rate/clearable.vue)

</template>

</card>

<card>

## More icons

You can use different icons to distinguish different rate components.

You can customize icons by passing `icons` an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon. In this example, we also use `void-icon` to set the icon if it is unselected.

<template #example>
<rate-more-icons/>
</template>

<template #template>

@[code{1-10} vue{5}](../.vuepress/components/rate/more-icons.vue)

</template>

<template #script>

@[code{12-18} vue](../.vuepress/components/rate/more-icons.vue)

</template>



</card>

<card>

## Read-only

Read-only Rate is for displaying rating score. Half star is supported.

Use attribute `disabled` to make the component read-only. Add `show-score` to display the rating score at the right side. Additionally, you can use attribute `score-template` to provide a score template. It must contain `{value}`, and `{value}` will be replaced with the rating score.

<template #example>
<rate-read-only/>
</template>

<template #template>

@[code{1-11} vue{3-9}](../.vuepress/components/rate/read-only.vue)

</template>

<template #script>

@[code{13-19} vue](../.vuepress/components/rate/read-only.vue)

</template>

</card>

<card>

## API

</card>
