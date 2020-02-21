import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import Usebanners from "../hooks/use-banners"

export default () => {
  const banners = Usebanners()

  return (
    <>
      <Layout>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='msg-title '>
                <div className='msg-title-text line-bg-gray p-0 w-100'>
                  IV Congreso Nacional de Cirugía Vertebral
                </div>
              </div>
            </div>
          </div>

          <div className='columns is-centered'>
            <div className='column is-8'>
              <div className='block-bg-a page-block columns is-centered banners is-multiline'>
                {banners.map(image => (
                  <div className='column'>
                    <Image fluid={image.sharp.fluid} />
                  </div>
                ))}
              </div>
              <div className='columns'>
                <div className='column has-text-centered'>
                  <a href='/congreso2020-ficha.doc'>
                    Ficha de inscripción (Descargar)
                  </a>
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
