import React, { CSSProperties, useContext } from 'react';
import classnames from 'classnames';
import { MenuCtx } from './index';

export interface IMenuItemProps {
  id?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { id, disabled, className, style, children } = props;
  const ctx = useContext(MenuCtx);
  const classNames = classnames(
    'menu-item',
    className,
    { disabled: disabled },
    {
      actived: id === ctx.selectedKey
    }
  );

  const onClick = () => {
    if (ctx.onSelect && typeof ctx.onSelect === 'function' && !disabled) {
      ctx.onSelect(id || '');
    }
  };
  return (
    <li id={id} className={classNames} style={style} onClick={onClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
