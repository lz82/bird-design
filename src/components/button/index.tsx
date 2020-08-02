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
  type?: ButtonType;
  text?: string;
  href?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IBaseButtonProps> = (props) => {
  const { disabled, size, type, text, children, href } = props;
  const classes = classnames(
    'btn',
    {
      [`btn-${size}`]: size
    },
    {
      [`btn-${type}`]: type
    },
    {
      disabled: disabled && type === ButtonType.Link
    }
  );
  if (type === ButtonType.Link && href) {
    return (
      <a href={href} className={classes}>
        {children || text}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children || text}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
  text: 'button'
};

export default Button;
