import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './login.css'
import useAuth from '../../hooks/useAuth'
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop'
    console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirect_url);
        })
    }
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
                <button onClick={handleGoogleLogin} className="btn-regular">   <FontAwesomeIcon icon={faGoogle} />  Google Sign in </button>
            </div>
        </div>
    );
};

export default Login;