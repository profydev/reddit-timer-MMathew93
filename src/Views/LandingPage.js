import React, { useState } from 'react';
import Form from './Form';

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const onSearch = async (subreddit) => {
    setStatus('loading');
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPosts(data.children);
    setStatus('resolved');
  };

  return (
    <>
      <div>
        <section>
          <h1>
            Find the top posts on Reddit
          </h1>
          <Form onSearch={onSearch} />
        </section>
        {
        status === 'loading' && (
          <div>
            Is loading...
          </div>
        )
      }
        {
        status === 'resolved' && (
          <div>
            Number of top posts:
            {posts.length}
          </div>
        )
      }
      </div>
    </>
  );
}

export default LandingPage;
