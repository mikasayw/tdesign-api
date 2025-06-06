/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdSwitchProps<T = SwitchValue> {
  /**
   * Switch 切换状态前的回调方法，常用于需要发起异步请求的场景，回调返回值支持布尔和 Promise 类型，返回`false`或 Promise reject不继续执行change，否则则继续执行
   */
  beforeChange?: () => boolean | Promise<boolean>;
  /**
   * 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']
   */
  customValue?: Array<SwitchValue>;
  /**
   * 是否禁用组件。优先级：Switch.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'
   * @default []
   */
  label?: Array<string | TNode> | TNode<{ value: SwitchValue }>;
  /**
   * 是否处于加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 开关尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 开关值
   */
  value?: T;
  /**
   * 开关值，非受控属性
   */
  defaultValue?: T;
  /**
   * 数据发生变化时触发
   */
  onChange?: (value: T, context: { e: MouseEvent }) => void;
}

export type SwitchValue = string | number | boolean;
