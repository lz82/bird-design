import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

const defaultProps = {
  onClick: jest.fn()
};

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>default button</Button>);
    const element = wrapper.getByText('default button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
    // expect(element.onclick).toHaveBeenCalled();
  });

  it('should render the correct component based on different props', () => {});

  it('should render a link when btnType equals link and href is provided', () => {});

  it('should render disabled button when disabled set to true', () => {});
});
