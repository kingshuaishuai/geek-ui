import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './button';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'class',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Hello</Button>);
    const element = wrapper.getByText('Hello') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeFalsy();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('should render the correct based on different props', () => {
    const wrapper = render(<Button {...testProps}>Hello</Button>);
    const element = wrapper.getByText('Hello');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg class');
  });

  it('should render a link when btnTypes equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType='link' href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn-link');
  });

  it('should render a disabled button when set disabled props true', () => {
    const wrapper = render(<Button {...disabledProps}>Hello</Button>);
    const element = wrapper.getByText('Hello') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
