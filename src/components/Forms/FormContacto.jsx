'use client'

import axios from "axios";
import React, { useRef, useState } from "react";

export const FormContacto = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const formRef = useRef(null);
  const handleSubmit =  async(e) => {
    e.preventDefault();
    const res = await axios.post("/api/contactos", formData);
    formRef.current.reset()
    //console.log(formData);
    console.log('MENSAJE ENVIADO', res);
  };

  return (
    <div className=" bg-gradient-to-tr from-red-800 to-[#f5704b] text-white text-[14px] rounded-xl my-2">
      <form onSubmit={handleSubmit} ref={formRef} className="m-8 appearance-none">
        <div className="flex flex-col ">
          <label className="my-2" name="nombre">Nombre</label>
          <input
            
            className=" text-gray-800 appearance-none outline-none
             ring-gray-600 border-0 rounded-md p-2 
             focus:ring-2 focus:ring-inset focus:ring-red-400"
            type="text"
            id="nombre"value={formData.nombre}
            name="nombre"

            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="email">Correo electrónico</label>
          <input 
          value={formData.email}
          onChange={handleChange}
          className=" text-gray-800 appearance-none outline-none
          ring-gray-600 border-0 rounded-md p-2 
          focus:ring-2 focus:ring-inset focus:ring-red-400"
           type="email" id="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="telefono">Telefono</label>
          <input 
          value={formData.telefono}
          onChange={handleChange}
          placeholder="(xxx) xxx-xx-xxx"
            className=" text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-red-400"
          type="tel" id="telefono" name="telefono" />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="mensaje">Mensaje</label>
          <textarea 
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe aquí tu mensaje..."
          rows={3}
            className=" text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-red-400"
          id="mensaje" name="mensaje" />
        </div>
        <button className="my-2" type="submit" >Enviar</button>
      </form>
    </div>
  );
};
