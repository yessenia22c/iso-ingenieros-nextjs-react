import PrincipalNavComponent from "../../components/NavComponent/PrincipalNavComponent.jsx"


export default function page()  {
  return (
    <>
    <section className="flex justify-center">
    <div className="w-[1000px] px-4">
        <div className="grid md:grid-cols-2 justify-center">
        <h1 className="text-4xl font-semibold my-4">Acerca de </h1>
        <p className="my-5 ">
          Somos una empresa de consultoría especializada en la implementación de
          sistemas de gestión de calidad, seguridad alimentaria, seguridad y salud
          en el trabajo, y gestión ambiental. Nuestro equipo de expertos cuenta con
          más de 20 años de experiencia en el diseño, implementación y certificación
          de sistemas de gestión basados en las normas ISO 9001, ISO 22000, ISO 45001
          e ISO 14001. Nos apasiona ayudar a las organizaciones a mejorar su eficiencia,
          productividad y competitividad a través de la implementación de sistemas de
          gestión de calidad y seguridad. </p>
         <p className="my-4"> 
          Nuestros servicios incluyen la consultoría,
          formación, auditoría y certificación de sistemas de gestión, así como el
          desarrollo de herramientas y recursos para facilitar la implementación y
          mantenimiento de los sistemas de gestión. Nuestro objetivo es ser el socio
          estratégico de las organizaciones en su camino hacia la excelencia y la
          sostenibilidad. ¡Contáctanos y descubre cómo podemos ayudarte a alcanzar tus
          objetivos de calidad y seguridad!
          <br></br>
          <strong>Hoy es un gran día aprender algo nuevo, ¡comienza tu formación con nosotros!</strong>
        </p>
        <img className="my-4" src="/img/INGENIEROS-FORMANDOSE.webp" alt="dos ingenieros capacitandose en normas de seguridad"></img>
        </div>
    </div>
    </section>
    </>
  )
}
