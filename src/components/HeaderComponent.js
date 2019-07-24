import React from 'react';




class Header extends React.Component{
    render(){
    return  (
      
        <header class="header">
        <div class="container">
            <h1>Mi Portafolio</h1>
            
            <nav class="menu">
                <ul>
                    <li>
                        <a class="link" href="#">Portafolio</a>
                    </li>
                    <li>
                        <a class="link" href="#eventos">Experiencia</a>
                    </li>
                    <li>
                        <a class="link" href="#contacto">Trabajemos Juntos</a>
                    </li>
                </ul>
            </nav>   

        </div>
    </header>
    )
}
}

export default Header;