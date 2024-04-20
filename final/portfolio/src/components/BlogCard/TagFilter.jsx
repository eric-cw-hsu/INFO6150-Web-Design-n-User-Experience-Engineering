import React from 'react';
import tagColorMap from '../../lib/TagColorMap';
import './TagFilter.css';
import { arrowRightIcon } from '../../lib/IconDictionary';

const TagFilter = ({
  selectedTag,
  setSelectedTag
}) => {
  return (
    <div className="flex tag-filter">
      <div className="tag-filter-container flex overflow-x-scroll">
        <button
          className={`tag-filter-btn ${selectedTag === 'all' ? "tag-filter-btn--selected" : ""}`}
          onClick={() => { setSelectedTag("all") }}
        >
          All
        </button>
        {Object.keys(tagColorMap).map((tag, index) => (
          <button
            key={index}
            className={`tag-filter-btn ${selectedTag === tag ? "tag-filter-btn--selected" : ""}`}
            onClick={() => { setSelectedTag(tag) }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center">
        {arrowRightIcon}
      </div>

    </div>

  );
}

export default TagFilter;
