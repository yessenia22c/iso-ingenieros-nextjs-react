import React from 'react'

export const NotFoundComponent = () => {
  return (
    <seccion className='w-[1000px]'>
      <div className='flex flex-col items-center justify-center h-[500px]'>
        <h1 className='text-6xl font-bold text-red-800'>404</h1>
        <p className='text-xl'> Lo sentimos, parece que esta página no éxiste.</p>

        <p className='text-xl font-bold'>¿Qué quieres hacer?</p>
        <ul>
          <li>
            <a className=' text-gray-950 hover:text-red-400' href='/'>Ir a la página principal</a>
          </li>
          <li>
            <a className='  text-gray-950 hover:hover:text-red-400' href='/contacto'>Mirar nuestros cursos</a>
          </li>
        </ul>
      </div>
    </seccion>
  )
}

