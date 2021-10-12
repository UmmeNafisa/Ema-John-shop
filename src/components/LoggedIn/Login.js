import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './login.css'
import useAuth from '../../hooks/useAuth'
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const { location } = useLocation();
    console.log("came from", location);
    return (
        <div className="login-form" >
            <div >
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="password" placeholder="Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="Submit" />
                </form>
                <p> new to ema-john <Link to="/register"> Create Account</Link> </p>

                <div> ----------- or ---------</div>
                <br />
                <button onClick={signInUsingGoogle}> <FontAwesomeIcon icon={faGoogle} /> </button>
            </div>
        </div>
    );
};

export default Login;