'use client'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from '@/lib/post'
import axios from 'axios';
export const ListaBlog = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/blog").then((response) => {
            setPosts(response.data);
            setLoading(false);
        }).catch(error => {
            console.error('Error al obtener los posts:', error);
            setLoading(false);
        });
    }, []);
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
