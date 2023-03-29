import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Company Information</h5>
                <p className='text-white text-md-center text center'>To be a foremost National Human Rights Institution in the world by entrenching a culture</p>
              
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <div> <Link to = '/'>Home</Link></div>
                    <div> <Link to = '/about'>About</Link></div>
                    <div> <Link to = '/contact'>Contact</Link></div>
                    {/* <div> <Link to = '/blog'>Blog<x/Link></div> */}
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> Muskan 2023</a>
    </div>

</footer>
  )
}

export default Footer