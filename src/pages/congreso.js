import React, { useState } from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"
import Usebanners from "../hooks/use-banners"
import Sponsors from '../components/sponsors';
import Speakers from '../components/speakers';
import Program from '../components/program';

const PAGES = {
  auspiciadores: 'auspiciadores',
  ponentes: 'ponentes',
  cronograma: 'cronograma',
  location: 'location',
  more: 'more'
}

export default () => {
  const [page, setPage] = useState('auspiciadores');

  return (
    <>
      <Layout>
        <div className=''>
          <section className='hero is-light menu-wrap '>
            <div className='hero-body'>
              <div className='container'>

                <div className="columns is-vcentered">
                  <div className="column is-one-quarter">
                    <div className="level">
                      <div className="level-item">
                        <figure className="image is-96x96">
                          <img src="/aspecive-logo.png" />
                        </figure>
                      </div>
                      <div className="level-item">
                        <div className="logo-date is-family-sans-serif">
                          23 al 25 abril 2020
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-offset-1">
                    <div className="level">
                      <p className='level-item has-text-centered'>
                        <a className={ ' is-family-sans-serif	link is-info cong-link ' + (page === PAGES.auspiciadores ? 'active' : '') }
                            onClick={() =>setPage(PAGES.auspiciadores) }>Auspiciadores</a>
                      </p>
                      <p className='level-item has-text-centered'>
                        <a className={ ' is-family-sans-serif	link is-info cong-link ' + (page === PAGES.cronograma ? 'active' : '') }
                          onClick={() =>setPage(PAGES.cronograma) }>
                        Cronograma
                        </a>
                      </p>
                      <p className='level-item has-text-centered'>
                        <a className={ ' is-family-sans-serif	link is-info cong-link ' + (page === PAGES.ponentes ? 'active' : '') }
                          onClick={() =>setPage(PAGES.ponentes) }>Ponentes</a>
                      </p>
                      <p className='level-item has-text-centered'>
                        <a className={ ' is-family-sans-serif	link is-info cong-link ' + (page === PAGES.location ? 'active' : '') }>
                          Ubicación
                        </a>
                      </p>
                      <p className='level-item has-text-centered'>
                        <a className={ ' is-family-sans-serif	link is-info cong-link ' + (page === PAGES.more ? 'active' : '') }>
                          Más
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          { page === PAGES.auspiciadores && <Sponsors />}
          { page === PAGES.ponentes && <Speakers />}
          { page === PAGES.cronograma && <Program />}
        </div>
      </Layout>
    </>
  )
}
