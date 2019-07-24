import React from 'react';




class Profession extends React.Component{
    render(){
    return  (
 <main>    
<section className='hero'> 
    <div className='container'>
    <div className="row">
        <div className='col-xs-12 col-sm-3 col-md-8'>
        <h1> Hola soy <strong> John Faber Florez </strong> <br></br> desarrollador
      <strong> FrontEnd </strong> con <br></br> enfásis en <strong> JavaScript</strong> </h1>   
        </div>

           <div className='col-xs-12 col-sm-9 col-md-4' >
           <img className='hero-image' src='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png' alt='imagen'/>    
            </div> 
  
        </div>
    </div>
   
     

</section>
</main>    
    );
}
}

export default Profession;


