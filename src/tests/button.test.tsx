import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from '../components/button/index';

const defaultProps = {
  onClick: jest.fn()
};

const primaryProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'custom-cls',
  text: 'primary large button'
};

const linkProps: ButtonProps = {
  btnType: ButtonType.Link,
  size: ButtonSize.Small,
  className: 'custom-link',
  text: 'small link button',
  href: 'http://www.baidu.com'
};

const disabledProps: ButtonProps = {
  btnType: ButtonType.Danger,
  text: 'disabled danger button',
  disabled: true,
  onClick: jest.fn()
};

const disabledLinkProps: ButtonProps = {
  ...linkProps,
  text: 'disabled link button',
  disabled: true,
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

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...primaryProps} />);
    const element = wrapper.getByText('primary large button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-primary btn-lg custom-cls');
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button {...linkProps} />);
    const element = wrapper.getByText('small link button') as HTMLAnchorElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link btn-sm custom-link');
  });

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps} />);
    const element = wrapper.getByText('disabled danger button');
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();

    const linkWrapper = render(<Button {...disabledLinkProps} />);
    const elementLink = linkWrapper.getByText('disabled link button');
    expect(elementLink).toBeInTheDocument();
    expect(elementLink).toHaveClass('btn btn-link disabled');
  });
});
