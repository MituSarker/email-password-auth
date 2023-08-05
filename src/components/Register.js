import React from 'react';

const Register = () => {
    const handleRegister=(event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
      console.log(email,password);
      
      }
      
      const handleEmailChange = event=>{
        console.log(event.target.value);
      }
      
      const  handlePasswordChang = event =>{
        console.log(event.target.value);
      }
      


    return (
        <div>
            <form onSubmit={handleRegister}>
       <input onChange={handleEmailChange} type='email' name='email' id='' placeholder='your Email'></input>
       <br />
       <input onChange={handlePasswordChang} type='password' name='password' id='' placeholder='Your Password'></input>
       <br />
       <button type='submit'> Register</button>

    </form>
        </div>
    );
};

export default Register;