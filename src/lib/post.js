'use client'
export async function fetchAPI(endpoint) {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_BACKEND;
    const res = await fetch(`${apiUrl}/${endpoint}`, {
    // headers: {
    //   Authorization: `Bearer ${process.env.WORDPRESS_API_TOKEN}`,
    // },
  });
  console.log(process.env.NEXT_PUBLIC_WORDPRESS_API_URL);
  if (!res.ok) {
    throw new Error('Error al hacer la solicitud');
  }

  return await res.json();
}

export async function getAllPosts() {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_BACKEND;
    console.log(apiUrl)
    const res = await fetch(`${apiUrl}/wp/v2/posts`);
    if (!res.ok) {
        throw new Error('Error al hacer la solicitud');
    }
    return await res.json();
}