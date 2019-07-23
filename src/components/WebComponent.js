import React from 'react';
import confiLogo from '../images/logo-agile.png';
import confLogo from '../images/academia-geek.jpg';
import Header from './HeaderComponent';
import './styles/ProfileStyle.css';
import Profession from './ProfessionComponent';
import Portafolio from './PortafolioComponent';
import Contac from './ContacComponent'
import Footer from './FooterComponent'
import Experience from './ExperienceComponent'



class Web extends React.Component{
    render(){
return (
  <div className='Web'> 
    <Header/>
    <Profession/>
    
    <Portafolio/>
    <Experience/>
    <Contac/>
    <Footer/>
    


  </div>

    
       );

    }

}

export default Web;