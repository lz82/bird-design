import React, { CSSProperties, useContext, useState, useRef } from 'react';
import classnames from 'classnames';
import { MenuCtx } from './index';

export interface ISubMenuProps {
  id: string;
  title: string;
  className?: string;
  style?: CSSProperties;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { id, style, title, children } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useContext(MenuCtx);
  const { mode } = ctx;

  const timer: any = useRef();

  const submenuItemclassNames = classnames(
    'menu-item submenu-item',
    {
      'submenu-vertical': mode === 'vertical'
    },
    {
      'submenu-horizontal': mode === 'horizontal'
    }
  );

  const submenClassnames = classnames('bird-submenu', {
    open: menuOpen
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const clickEvents = mode === 'vertical' ? { onClick: handleClick } : {};

  const handleMouse = (e: React.MouseEvent, open: boolean) => {
    clearTimeout(timer.current);
    e.preventDefault();
    timer.current = setTimeout(() => {
      setMenuOpen(open);
    }, 300);
  };

  const hoverEvents =
    mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          }
        }
      : {};

  return (
    <li id={id} className={submenuItemclassNames} style={style} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      <ul className={submenClassnames}>{children}</ul>
    </li>
  );
};

SubMenu.defaultProps = {};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
