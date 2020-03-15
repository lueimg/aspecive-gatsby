import React from "react"

export default () => {
  return (
    <>
      {/* <section className='hero is-dark page-title-section'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Auspiciadores</h1>
            <h2 className='subtitle'></h2>
          </div>
        </div>
      </section> */}
      <br />

      <div className='container'>
        <div className='columns'>
          <div className='auspiciadores-list'>
            <figure className='image'>
              <img src='/congreso/auspiciadores/medtronic.png' />
            </figure>
            <figure className='image'>
              <img src='/congreso/auspiciadores/ghs.png' />
            </figure>
            <figure className='image'>
              <img src='/congreso/auspiciadores/sifuentes.jpg' />
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
