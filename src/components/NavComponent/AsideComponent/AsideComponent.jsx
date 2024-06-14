 import { useState } from "react";
 import Link from "next/link";
// eslint-disable-next-line react/prop-types
export const AsideComponent = ({isHidden, isMinWidth, close}) => {
    //console.log('VALOR HIDEN ', isHidden +' VALOR MIN WIDTH ', isMinWidth);
    //const [hiddenAside, setHiddenAside] = useState(true);
    
    const cerrarAside = () => {
        close();
        
    }
    
    if(isHidden && isMinWidth){
        
        return (
            
            <aside className={ 'min-[500px]:hidden flex-col w-60 bg-gray-800 text-white top-0 h-full fixed z-30'}>
                {/* <HeaderCerrarAside cerrarAside = {cerrarAside}></HeaderCerrarAside> */}
                <div className="flex mx-4 justify-between my-4">
                    <img className='w-[60px] p-0' src="./ISO-INGENIEROS-LOGO.svg" alt="" />
                    <button className="bg-gray-800 hover:bg-gray-800" onClick={cerrarAside}>
                        <img src="./iconos/close.svg" alt="" />
                    </button>
                </div>
                <ul className='flex flex-col gap-4 p-4'>
                    <li>
                        <Link href='/' className='text-white'>Inicio</Link>
                    </li>
                    <li>
                        <Link href='/acerca-de' className='text-white'>Acerca de</Link>
                    </li>
                    <li>
                        <Link href='https://www.eliteiso.org/cursos' target='_blank'  className='text-white'>Cursos</Link>
                    </li>
                    <li>
                        <Link href='/contactos' className='text-white'>Contactos</Link>
                    </li>
                </ul>
            </aside>

    
        )
    }
    
}
