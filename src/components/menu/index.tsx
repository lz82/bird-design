import React, { CSSProperties, createContext, useState, ReactNode } from 'react';

import classnames from 'classnames';
import { IMenuItemProps } from './menu-item';

type SelectClick = (key: string) => void;

export interface IMenuCtx {
  selectedKey: string;
  onSelect?: SelectClick;
}

export const MenuCtx = createContext<IMenuCtx>({ selectedKey: '' });

export type MenuMode = 'horizontal' | 'vertical';

export interface IMenuProps {
  children?: React.ReactNode;
  className?: string;
  defaultSelectedKey?: string;
  selectedKey?: string;
  style?: CSSProperties;
  mode?: MenuMode;
  onSelect?: SelectClick;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const { children, mode, style, className, defaultSelectedKey, onSelect } = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
  const classNames = classnames('bird-menu', className, {
    'menu-vertical': mode === 'vertical'
  });

  const handleClick = (key: string) => {
    setSelectedKey(key);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(key);
    }
  };

  const provideVal: IMenuCtx = {
    selectedKey: selectedKey || '',
    onSelect: handleClick
  };

  const renderChildren = (children: ReactNode) => {
    return React.Children.map(children, (item) => {
      const element = item as React.FunctionComponentElement<IMenuItemProps>;
      if (element.type.displayName === 'MenuItem') {
        return item;
      } else {
        console.log('children should be MenuItem');
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
  mode: 'horizontal'
};

Menu.displayName = 'Menu';

export default Menu;
