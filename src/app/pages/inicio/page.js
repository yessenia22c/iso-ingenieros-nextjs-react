import { BannerComponent } from "../../components/MainComponent/BannerComponent";
import { CardsComponent } from "../../components/MainComponent/CardsComponent";

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