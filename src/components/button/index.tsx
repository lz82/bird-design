import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';

type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface IBaseButtonProps {
  /**
   * 用户自定义的ClassName
   */
  className?: string;
  /**
   * 按钮是否禁用
   */
  disabled?: boolean;
  /**
   * 按钮的大小
   */
  size?: ButtonSize;
  /**
   * 按钮的类型
   */
  btnType?: ButtonType;
  /**
   * 按钮上显示的文字，当按钮存在children时，则优先显示children
   */
  text?: string;
  /**
   * 点击按钮后跳转的链接，仅当按钮的btnType为link时有效
   */
  link?: string;
  /**
   * 按钮的子元素，通常为按钮上显示的文字
   */
  children?: React.ReactNode;
}

type NativeButtonAttribute = ButtonHTMLAttributes<HTMLElement> & IBaseButtonProps;
type NativeAnchorAttribute = AnchorHTMLAttributes<HTMLElement> & IBaseButtonProps;

export type ButtonProps = Partial<NativeAnchorAttribute & NativeButtonAttribute>;

export const Button: FC<ButtonProps> = (props) => {
  const { disabled, size, btnType, text, children, href, className, ...restProps } = props;
  const classes = classnames(
    'btn',
    className,
    {
      [`btn-${size}`]: size
    },
    {
      [`btn-${btnType}`]: btnType
    },
    {
      disabled: disabled && btnType === 'link'
    }
  );
  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children || text}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children || text}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  text: 'button'
};

export default Button;
