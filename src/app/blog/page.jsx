import { Loading } from '@/components/Loading';
import axios from 'axios';
import { ListaBlog } from '@/components/Blog/ListaBlog';
import DOMPurify from 'isomorphic-dompurify';

import Link from 'next/link'

async function getBlogs() {

  const apiUrl = process.env.DOMINIO_FRONTEND;
  
  const res = await axios.get(`${apiUrl}/api/blog`).then((response) => {
    //console.log(response.data)
    return response.data;
  }).catch(error => {
    console.error('Error al obtener los posts:', error);
    return null;
  });

  return res;
  
}
export const dynamic = 'force-dynamic'

async function BlogsPage () {

  const posts = await getBlogs()
  //console.log(posts)
  

  //console.log(posts)
  return (
    <section className="flex justify-center">
      <div className="w-[1000px] px-4">
        
          <h1 className='text-xl font-bold py-5'>Blog</h1>
          {posts ? (
            <div>
            { posts.map((post) => {
              
                const parrafo = DOMPurify.sanitize(post.excerpt.rendered, { SAFE_FOR_TEMPLATES: { html: true } });
                return (
                  <article className='border rounded-md p-5 my-3' key={post.id}>
                  <h2 className='text-xl font-semibold'>
                    <Link href={`blog/${post.slug}`}> {post.title.rendered}</Link>
                  </h2>
                  {<div dangerouslySetInnerHTML={{ __html: parrafo }} />}
                  
                  </article>
                )
              })
            }
            </div>
              
          ) : (
            <Loading verificar={true}></Loading>
          )}
      </div>
    </section>

    // <div>
    //   <ListaBlog></ListaBlog>
    // </div>
  )
}

export default BlogsPage
