import React from 'react';
import './LoginForm.css';


const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='UserName' required />
                    
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p> Have an account? <a href="#">SignUp</a></p>
                </div>
            </form>

        </div>
    );
};

export default LoginForm