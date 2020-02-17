import React from "react"
import Usebanners from "../hooks/use-banners"
import Image from "gatsby-image"

const Banners = () => {
  const banners = Usebanners()

  return (
    <>
      <div className='block-bg-a page-block columns is-centered banners is-multiline'>
        {banners.map(image => (
          <div className='column is-8'>
            <Image fluid={image.sharp.fluid} />
          </div>
        ))}
      </div>
      <div className='columns'>
        <div className='column has-text-centered'>
          <a href='/congreso2020-ficha.doc'>Ficha de inscripción (Descargar)</a>
        </div>
      </div>
    </>
  )
}

export default Banners
