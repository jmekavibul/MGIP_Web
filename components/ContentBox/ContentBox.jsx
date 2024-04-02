import React, { useRef, useEffect, useState } from 'react';
import './ContentBox.css'; // Make sure to create a corresponding CSS file

export const ContentBox = ({ content, onClick, url }) => {
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if the content height is larger than the default size and adjust accordingly
    if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]); // This effect should run every time content changes

  // Handle the click event
  const handleClick = () => {
    if (onClick) {
      onClick(); // If there's a click handler passed, call it
    }
    if (url) {
      window.location.href = url; // Redirect to the URL if provided
    }
  };

  return (
    <div className="content-box-container" style={{ height: contentHeight }} onClick={handleClick}>
      <div className="content-box" ref={contentRef}>
        {content}
      </div>
    </div>
  );
};