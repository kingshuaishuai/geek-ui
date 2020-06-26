import React, { useState } from 'react';
import classNames from 'classnames';

export enum AlertType {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export interface AlertProps {
  message: string;
  description?: string;
  type?: AlertType;
  className?: string;
  onClose?: () => void;
  closable?: boolean;
  show?: boolean;
}

function Alert(props: AlertProps) {
  const { message, description, type, className, closable, onClose } = props;

  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  });

  const [alertShow, setAlertShow] = useState(true);
  const handleClose = () => {
    setAlertShow(false);
    onClose && onClose();
  };

  if (!alertShow) {
    return null;
  }
  return (
    <div className={classes}>
      <span className="alert-message">{message}</span>
      {description && <span className="alert-description">{description}</span>}
      {closable && (
        <span className="alert-close-btn" onClick={handleClose}>
          close
        </span>
      )}
    </div>
  );
}

Alert.defaultProps = {
  type: AlertType.Default,
};

export default Alert;
