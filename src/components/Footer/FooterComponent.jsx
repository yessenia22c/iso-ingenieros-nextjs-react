import React from 'react'

export const FooterComponent = () => {
  return (
    <div>
        <footer className="w-full bg-gray-800 flex justify-center relative bottom-0 py-2">
            <div className='w-[1000px] m-4'>
                <img className='w-[90px] ' src="./ISO-INGENIEROS-LOGO.svg " alt="logo iso ingenieros" />
                
                <p className='text-white my-3'>Los mejores cursos al menor precio</p>
                <div className='grid grid-flow-col grid-cols-2 text-[15px] max-[450px]:grid-rows-2 max-[450px]:justify-center'>
                    <ul className='my-6' >
                        <li >
                            <a href='/' className='text-white hover:text-red-400'>Inicio</a>
                        </li>
                        <li>
                            <a href='/acerca-de' className='text-white hover:text-red-400'>Acerca de</a>
                        </li>
                        <li>
                            <a href='#' className='text-white hover:text-red-400'>Cursos</a>
                        </li>
                        <li>
                            <a href='/contactos' className='text-white hover:text-red-400'>Contactos</a>
                        </li>
                    </ul>
                    <ul className='my-6'>
                        <li>
                            <a href='/politica-de-privacidad' className='text-white hover:text-red-400'>Política de privacidad</a>
                        </li>
                        <li>
                            <a href='/terminos-y-condiciones' className='text-white hover:text-red-400'>Términos y condiciones</a>
                        </li>
                        <li>
                            <a href='/cookies' className='text-white'>Cookies</a>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-center text-white text-[13px]'>
                    <p>Copyright © 2024 | Desarrollado por&nbsp;  </p>
                    <a href="https://yessenia.dev" className='hover:text-red-400' target='_blank' > yessenia.dev </a>

                </div>
            </div>
            
        </footer>
    </div>
  )
}
