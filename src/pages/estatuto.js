import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"

export default () => {
  return (
    <>
      <Layout>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='msg-title '>
                <div className='msg-title-text line-bg-gray p-0 w-100'>
                  Estatuto
                </div>
              </div>
            </div>
          </div>

          <div className='columns is-centered'>
            <div className='column is-8'>
              <h2>
                <strong>
                  CAPITULO I DENOMINACION, DURACION, FINES Y DOMICILIO
                </strong>
              </h2>

              <p>&nbsp;</p>

              <p>
                <strong>ARTICULO PRIMERO.- DENOMINACION Y DURACION.-</strong>
                &nbsp;Bajo la denominación de “ASOCIACION PERUANA DE CIRUGÍA
                VERTEBRAL”que podrá usar la denominación abreviada de “ASPECIVE”
                se constituye una asociación de duración indefinida, cuya
                existencia comienza el día de su inscripciónenel registro
                respectivo; pero que reconoce haber sido fundada como asociación
                no inscrita el día10 de mayo de 1994 en que se eligió la primera
                junta directiva transitoria y a la comisión encargada de la
                elaboración de los estatutos y el reglamento de la asociación.
              </p>

              <p>
                <strong>ARTICULO SEGUNDO.- DOMICILIO.-</strong>&nbsp;La
                asociación tiene como domicilio la ciudad de Lima, pudiendo
                establecer filiales en cualesquier otro lugar de la República.
              </p>

              <p>
                <strong>ARTICULO TERCERO.- FINES.-</strong>&nbsp;La asociación
                que se constituye es una institución medico científica, sin
                fines de lucro, creada con el objetivo de promover la detección,
                control, prevención y tratamiento, así como también la
                investigación y la docencia de todo lo relacionado con la
                patología clínico-quirúrgica de la columna vertebral.
              </p>

              <p>&nbsp;</p>

              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
