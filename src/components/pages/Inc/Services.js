import React from 'react'
import { Link } from 'react-router-dom'
import Service1 from '../Inc/images/Service1.jpg'
import Service2 from '../Inc/images/Service2.jpg'
import Service3 from '../Inc/images/Service3.jpg'
function Services() {
  return (
    <section className="section bg-c-light ">
    <div className="container">
    <div className="row">
        <div className="col-md-12 mb-5 text-center">
          <h3 className="main-heading">Our Services</h3>
          <div className="underline mx-auto"></div>
          </div>
         

      
   
       <div className='col-md-4 text-center'>
        <div className="card shadow">
          <img src={Service1}  className = "w-100 border-bottom" alt="" />
          <div className="card-body">
            <h6>Services 1</h6>
            <div className="underline mx-auto"></div>
            <p>To be a foremost National Human Rights Institution in the world by entrenching a culture</p>
            <Link to = "/services" className='btn btn-link'>Read More</Link>
          </div>
        </div>
          </div> 


          <div className='col-md-4 text-center'>
        <div className="card shadow">
          <img src={Service2} className = "w-100 border-bottom" alt="Services" />
          <div className="card-body">
            <h6>Services 2</h6>
            <div className="underline mx-auto"></div>
            <p>To be a foremost National Human Rights Institution in the world by entrenching a culture</p>
            <Link to = "/services" className='btn btn-link'>Read More</Link>
          </div>
        </div>
          </div> 

          <div className='col-md-4 text-center'>
        <div className="card shadow">
          <img src={Service3}  className = "w-100 border-bottom" alt="services3" />
          <div className="card-body">
            <h6>Services 3</h6>
            <div className="underline mx-auto"></div>
            <p>To be a foremost National Human Rights Institution in the world by entrenching a culture</p>
        <Link to = "/services" className='btn btn-link'>Read More</Link>
          </div>

        </div>
          </div> 
        
   
     
      </div>
      </div>
  </section> 
  )
}

export default Services