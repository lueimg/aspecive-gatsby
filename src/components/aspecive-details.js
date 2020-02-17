import React from "react"
import {
    FaPuzzlePiece
  } from "react-icons/fa"
import { MdGroupAdd} from 'react-icons/md'

const AspeciveDetails = () => {
  return (
    <>
      <div className='aspecive-details block-bg-c page-block columns is-centered hero'>
          <h3 className="asd-title">Compartiendo conocimientos desde 1994:</h3>
          <p>
            En la Ciudad de Lima a los 13 días del mes de mayo de 1994,<br /> un grupo
            médicos Traumatologos y Neurocirujanos especialistas en cirugía de
            columna, decidieron constituir una agrupación científica denominada
            ” ASPECIVE”, la cual ha venido organizando actividades de educación
            medica continua; con el propósito de enriquecer nuestros
            conocimientos.
          </p>
        <div className='asd-icons'>
          <div className='asd-icons-item'>
            <div className='ic-item-icon'>
                <FaPuzzlePiece />
            </div>
            <div className='ic-item-icon-body'>
              <div className='ic-item-num'>16</div>
              <div className='ic-item-text'>Cursos</div>
            </div>
          </div>
          <div className='asd-icons-item'>
            <div className='ic-item-icon'>
                <MdGroupAdd />
            </div>
            <div className='ic-item-icon-body'>
              <div className='ic-item-num'>03</div>
              <div className='ic-item-text'>Congresos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AspeciveDetails
