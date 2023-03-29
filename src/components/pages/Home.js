import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../include/Slider'
import About from './About'
import Vmc from './Inc/Vmc'
import Services from './Inc/Services'
function Home() {
  return (
    <div>
      <Slider /> 

                      <section className="section">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 text-center">
                              <h3 className="main-heading">Human-Rights Article</h3>
                              <div className="underline mx-auto"></div>
                              <p>
                              Those consulted, along with a number of Member States, had agreed that a new, dedicated entity should be tasked with streamlining existing efforts.

The mechanism would be centred on victims and survivors, emphasize gender sensitivity, ensure inclusivity, operate without discrimination, and would be guided, in all search activities, by the working presumption that the missing person is alive and in urgent need of help, he said, drawing on stakeholder consultations.

“The crisis of missing persons in Syria is crushing in its enormity,” he said. “The continuing absence of many tens of thousands of people, from small children to elderly men and women, cries out for strong action. This shared pain in neighbourhoods and villages across the country must be addressed. Reconciliation will remain distant without such work.”
                              </p>
                              <Link to= "/about" className='btn btn-warning shadow'>Read more</Link>
                            </div>
                          </div>
                        </div>
                      </section>
{/* vision mission control */}
                 <Vmc />

                 {/* Our Services  */}
           <Services/>

               

                      


      </div>
  )
}

export default Home