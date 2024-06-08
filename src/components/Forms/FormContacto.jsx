import React from "react";

export const FormContacto = () => {
  return (
    <div className=" bg-gradient-to-tr from-red-800 to-[#f5704b] text-white text-[14px] rounded-xl my-2">
      <form className="m-8 appearance-none">
        <div className="flex flex-col ">
          <label className="my-2" name="nombre">Nombre</label>
          <input
            
            className=" text-gray-800 appearance-none outline-none
             ring-gray-600 border-0 rounded-md p-2 
             focus:ring-2 focus:ring-inset focus:ring-red-400"
            type="text"
            id="nombre"
            name="nombre"
          />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="email">Correo electrónico</label>
          <input 
          className=" text-gray-800 appearance-none outline-none
          ring-gray-600 border-0 rounded-md p-2 
          focus:ring-2 focus:ring-inset focus:ring-red-400"
           type="email" id="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="telefono">Telefono</label>
          <input 
          placeholder="(xxx) xxx-xx-xxx"
            className=" text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-red-400"
          type="tel" id="telefono" name="telefono" />
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="mensaje">Mensaje</label>
          <textarea 
          placeholder="Escribe aquí tu mensaje..."
          rows={3}
            className=" text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-red-400"
          id="mensaje" name="mensaje" />
        </div>
        <button className="my-2" type="submit">Enviar</button>
      </form>
    </div>
  );
};
