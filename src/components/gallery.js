import React from 'react';
import UseCongreso2015 from '../hooks/use-congreso2015';
import Image from 'gatsby-image';
function Gallery() {
    const images = UseCongreso2015();

    return (
        <div className="page-block block-bg-a">
            <div className="columns">
                <div className="column has-text-centered msg-title">
                        <span className="msg-title-text">
                        Galería
                        </span>
                </div>
            </div>

            <div className="columns tabs">
                <div className="column has-text-centered subtitle ">
                    XIII Congreso Iberolatinoamericano de Columna (Silaco 2015)
                </div>
            </div>

            <div className="columns is-multiline is-gapless">
                {images.map(image => (
                    <div className="column is-3 ">
                        <Image fluid={image.sharp.fluid} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Gallery;