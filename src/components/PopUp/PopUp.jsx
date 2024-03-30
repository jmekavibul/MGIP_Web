import React, { useState, useEffect, useRef } from 'react';
import './PopUp.css'; // Make sure to create a corresponding CSS file

export const PopUp = ({ content }) => {
  const [contentHeight, setContentHeight] = useState('auto');

  // A ref to the content container to measure its size
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the content height is larger than the default size
    if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]); // This effect should run every time content changes

  return (
    <div className="popup-background">
      <div className="popup-container" style={{ height: contentHeight }}>
        <div className="popup-content" ref={contentRef}>
          {content}
        </div>
      </div>
    </div>
  );
};
