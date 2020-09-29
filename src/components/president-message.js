import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

function PresidentMessage() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "DrAlfonsoBasurcopresidente.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="page-block block-bg-b president-message">
      <div className="columns is-centered">
        <div className="column has-text-centered msg-title">
          <span className="msg-title-text">Mensaje de nuestro Presidente</span>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-5">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Image fluid={image.sharp.fluid} />
            </div>
          </div>
        </div>
        <div className="column is-5 msg-body">
          <p>
            Con el deseo de que ustedes y toda su familia se encuentren bien,
            iniciamos otro periodo en nuestra Asociación Peruana de cirugía
            Vertebral (ASPECIVE). La magnitud de la pandemia que nos asola nadie
            se la imaginaba, pero es una realidad que debemos enfrentar.
            Seguramente la lucha contra este virus continuara aun por más tiempo
            y como profesionales de la salud debemos asumirla como rarea propia.
          </p>
          <p>
            Este contexto nos obliga asumir nuevos retos en la actividad
            asistencial y académica, por lo tanto hay que explorar nuevas formas
            de educación que sean efectivas y permitan aglutinar a todos
            nuestros asociados e incorporar nuevos colegas.
          </p>

          <p>
            in duda, el protagonismo de la actividad educativa virtual se ha
            multiplicado por doquier, y seguramente va continuar por mucho
            tiempo, pero es importante buscar la ventana que nos corresponde
            para tener la debida interaccion con los especialistads de la
            Cirugia de columna.
          </p>

          <p>
            ASPECIVE asume como responsabilidad propia la educación continua en
            el ámbito de la cirugía de columna. Es por ello que estamos
            conformando un plan de trabajo siempre teniendo como base las
            discusiones clínicas, los cursos de la especialidad y por supuesto
            un CONGRESO.
          </p>

          <p>
            Vamos a mantener activa nuestra página web y redes sociales, para
            interactuar y crear nuevas maneras de participación.
          </p>

          <p>
            Un saludo y un abrazo a toda la familia de cirujanos de columna en
            este momento difícil, esperando que esta circunstancia pase pronto,
            y al termino estemos más fuertes.
          </p>

          <p>Cuidense,</p>
          <p>
            <b>
            Dr. Alfonso Basurco Carpio
            </b>
          </p>
          <p>
            <strong>
              Presidente ASPECIVE
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PresidentMessage
