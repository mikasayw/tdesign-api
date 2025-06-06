/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCheckboxGroupProps } from './type';
const props: TdCheckboxGroupProps = {
  /** 是否开启无边框模式。优先级低于 Checkbox.borderless */
  borderless: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 用来定义 value / label / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 支持最多选中的数量 */
  max: {
    type: Number,
    value: undefined,
  },
  /** 统一设置内部复选框 HTML 属性 */
  name: {
    type: String,
    value: '',
  },
  /** 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」 */
  options: {
    type: Array,
    value: [],
  },
  /** 只读状态 */
  readonly: {
    type: null,
    value: undefined,
  },
  /** 选中值 */
  value: {
    type: Array,
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: Array,
    value: [],
  },
};

export default props;
