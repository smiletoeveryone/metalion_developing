import React, { useState, useEffect } from 'react';

interface FloatingPopupWindowProps {
  message: string;
  onClose: () => void;
  show: boolean;
  duration?: number;
}

const FloatingPopupWindow: React.FC<FloatingPopupWindowProps> = ({ message, onClose, show, duration = 5000 }) => {
  const [isShown, setIsShown] = useState(show);

  useEffect(() => {
    if (show) {
      setIsShown(true);
      const timer = setTimeout(() => {
        setIsShown(false);
        onClose();
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, duration, onClose]);

  const handleClose = () => {
    setIsShown(false);
    onClose();
  };

  return isShown ? (
    <div className="floating-popup-window">
      <div className="floating-popup-window__overlay" onClick={handleClose}></div>
      <div className="floating-popup-window__content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default FloatingPopupWindow;

