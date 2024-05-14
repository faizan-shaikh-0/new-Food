import React from "react";
import Input  from "./Ui/Input";
import logo from "../assets/logo-wertone.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./Login.css";
import tempImg from "../assets/tempimg.jpg";
function Login() {
  function submithandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    const data = {
      id: Math.random(),
      customerData,
    };
    console.log(data);
  }
  return (
    <section>
      <div className="nav">
        <h1> Wertone </h1>
        <img src={logo} alt="logo" />
        <h3> Billing Center</h3>
      </div>
      <div className="container">
        <div className=" form">
          <h1> Billing Support Center</h1>
          <h3> Login</h3>
          <form onSubmit={submithandler}>
            <Input label="Retailer User Id" type="text" id="userId" require />
            <Input label="Retailer Password" type="password" id="password" require />
            <Input label=" remember me" type="checkbox" id="checkbox" value= "true" />  
            <a href="">forgot password ?</a>
            <button> Login </button>
            <p className=""> don't have an account ? <span><a href="./">signup</a> </span></p>
          </form>6
        </div>
        <div className="right-side">
            <img src={tempImg} alt=""/>
            <h1> Login</h1>
            <p> with your social media  </p>
            <p><span><FcGoogle/></span> <span><FaFacebook/></span></p>
            <p> please contact your Billing Center Manager for TechOnline ID  </p>
            
        </div>
      </div>
    </section>
  );
}

export default Login;
