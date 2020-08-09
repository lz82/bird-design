import React, { CSSProperties, createContext, useState } from 'react';

import classnames from 'classnames';
import { IMenuItemProps } from './menu-item';

type SelectClick = (item: IMenuItemProps, key: string) => void;

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
  const { children, mode, style, defaultSelectedKey, onSelect } = props;
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);

  const classNames = classnames('bird-menu', {
    'menu-vertical': mode === 'vertical'
  });

  const handleClick = (item: any, key: string) => {
    setSelectedKey(key);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(item, key);
    }
  };

  const provideVal: IMenuCtx = {
    selectedKey: selectedKey || '',
    onSelect: handleClick
  };

  return (
    <ul className={classNames} style={style}>
      <MenuCtx.Provider value={provideVal}>{children}</MenuCtx.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  mode: 'horizontal'
};

export default Menu;
