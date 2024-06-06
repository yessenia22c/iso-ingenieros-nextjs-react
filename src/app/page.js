// import Image from "next/image";
// import { NavComponent } from "./components/NavComponent/NavComponent.jsx";
import PrincipalNavComponent from "./components/NavComponent/PrincipalNavComponent.jsx";
import Inicio from "./pages/inicio/page.js";

export default function Home() {
  
  return (

    <>
    
      <PrincipalNavComponent></PrincipalNavComponent>
      <Inicio></Inicio>
    
    </>
  );
}
