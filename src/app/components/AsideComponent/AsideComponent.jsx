 import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const AsideComponent = ({isHidden, isMinWidth, close}) => {
    //console.log('VALOR HIDEN ', isHidden +' VALOR MIN WIDTH ', isMinWidth);
    //const [hiddenAside, setHiddenAside] = useState(true);
    
    const cerrarAside = () => {
        close();
        
    }
    
    if(isHidden && isMinWidth){
        
        return (
            
            <aside className={ 'min-[500px]:hidden flex-col w-64 bg-gray-800 text-white top-0 h-full fixed z-30'}>
                {/* <HeaderCerrarAside cerrarAside = {cerrarAside}></HeaderCerrarAside> */}
                <div className="flex mx-4 justify-between my-4">
                    <img className='w-[60px] p-0' src="./ISO-INGENIEROS-LOGO.svg" alt="" />
                    <button onClick={cerrarAside}>
                        <img src="./iconos/close.svg" alt="" />
                    </button>
                </div>
                <ul className='flex flex-col gap-4 p-4'>
                    <li>
                        <a href='#' className='text-white'>Inicio</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Acerca de</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Cursos</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Contactos</a>
                    </li>
                </ul>
            </aside>

    
        )
    }
    
}
