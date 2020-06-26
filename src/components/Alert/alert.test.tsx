import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { AlertType, AlertProps } from './alert';

const closeProps: AlertProps = {
  type: AlertType.Warning,
  message: 'alert',
  closable: true,
  onClose: jest.fn(),
};

describe('test alert component', () => {
  it('should render default alert', () => {
    const wrapper = render(<Alert message="alert" />);
    const element = wrapper.getByText('alert').parentNode;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('alert alert-default');
  });

  it('should render success alert with description', () => {
    const wrapper = render(
      <Alert
        type={AlertType.Success}
        description="this is description"
        message="alert"
      />
    );
    const element = wrapper.getByText('alert').parentNode;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('alert alert-success');
    expect(element?.children[1]).toBeInTheDocument();
    expect(element?.children[1]).toHaveClass('alert-description');
  });

  it('should render warning alert with onClose event', () => {
    const wrapper = render(<Alert {...closeProps} />);
    const element = wrapper.getByText('alert').parentNode;
    expect(element).toBeInTheDocument();
    expect(element?.lastChild).toBeInTheDocument();
    expect(element?.lastChild).toHaveClass('alert-close-btn');
    fireEvent.click(element?.lastChild as HTMLElement);
    expect(closeProps.onClose).toHaveBeenCalled();
  });
});
