import React, { useContext } from 'react';
import './BlogCard.css';
import Tag from './Tag';
import { ThemeContext } from '../../lib/ThemeProvider';

const BlogCard = ({
  title,
  date,
  description,
  tags
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full blog-card flex-col blog-card--${theme}`}>
      <div className="flex items-center justify-between blog-card-title-date">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>

      <p>{description}</p>
      <div className="tags flex justify-end">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))
        }
      </div>
    </div >
  );
}

export default BlogCard;
