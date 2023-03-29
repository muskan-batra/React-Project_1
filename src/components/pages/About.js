import React from 'react'
import Vmc from './Inc/Vmc'

function About() {
  return (
    <><section className='py-4 bg-info'>
      <div className='container'>
        <div className='row'>
          <div className='col md-4 my-auto'>

            <h2> About us </h2>
            <div className='col md-4 my-auto'>
              <div className='float-end'>Home / About us</div>
            </div>
          </div>
        </div>
      </div>
    </section><section className='section bg-c-light border-bottom'>
      <div className='container'>
        <h5 className='main-heading'>Our Company</h5>
        <div className='underline'></div>
        <p>To be a foremost National Human Rights Institution in the world by entrenching a culture of respect for human rights and promoting national values built on principles of democracy, accountability and respect for rule of law.</p>
      </div>
    </section>
    
    < Vmc / >
    
    
    </>
  )
}

export default About