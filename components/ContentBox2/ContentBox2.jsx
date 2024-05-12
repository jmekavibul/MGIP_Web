import React, { useRef, useEffect, useState } from 'react';
import './ContentBox2.css'; // Import the modified CSS file

const ContentBox2 = ({content, style}) => {
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [content]); // This effect should run every time content changes

  return (
    <div className="content-box-container2" style={{ ...style, height: contentHeight }}>
      <div className="content-box2" ref={contentRef}>
        {content}
      </div>
    </div>
  );
};
export default ContentBox2;
