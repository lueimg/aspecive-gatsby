import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

function PresidentMessage () {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Dr.ElarCari.jpg" }) {
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
      <div className='columns is-centered'>
        <div className='column has-text-centered msg-title'>
            <span className="msg-title-text">
              Mensaje de nuestro Presidente
            </span>
        </div>
      </div>
      <div className='columns is-centered'>
        <div className='column is-5'>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Image fluid={image.sharp.fluid} />
            </div>
          </div>
        </div>
        <div className='column is-5 msg-body'>
          <p>
            En este nuevo año debemos estar preparados para seguir sirviendo
            como todos los años en esta labor que no tiene parangón.
          </p>
          <p>Estimados colegas:</p>

          <p>
            <strong>
            Ante el avance de la tecnología, comunicaciones y del conocimiento,
            se plantean nuevas perspectivas y actuar de las organizaciones
            científicas. Los que trabajamos en salud interesados en las
            afecciones de la columna vertebral tenemos un gran reto en la
            adquisición de las nuevas técnicas a nuestra disposición,
            conocerlas, encontrar las indicaciones a cada caso, adquirir la
            experiencia, realizarla con eficiencia y compartir nuestra
            experiencia. Es por lo tanto importante que las instituciones y
            sociedades científicas existan por el rol que cumplen. Llamo a los
            colegas de la orden interesados en la columna vertebral participar,
            fortalecer e impulsar las actividades de estas instituciones. Cuando
            se formó ASPECIVE muchos consideramos que era necesario esta
            sociedad, creemos que la única forma de desarrollar, avanzar en la
            columna vertebral es en esta institución. El aporte de todos los
            médicos interesados en ASPECIVE va a manifestarse en el mejoramiento
            de la atención de nuestros pacientes y en nosotros mismos ya que en
            algún momento seremos pacientes con afecciones de la columna
            vertebral y nos beneficiaremos.
            </strong>
          </p>
          <p>Atentamente,</p>
          <p>Dr. Elar Cari Condori.</p>
        </div>
      </div>
    </div>
  )
}

export default PresidentMessage
