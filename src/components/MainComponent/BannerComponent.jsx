'use client'
import React from 'react'
import { useRouter } from 'next/navigation'



function BannerComponent  () {
  const router = useRouter()
  const onContact = (e) => {
    e.preventDefault()
    router.push('/contactos')
  }
  return (
    <>
    <div className='flex justify-center items-center xl:h-screen bg-gradient-to-tr from-red-400 to-[#000000a1] relative  sm:object-top'> 
      <div className='z-[12] flex-col items-center text-center justify-center absolute'>
        <h1 className='text-center text-white  text-[22px] sm:text-4xl xl:text-6xl font-semibold'>Cursos de formación profesional</h1>
        <button onClick={onContact} className='my-4 text-sm sm:text-xl'>Contáctanos</button>
      </div>
      <img className='sm:object-top sm:object-scale-down flex w-full xl:h-screen xl:object-cover z-10 mix-blend-multiply' src="./img/Fondo.webp" alt="" />
    </div>
    </>
    
  )
}
export default BannerComponent