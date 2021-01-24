import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaFonticonsFi } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      
  
   
  <>
  <div className ="row">
           <div className="col-md-7 col-10 mx-auto">
           <div className="my-5">
           <h1 className= "text-center tit"> Contact US </h1>
       </div>
         </div>
        </div>
      
       <div className="container contact_div">
           <div className="row">
               <div className=' col-10 mx-auto'>
  <form  action="https://formspree.io/f/xjvplozr" method="POST" onSubmit = {this.submitForm}>
                   <div>
       <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
           <input type="text" className="form-control" id="exampleFormControlInput1"
          name= 'fullname'  placeholder="Enter Your Name...." />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="exampleFormControlInput1"
          onChange={InputEvent} placeholder="Enter Your Mobile Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1"
          name= 'email' placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1"
          name= 'msg' rows={3} defaultValue={""} />
        </div>
      </div>
      <div class="col-auto mx-auto text-center">
    
    {status === "SUCCESS" ? <p>Thanks!</p> : <button class="btn btn-primary mb-3">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
  </div>
  </form>
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
);
 }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
