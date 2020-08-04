import React from 'react';
import classnames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface IBaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  text?: string;
  href?: string;
  children?: React.ReactNode;
}

type NativeButtonAttribute = React.ButtonHTMLAttributes<HTMLElement> & IBaseButtonProps;
type NativeAnchorAttribute = React.AnchorHTMLAttributes<HTMLElement> & IBaseButtonProps;

export type ButtonProps = Partial<NativeAnchorAttribute & NativeButtonAttribute>;

const Button: React.FC<ButtonProps> = (props) => {
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
      disabled: disabled && btnType === ButtonType.Link
    }
  );
  if (btnType === ButtonType.Link && href) {
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
  btnType: ButtonType.Default,
  text: 'button'
};

export default Button;
