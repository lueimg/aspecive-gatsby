import React from 'react';

function ContactForm() {
    return (
        <div className=" page-block block-form ">
            <div className="columns is-centered">
                <div classNam="column is-3">
                    <div className="msg-title mt-0">
                        <span className="msg-title-text">
                        Escribenos
                        </span>
                    </div>
                    <p>
                    Calle Ricardo Angulo 180 San Isidro
                    </p>
                    <p>
                    2do piso Instituto de Ortopedia y Traumatología de la Clínica Ricardo Palma
                    </p>
                    <p>
                        Teléfonos <br/>
                        511-403-8024 (L. a V. 14:30 - 18:30)<br/>
                        51-989-027-739 / 51-998-072-484<br/>
                        <strong>secretaria@aspecive.com<br/></strong>
                        <strong>asoc.peruanadecirugiavertebral@gmail.com<br/></strong>
                    </p>
                </div>
                <div className="column is-6">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <input class="input" type="text" placeholder="Nombre" />
                            <input class="input mt-1" type="text" placeholder="Correo" />
                            <textarea  class="textarea mt-1"  placeholder="Mensaje"></textarea>
                            <button class="contact-form-button button is-link mt-1">Enviar Mensaje</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm