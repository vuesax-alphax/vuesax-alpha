<template>
  <div
    type="checkbox"
    :class="switchKls"
    :style="switchStyles"
    @click="switchValue"
  >
    <input
      type="checkbox"
      :checked="checked"
      :disabled="isDisabled"
      :readonly="isDisabled"
      :class="ns.e('input')"
      @change="handleChange"
    />
    <div :class="ns.e('circle')">
      <slot name="circle" />
      <icon-loading v-if="isLoading" />
    </div>
    <div
      v-if="$slots.on || $slots.default"
      :class="[ns.e('text'), ns.is('on')]"
    >
      <slot v-if="$slots.on" name="on" />
      <slot v-else-if="$slots.default" />
    </div>

    <div
      v-if="$slots.off || $slots.default"
      :class="[ns.e('text'), ns.is('off')]"
    >
      <slot v-if="$slots.off" name="off" />
      <slot v-else-if="$slots.default" />
    </div>

    <div :class="ns.e('background')" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import {
  useColor,
  useNamespace,
  useVuesaxBaseComponent,
} from '@vuesax-alpha/hooks'
import { IconLoading } from '@vuesax-alpha/components/icon'
import { getVsColor } from '@vuesax-alpha/utils'
import { switchEmits, switchProps } from './switch'
import { useSwitch } from './use-switch'

defineOptions({
  name: 'VsSwitch',
  inheritAttrs: false,
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const ns = useNamespace('switch')

const color = useColor('primary')

const { isLoading, checked, isDisabled, handleChange, switchValue } = useSwitch(
  props,
  emit
)
const vsBaseClasses = useVuesaxBaseComponent(color)
const switchKls = computed(() => [
  vsBaseClasses,
  ns.b(),
  ns.is('loading', isLoading.value),
  ns.is(props.shape),
  ns.is('indeterminate', props.indeterminate),
  ns.is('icon', props.icon),
  ns.is('disabled', isDisabled.value),
])

const switchStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(color.value),
  }),
])

defineExpose({
  /**
   * @description whether Switch is checked
   */
  checked,
})
</script>
