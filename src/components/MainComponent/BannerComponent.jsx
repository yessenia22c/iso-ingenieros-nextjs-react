import React from 'react'
import { FormContacto } from '../Forms/FormContacto'

export const BannerComponent = () => {
  return (
    <>
    <div className='flex absolute object-right'>
      <FormContacto></FormContacto>
      </div>
    <div className='xl:h-screen bg-gradient-to-tr from-red-400 to-[#000000a1] relative  sm:object-top'> 
      <img className='sm:object-top sm:object-scale-down flex w-full xl:h-screen xl:object-cover z-10 mix-blend-multiply' src="./img/Fondo.webp" alt="" />
    </div>
    </>
    
  )
}
