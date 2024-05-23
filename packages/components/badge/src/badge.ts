import { buildProps, definePropType } from '@vuesax-alpha/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'

export const badgeProps = buildProps({
  /**
   * @description display value.
   */
  value: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
   */
  max: {
    type: Number,
    default: 99,
  },
  /**
   * @description if a little dot is displayed.
   */
  isDot: Boolean,
  /**
   * @description hidden badge.
   */
  hidden: Boolean,
  /**
   * @description badge type.
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warn', 'info', 'danger'],
    default: 'danger',
  },
  /**
   * @description whether to show badge when value is zero.
   */
  showZero: {
    type: Boolean,
    default: true,
  },
  /**
   * @description choose true to display a loading animation.
   */
  processing: Boolean,
  /**
   * @description customize dot background color
   */
  color: String,
  /**
   * @description CSS style of badge
   */
  badgeStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },
  /**
   * @description set offset of the badge
   */
  offset: {
    type: definePropType<[number, number]>(Array),
    default: [0, 0],
  },
  /**
   * @description custom class name of badge
   */
  badgeClass: {
    type: String,
  },
} as const)
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
