import { FormContacto } from "@/components/Forms/FormContacto.jsx";
import { NavComponent } from "../../components/NavComponent/NavComponent.jsx";

export default function Contactos () {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-[1000px] px-4">
          <section className="grid grid-flow-row sm:grid-cols-2 justify-center gap-4 py-4">
            <article>
            <h1 className="text-4xl font-semibold my-4">Contáctanos </h1>
            <p className=" ">
              ¿Tienes alguna pregunta sobre nuestros cursos de normas ISO o
              necesitas asesoramiento personalizado? Estamos aquí para ayudarte.
              Nuestro equipo de expertos está disponible para resolver tus
              dudas, ofrecerte orientación y apoyarte en el proceso de
              implementación y certificación de las normas ISO 9001, ISO 22000,
              ISO 45001 e ISO 14001. No dudes en ponerte en contacto con
              nosotros a través del formulario a continuación, o llámanos
              directamente. Juntos, podemos llevar tu organización al siguiente
              nivel de calidad y eficiencia. ¡Esperamos saber de ti pronto!
            </p>
            </article>
            <FormContacto></FormContacto>
          </section>
        </div>
      </section>
    </>
  );
}
