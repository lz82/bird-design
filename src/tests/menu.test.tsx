import React from 'react';

import { render, RenderResult, fireEvent, wait } from '@testing-library/react';

import Menu, { IMenuProps } from '../components/menu';
import MenuItem from '../components/menu/menu-item';
import SubMenu from '../components/menu/sub-menu';

const testProps: IMenuProps = {
  defaultSelectedKey: '1',
  className: 'test',
  onSelect: jest.fn()
};

const generateMenu = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem id="1">active</MenuItem>
      <MenuItem id="2" disabled>
        disabled
      </MenuItem>
      <MenuItem id="3">xyz</MenuItem>
      <SubMenu id="4" title="submenu-title">
        <MenuItem id="4-1">submenu-1</MenuItem>
        <MenuItem id="4-2" disabled>
          submenu-2
        </MenuItem>
        <MenuItem id="4-3">submenu-3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createCss: () => HTMLElement = () => {
  const css = `
    .bird-submenu {
      display:none;
    }
    .bird-submenu.open {
        display: bloc k;
      }
  `;
  const cssLabel = document.createElement('style');
  cssLabel.type = 'text/css';
  cssLabel.innerHTML = css;
  return cssLabel;
};

let wrapper: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;
describe('test Menu & MenuItem Component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    const css = createCss();
    wrapper.container.append(css);
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('shoule render correct Menu & MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('bird-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('actived');
    expect(disabledElement).toHaveClass('disabled');
  });

  it('click items should change active and call the right callback', () => {
    const thirdMenu = wrapper.getByText('xyz');
    fireEvent.click(thirdMenu);
    expect(thirdMenu).toHaveClass('actived');
    expect(activeElement).not.toHaveClass('actived');
    expect(testProps.onSelect).toBeCalledWith('3');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('actived');
    expect(testProps.onSelect).not.toBeCalledWith('2');
  });

  // it('should render vertical mode when mode is set to vertical', () => {
  //   expect(menuElement).toHaveClass('menu-vertical');
  // });

  it('should show dropdown items when hover on horizontal submenu', async () => {
    // 子菜单初始不限时，因为是依靠css实现的，所以需要将相关css append进来
    expect(wrapper.queryByText('submenu-1')).not.toBeVisible();
    const submenuTitle = wrapper.getByText('submenu-title');
    // hover 在submenu上时显示子菜单，这里因为是异步操作（settimeout），因此需要使用wait函数
    // 该函数会一直等到成功为止（或者超时）
    fireEvent.mouseEnter(submenuTitle);
    await wait(() => {
      expect(wrapper.queryByText('submenu-1')).toBeVisible();
    });
    fireEvent.click(wrapper.getByText('submenu-3'));
    expect(testProps.onSelect).toHaveBeenCalledWith('4-3');
    fireEvent.mouseLeave(submenuTitle);
    await wait(() => {
      expect(wrapper.queryByText('submenu-1')).not.toBeVisible();
    });
  });
});
