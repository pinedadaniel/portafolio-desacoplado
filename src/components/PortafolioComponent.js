import React from 'react';
import './styles/ProfileStyle.css';
import confLogo from '../images/academia-geek.jpg';



class Portafolio extends React.Component{
    render(){
    return  (
    <section id="portafolio" class="portfolio">
         <div class="container">
         <h2>Portafolio (Proyectos Destacados)</h2>
                <article class="project">
                    <div class="project-details">
                    <h3 class="project-title">Academia Geek</h3>
                        <h6 class="project-course">Agile Innova</h6>
                        <p class="project-date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                        <p class="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                        <p class="project-description">Academia Geek es el resultado de una alianza estratégica entre,
                            Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                            y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                            camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                        </p>
                    </div> 

                <figure class="project-imageContainer">
                    <img class="project-image" src={confLogo} width="500" height="400" alt=""/>
                </figure>
                
                </article>
                <article class="project">
                    <div class="project-details">
                    <h3 class="project-title">Academia Geek</h3>
                        <h6 class="project-course">Agile Innova</h6>
                        <p class="project-date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                        <p class="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                        <p class="project-description">Academia Geek es el resultado de una alianza estratégica entre,
                            Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                            y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                            camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                        </p>
                    </div> 

                <figure class="project-imageContainer">
                    <img class="project-image" src={confLogo} width="500" height="400" alt=""/>
                </figure>
                
                </article>







         </div>


    </section>


    );
}
}

export default Portafolio;