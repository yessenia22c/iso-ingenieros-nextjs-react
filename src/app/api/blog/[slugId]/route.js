import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        console.log("entra aqui")
        const apiUrl = process.env.WORDPRESS_API_BACKEND;
        const response = await fetch(`${apiUrl}/wp/v2/posts?slug=${params.slugId}`);
        
        if (!response.ok) {
            throw new Error('Error al obtener el blog');
        }

        const posts = await response.json(); 
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Ha ocurrido un problema al cargar los datos' }, { status: 500 });
    }
}