import React from 'react'
import { Blog } from '@/components/Blog/Blog'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
      props: {
          posts,
      },
  };
}

export default function page ({posts}) {
  
  return (
    <div>
        <h1>Blog</h1>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title.rendered}</li>
            ))}
            </ul>
        )}
    </div>
  )
}
