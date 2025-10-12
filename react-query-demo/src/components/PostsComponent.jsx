import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query to fetch data
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery('posts', fetchPosts, {
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });

  // Loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Loading posts...</h2>
        <div className="spinner">🔄</div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <h2>Error fetching posts</h2>
        <p>{error.message}</p>
        <button
          onClick={() => refetch()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h2>Posts ({posts?.length || 0})</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: isFetching ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer'
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      <div style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {posts?.slice(0, 12).map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#f8f9fa'
            }}
          >
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              color: '#495057'
            }}>
              {post.title}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#6c757d',
              lineHeight: '1.4'
            }}>
              {post.body}
            </p>
            <small style={{ color: '#868e96' }}>
              Post ID: {post.id} | User ID: {post.userId}
            </small>
          </div>
        ))}
      </div>

      {posts && posts.length > 12 && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <small style={{ color: '#6c757d' }}>
            Showing first 12 posts out of {posts.length} total posts
          </small>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;
