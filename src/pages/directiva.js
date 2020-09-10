import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { css } from "@emotion/core"

export default () => {
  return (
    <>
      <Layout>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='msg-title '>
                <div className='msg-title-text line-bg-gray p-0 w-100'>
                  Directiva
                </div>
              </div>
            </div>
          </div>

          <div className='columns is-centered'>
            <div className='column is-8'>
              <h1>
                <u>
                  <strong css={css`font-size: 2rem;`}>Junta directiva 2019 – 2021</strong>
                </u>
              </h1>

              <p>
                Nos honramos en tener la más renombrada plana Doctoral y es con
                este motivo que luego de una larga deliberación se llega a la
                decisión de nombrar a los siguientes Drs. durante los años
                señalados.
              </p>

              <ul className='directiva-grid'>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      className='alignnone size-full wp-image-49'
                      src='/directiva/DrAlfonsoBasurcopresidente.JPG'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>PRESIDENTE:</strong> Alfonso Basurco Carpio
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      className='alignnone size-full wp-image-46'
                      src='/directiva/Dr.Laos.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VICEPRESIDENTE:</strong> Eduardo Laos Plasier 
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='chipana'
                      className='alignnone size-full wp-image-43'
                      src='/directiva/presi-1.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>SECRETARIO GENERAL:</strong> Wesley Alaba García
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='cari'
                      className='alignnone size-full wp-image-42'
                      src='/directiva/Dr.Sandoval.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>TESORERO:</strong> Marvin Sandoval Cabrera 
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='chirinos'
                      className='alignnone size-full wp-image-44'
                      src='/directiva/DrEliasLira.jpeg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>SECRETARIO DE FILIALES:</strong> Elias Lira Mamani 
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='dr rene chirinos'
                      className='alignnone size-full wp-image-47'
                      src='/directiva/drReneChirinos.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>DIRECTOR DE ACCION CIENTIFICA:</strong> 
                    Rene Chirinos Zegarra
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='moralesdias'
                      className='alignnone size-full wp-image-47'
                      src='/directiva/DrEytylJimenez.jpeg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE PUBLICACIONES Y BIBLIOTECA:</strong> 
                    Eytyl Jimenez Guevara
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='garcialuto'
                      className='alignnone size-full wp-image-51'
                      src='/directiva/DrRobertBurgos.jpeg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE RELACIONES INSTITUCIONALES:</strong> 
                    Robert Burgos Coronado
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='Juan Coasaca Torres'
                      className='alignnone size-full wp-image-48'
                      src='/directiva/dr.urday.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE COORDINACION INTERNA:</strong> 
                    Miguel Urday Villanueva
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='raulmacchi'
                      className='alignnone size-full wp-image-48'
                      src='/directiva/Dr.ElarCari.jpg'
                      css={css` max-height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>PAST- PRESIDENT:</strong> Elar Cari Condori.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
