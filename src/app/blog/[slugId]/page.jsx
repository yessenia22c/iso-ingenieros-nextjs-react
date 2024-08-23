import axios from 'axios';
import React from 'react'
import DOMPurify from 'isomorphic-dompurify';
 import styles from  "../blog.module.css"


async function getBlog(id) {
    console.log(id)
    const apiUrl = process.env.DOMINIO_FRONTEND;
    
    const res = await axios.get(`${apiUrl}/api/blog/${id.slugId}`).then((response) => {
      //console.log(response.data)
      return response.data;
    }).catch(error => {
      console.error('Error al obtener los posts:', error);
      return null;
    });
  
    return res;
    
}


async function BlogPage ({params}) {
  //console.log(params)
  const blog = await getBlog(params)

    //console.log(blog)
  return (
    <section className="flex justify-center">
        <div className={styles.contenedor}>
          <div className="w-[1000px] px-4">
              {blog ? (
              <article>
              {blog.map((post) => {
                const content = DOMPurify.sanitize(post.content.rendered, { SAFE_FOR_TEMPLATES: { html: true } });

                  return (
                  <section className='border rounded-md p-5 my-3' key={post.id}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />   
                  </section>
                )
              })}
              </article>
              ) : (
              <p>Cargando...</p>
              )}
          </div>
        </div>
            
        
    </section>
  )
}

export default BlogPage
