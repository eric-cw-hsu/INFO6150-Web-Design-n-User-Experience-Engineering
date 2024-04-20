import React, { useContext } from 'react';
import tagColorMap from '../../lib/TagColorMap';
import './Tag.css';
import { ThemeContext } from '../../lib/ThemeProvider';

const Tag = ({
  tag
}) => {
  const { theme } = useContext(ThemeContext);

  const getTagColor = (tag) => {
    if (tagColorMap[tag]) {
      return tagColorMap[tag][theme];
    } else {
      return tagColorMap['default'];
    }
  }
  return (
    <div className="tag flex justify-center items-center overflow-x-hidden" style={{ backgroundColor: getTagColor(tag) }}>
      <p className='text-center text-nowrap'>{tag}</p>
    </div>
  );
}

export default Tag;
