import React from 'react'
import Link from 'next/link'
export const NotFoundComponent = () => {
  return (
    <seccion className='w-[1000px]'>
      <div className='flex flex-col items-center justify-center h-[600px]'>
        <h1 className='text-6xl font-bold text-red-800'>404</h1>
        <p className='text-xl flex flex-col justify-center items-center text-center'>Lo sentimos, parece que esta página no éxiste.</p>

        <p className='text-xl font-bold'>¿Qué quieres hacer?</p>
        <ul className='flex flex-col justify-center items-center'>
          <li>
            <Link className=' text-gray-950 hover:text-red-400' href='/'>Ir a la página principal</Link>
          </li>
          <li>
            <Link className='  text-gray-950 hover:hover:text-red-400' href='/contactos'>Contáctanos ahora</Link>
          </li>
        </ul>
      </div>
    </seccion>
  )
}

