import React from 'react'
import ReactLogo from '../images/reactlogo.jpg'
import WebsiteDesign from '../images/webdesign.jpg'
import AdobeIllustrator from '../images/Adobillustrator.png'
import AdobePhotoshop from '../images/AdobPhotoshop.jpg'
import MSOffice from '../images/MSOffice.jpg'
import CCNA from '../images/CCNA.jpg'
import { NavLink } from 'react-router-dom'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaFonticonsFi } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";



const Services = () => {
    return(
        <>
        <div className ="row">
           <div className="col-md-7 col-10 mx-auto">
           <div className="my-5">
           <h1 className= "text-center tit"> OUR SERVICES </h1>
       </div>
         </div>
        </div>
         <div className="row">
            <div className = "col-10 mx-auto">
                <div className="row">
                    <div className="main">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={ReactLogo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">React JS Developer</h5>
              <p className="card-text">1+ years React JS Developer with hand-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React Concept.</p>
            </div>
            <div className="card-footer">
            <NavLink activeClassName='menu_active' className="nav-link" to="/Reactjs" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={WebsiteDesign} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Front End Developer</h5>
              <p className="card-text">Strong development skills with ability to understand technical design and translate the same into workable solution Strong working knowledge of JavaScript, HTML and CSS.Good working knowledge of writing Web based applications.</p>
            </div>
            <div className="card-footer">
              <NavLink to="/Web" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={AdobeIllustrator} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Adobe Illustrator</h5>
              <p className="card-text">Illustrators sit around all day making commercial art, Some of the types of illustrations these creative professionals may create could include medical art, graphic design for advertising, children’s book art, and more.</p>
            </div>
            <div className="card-footer">
              <NavLink to="/AdobeI" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col ">
          <div className="card h-100 adobe">
            <img src={AdobePhotoshop} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Adobe Photoshop</h5>
              <p className="card-text">Companies that require Photoshop skills have specific tasks that they need help with. So, to land the job, you must first identify those design tasks by reading the job description. .</p>
            </div>
            <div className="card-footer">
              <NavLink to="/Adobep" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 adobe">
            <img src={MSOffice} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ms Office Management</h5>
              <p className="card-text">Companies often use Microsoft Word, Excel, PowerPoint and Outlook, products that are included in Microsoft Office 365 Business. </p>
            </div>
            <div className="card-footer">
            <NavLink to="/MSoffice" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 adobe">
            <img src={CCNA} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CCNA</h5>
              <p className="card-text">Maintained Networking and systems including routers and switches to ensure proper performance.Developed and implemented solutions for clients by maintaining quality customer service.</p>
            </div>
            <div className="card-footer">
          <NavLink to="/CCNA" className="btn-get-started cd-bt">More+</NavLink>
            </div>
          </div>
        </div>
      </div>
      
                    </div>
                </div>
            </div>
        </div>
<br/>
<br/><br/>
        <footer className="bg-primary text-white text-center text-lg-start">
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Objective</h5>
              <p className="fods">
              As a Front-End Developer With React JS , to be responsible producing high quality solutions for company customers; bringing deep understanding of Modern HTML, JavaScript, and CSS, and the software development life cycle; and strong ability to execute and implement standard software architecture patterns.To work as Data Entry Operator with a well reputed organization where I can use my knowledge and strengths for the betterment of not only my future but also for the betterment of organization. <br/>
              Contact with me Through Email!<br/> 
              <HiOutlineMail size={30}/>waqarmuhammad337@gmail.com
              
              
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Social Media</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.instagram.com/muhammad_waqar_rajput1?r=nametag" className="text-white"><FaInstagram  className="ico"size={25}/></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/waqarbhatti.waqarbhatti.7374" className="text-white"><FaFacebook className="ico" size={25}/></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/muhammad-waqar-463335170" className="text-white"><FaLinkedin className="ico" size={25}/></a>
                </li>
                <li>
                  <a href="https://twitter.com/VickyRajput422?s=09" className="text-white"> <FaTwitter className="ico" size={25}/> </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Freelancing</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://github.com/vickyrajput5" className="text-white "><FaGithub size={25} className="ico" /></a>
                </li>
                <li>
                  <a href="https://www.fiverr.com/s2/caab91d09b" className="text-white"><FaFonticonsFi className="ico" size={25}/></a>
                </li>
                <li>
                  <a href="https://www.upwork.com/freelancers/~01c754a439ae3879c2" className="text-white"><SiUpwork  className="ico"size={25}/></a>
                </li>
                <li>
                  <a href="https://wa.me/qr/EMQEMU3GTWP6L1" className="text-white"><FaWhatsapp className="ico" size={25}/></a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
        </>
    )
}
export default Services;