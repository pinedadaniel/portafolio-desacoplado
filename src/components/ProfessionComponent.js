import React from 'react';
import iconImg from '../images/img.png'




class Profession extends React.Component{
    render(){
    return  (
  
<section className='hero'> 
    <div className='container'>
    <div className="row">
        <div className='col-8 ' >
        <h1 className='textProfession'> Hola soy <strong> John Faber Florez </strong> <br></br> desarrollador
      <strong> FrontEnd </strong> con <br></br> enfásis en <strong> JavaScript</strong> </h1>   
        </div>

           <div className='col-4 ' id='contImg' >
              
           <img className='hero-image' id='img' src={iconImg}/>    
            
            </div> 
        </div>
    </div>
   
    
</section>
  
    );
}
}

export default Profession;


