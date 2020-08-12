import { MouseEvent, ComponentClass } from "react";

import AtComponent from "./base";

export interface AtAvatarProps extends AtComponent {
  /**
   * 头像大小
   * @default 'normal'
   */
  size?: "large" | "normal" | "small";
  /**
   * 头像是否圆形
   * @default false
   */
  circle?: boolean;
  /**
   * 以文字形式展示头像
   */
  text?: string;
  /**
   * 头像图片地址
   */
  image?: string;
}

export interface AtAvatarState {}

declare const AtAvatar: ComponentClass<AtAvatarProps>;

export default AtAvatar;
