import React from 'react';
import './styles/ProfileStyle.css';
import confiLogo from '../images/logo-agile.png';


class Experience extends React.Component{
    render(){
    return  (
        <div class="container">
        <h2 class="event-list-title">Más sobre mi experiencia</h2>
        <section id="eventos" class="event-list">
            <article class="event">
                <figure class="event-imageContainer">
                    <img class="event-image" src={confiLogo} width="500" height="300" alt=""/>
                </figure>
                <div class="event-detail">
                    <h3 class="event-title">Mentor en Agile Innova</h3>
                    <p class="event-description">Asesoramos colaborativamente a startups o empresas 
                        para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                        sean innovadores, escalables, sostenibles y repetibles.
                    </p>
                    <a class="event-url" href={confiLogo} target="_blank">Ver Más</a>
                </div>
            </article>
            <article class="event">
                    <figure class="event-imageContainer">
                        <img class="event-image" src={confiLogo} width="500" height="300" alt=""/>
                    </figure>
                    <div class="event-detail">
                        <h3 class="event-title">Mentor en Agile Innova</h3>
                        <p class="event-description">Asesoramos colaborativamente a startups o empresas 
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                            sean innovadores, escalables, sostenibles y repetibles.
                        </p>
                        <a class="event-url" href={confiLogo} target="_blank">Ver Más</a>
                    </div>
            </article>
            <article class="event">
                    <figure class="event-imageContainer">
                        <img class="event-image" src={confiLogo} width="500" height="300" alt=""/>
                    </figure>
                    <div class="event-detail">
                        <h3 class="event-title">Mentor en Agile Innova</h3>
                        <p class="event-description">Asesoramos colaborativamente a startups o empresas 
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                            sean innovadores, escalables, sostenibles y repetibles.
                        </p>
                        <a class="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
            </article>
            <article class="event">
                    <figure class="event-imageContainer">
                        <img class="event-image" src={confiLogo} width="500" height="300" alt=""/>
                    </figure>
                    <div class="event-detail">
                        <h3 class="event-title">Mentor en Agile Innova</h3>
                        <p class="event-description">Asesoramos colaborativamente a startups o empresas 
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que 
                            sean innovadores, escalables, sostenibles y repetibles.
                        </p>
                        <a class="event-url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
            </article>
        </section>
    </div>
        )
    }
    }
    
    export default Experience;