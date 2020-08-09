import React, { useState, useEffect } from 'react';
import Menu, { IMenuProps } from '../../components/menu';
import MenuItem from '../../components/menu/menu-item';

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
      </Menu>
    );
  };
  const menu = generateMenu({
    mode: 'vertical',
    defaultSelectedKey: '1',
    onSelect: (item, id) => {
      setSelectedMenu(id);
    }
  });
  return <div>{menu}</div>;
};

export default MenuPreview;
