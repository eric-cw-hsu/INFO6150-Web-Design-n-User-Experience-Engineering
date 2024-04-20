import React, { useContext, useState } from 'react';
import blogPosts from '../../lib/BlogPosts';
import BlogCard from '../../components/BlogCard/BlogCard';
import './Blog.css';
import TagFilter from '../../components/BlogCard/TagFilter';
import { ThemeContext } from '../../lib/ThemeProvider';


const Blog = () => {

  const { theme } = useContext(ThemeContext);
  const [selectedTag, setSelectedTag] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const changeTagHandler = (tag) => {
    setSelectedTag(tag);
    if (tag === 'all') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(filterPostsWithTag(tag));
    }
  }

  const filterPostsWithTag = (tag) => {
    return blogPosts.filter(post => post.tags.includes(tag));
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    let filteredPosts = filterPostsWithTag(selectedTag);
    filteredPosts = filteredPosts.filter(post => {
      if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      if (post.description.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      if (post.date.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      if (post.tags.includes(searchValue)) {
        return true;
      }

      return false;
    });
    setFilteredPosts(filteredPosts);
  }

  return (
    <div className="blog-container flex-col">
      <h1 className="blog-title">Blogs</h1>
      <div className="blog-search-bar w-full">
        <input
          className={`w-full border-box blog-search-bar__input blog-search-bar__input--${theme}`}
          type="text"
          placeholder="Search for blog posts..."
          onChange={handleSearch}
        />
      </div>

      <TagFilter selectedTag={selectedTag} setSelectedTag={changeTagHandler} />

      <div className="w-full blog-post-container flex-col">
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            description={post.description}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
