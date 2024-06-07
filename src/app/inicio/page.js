import { BannerComponent } from "../../components/MainComponent/BannerComponent.jsx";
import { CardsComponent } from "../../components/MainComponent/CardsComponent.jsx";

export default function initScriptLoader() {
    return (
        <main>
        <section >
          <BannerComponent></BannerComponent>
        </section>
        <section className='flex justify-center'>
          <CardsComponent></CardsComponent>
        </section>
  
      </main>
    )
}