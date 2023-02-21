import React, { useState, useEffect } from 'react';

const FloatApp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>This is an automatically popping up popup window.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatApp;

