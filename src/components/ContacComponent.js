import React from 'react';

import iconf from '../images/facebook.png'



class Contact extends React.Component{
    render(){
    return  (
        <section id="contacto" class="contact">
            <div class="container">
                <form action="/suscripcion/" class="form-email">
                   
                    <h3>Creamos algo juntos?</h3>
                    <input type="email" placeholder="Dejame tu email" id="email"/>
                    <button>Enviar</button>
                </form>
                <div class="social">
                    <a href="#" class="social-link facebook"></a>
                    <a href="#" class="social-link instagram"></a>
                    <a href="#" class="social-link github"></a>
                </div>
            </div>
        </section>
    )
}
}

export default Contact;