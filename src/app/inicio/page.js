import { BannerComponent } from "../../components/MainComponent/BannerComponent.jsx";
import { CardsComponent } from "../../components/MainComponent/CardsComponent.jsx";

export default function initScriptLoader() {
    return (
        <div>
        <section >
          <BannerComponent></BannerComponent>
        </section>
        <section className='flex justify-center'>
          <CardsComponent></CardsComponent>
        </section>
  
      </div>
    )
}