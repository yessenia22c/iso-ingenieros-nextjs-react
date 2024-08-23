
export async function fetchAPI(endpoint) {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_BACKEND;
  console.log(`${apiUrl}/${endpoint}`)
  const res = await fetch(`${apiUrl}/${endpoint}`);
  
  if (!res.ok) {
      throw new Error('Error al hacer la solicitud');
  }

  return await res.json();
}

export async function getAllPosts() {
  console.log(NEXT_PUBLIC_WORDPRESS_API_BACKEND)
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_BACKEND;
  const res = await fetch(`${apiUrl}/wp/v2/posts`);

  if (!res.ok) {
    throw new Error('Error al hacer la solicitud');
}
  return res.json();
}