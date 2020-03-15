import React from "react"
import { Cronograma } from '../data/cronograma'

export default () => {
  return (
    <>
      {/* <section className='hero is-dark page-title-section'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Cronograma</h1>
            <h2 className='subtitle'></h2>
          </div>
        </div>
      </section> */}
      <br />

      <div className='container'>
        <div className='columns is-centered'>
            <div className="column is-8">
              {Cronograma.map((row , index) => {
                return (
                  <ProgramRow key={index} {...row} />
                )
              })}
            </div>
        </div>
      </div>
      <br />
    </>
  )
}

function ProgramRow (props) {
  return (
    <div className="box">
      <article className='media'>

        <div className='media-left'>
          <p className=''>
            <h1 className="">{props.hora}</h1>
            <h2 className="">{props.dia}</h2>
          </p>
        </div>

        <div className='media-content'>
          <div className='content'>
            <p className="">
              <strong>{props.tema}</strong>
            </p>
          </div>

        </div>

        <div className='media-right'>
          {props.ponentes && props.ponentes.map((ponent, index) => (
            <div key={index}>{ponent}</div>
          ))}
        </div>
      </article>
    </div>
  )
}
