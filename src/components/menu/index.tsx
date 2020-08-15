import React, {
  CSSProperties,
  createContext,
  useState,
  ReactNode,
  FunctionComponentElement
} from 'react';

import classnames from 'classnames';
import { IMenuItemProps } from './menu-item';

type SelectClick = (key: string) => void;

export interface IMenuCtx {
  selectedKey: string;
  mode: MenuMode;
  defaultOpenMenu: string[];
  onSelect?: SelectClick;
}

export const MenuCtx = createContext<IMenuCtx>({
  selectedKey: '',
  defaultOpenMenu: [],
  mode: 'horizontal'
});

export type MenuMode = 'horizontal' | 'vertical';

export interface IMenuProps {
  children?: React.ReactNode;
  className?: string;
  defaultSelectedKey?: string;
  selectedKey?: string;
  style?: CSSProperties;
  mode?: MenuMode;
  defaultOpenMenus?: string[];
  onSelect?: SelectClick;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const {
    children,
    mode,
    style,
    className,
    defaultSelectedKey,
    defaultOpenMenus,
    onSelect
  } = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
  const classNames = classnames('bird-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal'
  });

  const handleClick = (key: string) => {
    setSelectedKey(key);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(key);
    }
  };

  const provideVal: IMenuCtx = {
    selectedKey: selectedKey || '',
    mode: mode || 'horizontal',
    defaultOpenMenu: defaultOpenMenus || [],
    onSelect: handleClick
  };

  const renderChildren = (children: ReactNode) => {
    return React.Children.map(children, (item) => {
      const element = item as FunctionComponentElement<IMenuItemProps>;
      if (element.type.displayName === 'MenuItem' || element.type.displayName === 'SubMenu') {
        return React.cloneElement(element);
      } else {
        console.warn(`Menu's children should be MenuItem`);
      }
    });
  };

  return (
    <ul className={classNames} style={style} data-testid="test-menu">
      <MenuCtx.Provider value={provideVal}>{renderChildren(children)}</MenuCtx.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  mode: 'horizontal',
  defaultOpenMenus: []
};

Menu.displayName = 'Menu';

export default Menu;
