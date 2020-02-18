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
                  <strong css={css`font-size: 2rem;`}>Junta directiva 2015 – 2020</strong>
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
                      alt='wesley'
                      className='alignnone size-full wp-image-49'
                      src='/directiva/Dr.ElarCari.jpg'
                      css={css`width: 100px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>PRESIDENTE:</strong> Elar Cari Condori.
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='Miguel Urday Villanueva'
                      className='alignnone size-full wp-image-46'
                      src='/directiva/dr.urday.jpg'
                      css={css`width: 117px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VICEPRESIDENTE:</strong> Miguel Urday Villanueva
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='chipana'
                      className='alignnone size-full wp-image-43'
                      src='/directiva/Dr.EdgardMorales.jpg'
                      css={css`width: 151px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>SECRETARIO GENERAL:</strong> Edgar Morales Vásquez
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='cari'
                      className='alignnone size-full wp-image-42'
                      src='/directiva/DR.ALFONSO%20BASURCO.jpg'
                      css={css`width: 151px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>TESORERO:</strong> Alfonso Basurco Carpio
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='chirinos'
                      className='alignnone size-full wp-image-44'
                      src='/directiva/Dr.Laos.jpg'
                      css={css`width: 128px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>SECRETARIO DE FILIALES:</strong> Eduardo Laos
                    Plasier
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='moralesdias'
                      className='alignnone size-full wp-image-47'
                      src='/directiva/Dr.Sandoval.jpg'
                      css={css`width: 123px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>DIRECTOR DE ACCION CIENTIFICA:</strong> Marvin
                    Sandoval Cabrera
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='moralesdias'
                      className='alignnone size-full wp-image-47'
                      src='/directiva/Dr.Cauti.jpg'
                      css={css`width: 109px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE PUBLICACIONES Y BIBLIOTECA:</strong> Daniel
                    Cauti de la Cruz
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='garcialuto'
                      className='alignnone size-full wp-image-51'
                      src='/directiva/Jersonweb.JPG'
                      css={css`width: 99px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE RELACIONES INSTITUCIONALES:</strong> Jerson
                    Flores Castillo
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='Juan Coasaca Torres'
                      className='alignnone size-full wp-image-48'
                      src='http://aspecive.com/workpress_velito/wp-content/uploads/2016/06/raulmacchi2.jpg'
                      css={css`width: 150px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>VOCAL DE COORDINACION INTERNA:</strong> Juan Coasaca
                    Torres
                  </div>
                </li>
                <li className='directiva-item'>
                  <div className='directiva-imagen'>
                    <img
                      alt='raulmacchi'
                      className='alignnone size-full wp-image-48'
                      src='/directiva/presi-1.jpg'
                      css={css`width: 109px; height: 150px;`}
                    />
                  </div>

                  <div className='directiva-text'>
                    <strong>PAST- PRESIDENT:</strong> Wesley Alaba García.
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
