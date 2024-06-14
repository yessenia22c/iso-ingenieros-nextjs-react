import React from 'react'
import Link from 'next/link'
export const NavComponent = () => {
    
    return (
      <>
      <nav className='bg-red-800'>
                 
          <ul className='max-[499px]:hidden text-[15px] flex p-2 gap-12 lx:w-[1000px] items-center max-[620px]:text-[14px] max-[620px]:gap-10'>
              <li>
                  <img className='w-[90px]' src="./ISO-INGENIEROS-LOGO.svg" alt="" />
              </li>
              <li>
                  <Link href='/' className='text-white'>Inicio</Link>
              </li>
              <li>
                  <Link href='/acerca-de' className='text-white'>Acerca de</Link>
              </li>
              <li>
                  <Link href='https://www.eliteiso.org/cursos' target='_blank' className='text-white'>Cursos</Link>
              </li>
              <li>
                  <Link href='/contactos' className='text-white'>Contactos</Link>
              </li>
          </ul>
            
      </nav>
      
          
      </>
      
      
    )
  }
  