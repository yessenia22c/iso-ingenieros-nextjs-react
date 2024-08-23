'use client'
import React from 'react'

export const Loading = ({verificar}) => {
  return (
    <div>{verificar ? (<p>Cargando...</p>): (<> </> ) }</div>
  )
}
