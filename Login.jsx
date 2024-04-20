import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [input,setInput] = useState({email:'',password:''})
    const [errorMessage,setErrorMessage] = useState('');
    const handleChange = (e) => {
        setInput({...input,[e.target.name]: e.target.value});
       }
    const handleSubmit = (e) => {
   
        e.preventDefault();
        console.log(input.email);
        console.log(input.password);
        
        setErrorMessage('');
        if(input.email != "admin@gmail.com"){
          return setErrorMessage('User Not Found!');
        }
        if(input.password != "naveen1234"){
          return setErrorMessage('Password incorrect');
        }    
        // localStorage.setItem('auth',true);
        window.location.href = '/dashboard';
       };
  return (
    <>
        <div className='container'>
            <div className='c-head'>
                <p><b>Login</b></p>
            </div>
            {
              errorMessage.length>2 && <div style={{marginBottom:"10px",paddingLeft:"14%",color:"red"}}>{errorMessage}</div>
            }
            {
              errorMessage.length<2 && <div style={{marginBottom:"4px",paddingLeft:"14%",color:"red"}}><br/></div>
            }
            {/*...........body............ */}
            <form onSubmit={handleSubmit}>
            <div className='c-body'>
                <p>Username</p><input placeholder='  Enter your username' name='email' onChange={handleChange} type='email'></input><br/>
                <p>Password</p><input placeholder='  Enter your password' name='password' onChange={handleChange} type='password'></input><br/>
                <button id='Login-btn'><b>Login</b></button>
            </div>
            </form>
        </div>
    </>
  )
}

export default Login