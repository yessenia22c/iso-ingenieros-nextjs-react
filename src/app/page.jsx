// import Image from "next/image";
// import { NavComponent } from "./components/NavComponent/NavComponent.jsx";
// import PrincipalNavComponent from "../components/NavComponent/PrincipalNavComponent.jsx";
// import Page from "./inicio/page";
import BannerComponent from "@/components/MainComponent/BannerComponent";
import CardsComponent from "@/components/MainComponent/CardsComponent";
export default function Home() {
  
  return (

    <>
      <div>
        <section >
          <BannerComponent></BannerComponent>
        </section>
        <section className='flex justify-center'>
          <CardsComponent></CardsComponent>
        </section>
      </div>
    
    </>
  );
}
