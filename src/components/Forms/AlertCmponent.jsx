import React from 'react'

export const AlertCmponent = ({mensaje,}) => {
  return (
    <div className="bg-[#00000000] border border-gray-400 text-white my-2 px-2 py-1 rounded relative" role="alert">
        <strong className="font-bold">{mensaje}</strong>
    </div>
  )
}
