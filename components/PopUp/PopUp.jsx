import React, { useState, useEffect, useRef } from 'react';
import './PopUp.css';
import close from '../../pictures/close.png'
export const PopUp = ({ content, onClose }) => {
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]);

  if (!content) {
    return null;  // If no content is provided, do not render the PopUp
  }

  return (
    <div className="popup-background" onClick={onClose}>
      <div className="popup-container" onClick={e => e.stopPropagation()}>
        <div className="popup-content" ref={contentRef}>
          {content}
        </div>
        <img
            src={close}
            className="close-popup"
            alt="Close"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            />
      </div>
    </div>
  );
};
