import React from 'react'
import Common from './Common'
import waqar from '../images/Boli.jpg'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaFonticonsFi } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";


const About =()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
        <div className="my-5">
          <h1 className= "text-center tit">Programmer Muhammad Waqar </h1>
      </div>
      </div>
      </div>
      </div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-8 col-10 mx-auto">
                    <div>
                  
                    </div>

                    <div class="card w-90">
  <div className="card-body">
  
                      
                    
    <p className="card-text">
        <h2 className="text-center Education">Education</h2> <br/>
        <p className="date">2016-2020</p>  <br/>
        <p className="edu">
            <h5>GC University Faisalabad</h5>
               BS-Information Technology <br/>
               3.41/4

        </p>
        <p className="date">2014-2016</p>  <br/>
        <p className="edu">
            <h5>BISE Lahore</h5>
               ICS <br/>
               1st Division

        </p>
        <p className="date">2011-2013</p>  <br/>
        <p className="edu">
           <h5>BISE Lahore</h5>
               MATRIC <br/>
               1st Division


        </p>
        <h2 className="text-center Education">Projects</h2> <br/>
        <p className="date">2020</p>  <br/>
        <p className="edu">
           <h5>Rescue 1122 Gps android app</h5>
               Final Year project
        </p>
        <p className="date">2020</p>  <br/>
        <p className="edu">
           <h5>Saylani mass it training Association karachi Pakistan</h5>
               <a href="https://ws-photography-170f1.web.app/"> Ws photography website design</a>
        </p>
        <p className="date">2018</p>  <br/>
        <p className="edu">
           <h5>Punjab College Managemanet website</h5>
              Punjab College Managemanet Website Design with React JS

        </p>
        <p className="date">2020</p>  <br/>
        <p className="edu">
           <h5>USA Company</h5>
              Complete USA Company Four Data Entry Projects on Up-Work 

        </p>

        <p className="date">2017</p>  <br/>
        <p className="edu">
        <h5>More+</h5>
           Work as Freelancer on Up-Work, Fiverr, Freelancer.com from 2017
        </p>
        
        <h2 className="text-center Education">Awards</h2> <br/>
        <p className="date">2018</p>  <br/>
        <p className="edu">
           <h5>PM Laptop Scheme</h5>
               Got Laptop Under PM Laptop Scheme in University
        </p>
        <p className="edu">
           <h5>PEEF Scholarship</h5>
               Got PEEF Scholarship on intermediate marks based in University
        </p>
        <p className="edu">
           <h5>CM solar system Scheme</h5>
               Got solar system price Under cm solar system Scheme in school
        </p>
        
        
            </p>
 
    
  </div>
</div>


                </div>
            </div> 
        </div>       
         
       <br/>
     
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
export default About;