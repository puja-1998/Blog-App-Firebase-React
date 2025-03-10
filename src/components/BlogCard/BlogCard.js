import React from 'react';
import './BlogCard.css';

export default function BlogCard({ blog }) {
     let data = blog.data();
  return (
    <div className="blog-card">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <p><strong>Created By:</strong>{data.createdBy}</p>
    </div>
  )
}
    