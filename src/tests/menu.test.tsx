import React from 'react';

import { render, RenderResult, fireEvent } from '@testing-library/react';

import Menu, { IMenuProps } from '../components/menu';
import MenuItem from '../components/menu/menu-item';

const testProps: IMenuProps = {
  defaultSelectedKey: '1',
  mode: 'vertical',
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
      <li>li</li>
    </Menu>
  );
};

let wrapper: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;
describe('test Menu & MenuItem Component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('shoule render correct Menu & MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('bird-menu test menu-vertical');
    expect(menuElement.getElementsByTagName('li').length).toEqual(3);
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

  it('should render vertical mode when mode is set to vertical', () => {
    expect(menuElement).toHaveClass('menu-vertical');
  });
});
