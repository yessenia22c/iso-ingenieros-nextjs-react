import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/post';

export async function GET() {
    try {
        console.log("entra aqui")
        const apiUrl = process.env.WORDPRESS_API_BACKEND;
        const response = await fetch(`${apiUrl}/wp/v2/posts`);
        
        if (!response.ok) {
            throw new Error('Error fetching posts');
        }

        const posts = await response.json(); 
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching posts' }, { status: 500 });
    }
}