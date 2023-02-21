import React, { useState, useEffect } from 'react';

interface FloatingPopupMessageProps {
  message: string;
  onClose: () => void;
}

const FloatingPopupMessage: React.FC<FloatingPopupMessageProps> = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return show ? (
    <div className="floating-popup">
      <div className="floating-popup__content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default FloatingPopupMessage;

