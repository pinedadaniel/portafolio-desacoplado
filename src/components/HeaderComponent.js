import React from 'react';




class Header extends React.Component{
    render(){
    return  (
      
        <header class="header">
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light" >
  <a class="navbar-brand" href="#">Mi Portafolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Portafolio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Experiencias</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trabajemos Juntos</a>
      </li>
   
    </ul>
  </div>
</nav>
        </div>
    </header>
    )

}
}

export default Header;
