import React, {
  CSSProperties,
  useContext,
  useState,
  useRef,
  ReactNode,
  FunctionComponentElement
} from 'react';
import classnames from 'classnames';
import { MenuCtx } from './index';
import { IMenuItemProps } from './menu-item';
import Icon from '../../components/icon';

export interface ISubMenuProps {
  id: string;
  title: string;
  className?: string;
  style?: CSSProperties;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { id, style, title, className, children } = props;
  const ctx = useContext(MenuCtx);
  const { mode, defaultOpenMenu } = ctx;
  const defaultOpen = defaultOpenMenu.includes(id);

  const [menuOpen, setMenuOpen] = useState(mode === 'vertical' && defaultOpen);
  const timer = useRef<NodeJS.Timeout>();

  const submenuItemclassNames = classnames(
    'menu-item submenu-item',
    className,
    {
      'submenu-vertical': mode === 'vertical'
    },
    {
      'submenu-horizontal': mode === 'horizontal'
    },
    {
      open: mode === 'vertical' && menuOpen
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
    timer.current && clearTimeout(timer.current);
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

  const renderChildren = (children: ReactNode) => {
    return React.Children.map(children, (item) => {
      const element = item as FunctionComponentElement<IMenuItemProps>;
      if (element.type.displayName === 'MenuItem') {
        return element;
      }
    });
  };

  return (
    <li id={id} className={submenuItemclassNames} style={style} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon className="arrow-icon" icon="angle-down" />
      </div>
      <ul className={submenClassnames}>{renderChildren(children)}</ul>
    </li>
  );
};

SubMenu.defaultProps = {};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
