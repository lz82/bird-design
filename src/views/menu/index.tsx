import React, { useState, useEffect } from 'react';
import Menu, { IMenuProps } from '../../components/menu';
import MenuItem from '../../components/menu/menu-item';
import SubMenu from '../../components/menu/sub-menu';

const MenuPreview: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('1');

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);

  const generateMenu = (props: IMenuProps) => {
    return (
      <Menu {...props}>
        <MenuItem id="1">active</MenuItem>
        <MenuItem id="2" disabled>
          disabled
        </MenuItem>
        <MenuItem id="3">xyz</MenuItem>
        <SubMenu id="4" title="submenu">
          <MenuItem id="4-1">4-1</MenuItem>
          <MenuItem id="4-2" disabled>
            4-2
          </MenuItem>
          <MenuItem id="4-3">4-3</MenuItem>
        </SubMenu>
      </Menu>
    );
  };
  const menu = generateMenu({
    mode: 'vertical',
    defaultSelectedKey: '1',
    className: 'test',
    onSelect: (id) => {
      setSelectedMenu(id);
    }
  });
  return <div>{menu}</div>;
};

export default MenuPreview;
