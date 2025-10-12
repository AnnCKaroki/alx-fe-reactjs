import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock blog posts data
  const mockPosts = {
    1: {
      id: 1,
      title: "Getting Started with React Router",
      content: "React Router is a powerful library for handling routing in React applications...",
      author: "Jane Doe",
      date: "2024-01-15"
    },
    2: {
      id: 2,
      title: "Advanced Routing Techniques",
      content: "Learn about nested routes, protected routes, and dynamic routing...",
      author: "John Smith",
      date: "2024-01-20"
    },
    3: {
      id: 3,
      title: "Authentication in React Apps",
      content: "Implementing secure authentication patterns in React applications...",
      author: "Alice Johnson",
      date: "2024-01-25"
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = mockPosts[id];
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [id]);

  const handlePrevPost = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 1) {
      navigate(`/blog/${prevId}`);
    }
  };

  const handleNextPost = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= 3) {
      navigate(`/blog/${nextId}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading blog post...</div>;
  }

  if (!post) {
    return (
      <div className="error">
        <h2>Blog Post Not Found</h2>
        <p>The blog post with ID {id} does not exist.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <header className="blog-header">
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span>By {post.author}</span>
          <span>Published on {post.date}</span>
        </div>
      </header>

      <div className="blog-content">
        <p>{post.content}</p>
      </div>

      <nav className="blog-navigation">
        <button
          onClick={handlePrevPost}
          disabled={parseInt(id) <= 1}
          className="nav-btn"
        >
          ← Previous Post
        </button>
        <button
          onClick={handleNextPost}
          disabled={parseInt(id) >= 3}
          className="nav-btn"
        >
          Next Post →
        </button>
      </nav>
    </div>
  );
};

export default BlogPost;
