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
                necesitas asesoramiento personalizado? Estamos aquí para
                ayudarte. Nuestro equipo de expertos está disponible para
                resolver tus dudas, ofrecerte orientación y apoyarte en el
                proceso de implementación y certificación de las normas ISO
                9001, ISO 22000, ISO 45001 e ISO 14001. No dudes en ponerte en
                contacto con nosotros a través del formulario a continuación, o
                llámanos directamente. Juntos, podemos llevar tu organización al
                siguiente nivel de calidad y eficiencia. ¡Esperamos saber de ti
                pronto!
              </p>
            </article>
            <FormContacto></FormContacto>
          </section>
          <section className="my-4">
          <h1 className="text-4xl font-semibold my-4">Nuestra ubicación</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.019356289301!2d-63.18780958241218!3d-17.76550332286773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c44851e85d%3A0xc4ec9c4e78a8c75d!2sEdificio%20Cupes%C3%AD!5e0!3m2!1ses!2sbo!4v1718203342959!5m2!1ses!2sbo"
              className="w-full h-[400px]"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </section>
    </>
  );
}
