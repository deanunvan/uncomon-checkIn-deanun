import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Firebase initialization file
import './Pages.css';
import logo from '../images/uncommon-half-block.png';
import firstNameIcon from '../images/icons/user.png';
import emailIcon from '../images/icons/mail.png';
import passwordIcon from '../images/icons/padlock.png';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/signin'); // Redirect after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign_up_grid_container">
      <div className="blue_sign_in_side">
        <div className="overall_container">
          <img className='logo' src={logo} alt='Our Logo' />
          <div className="subcontent">
            <h1 className="subcontent_head chillax_heads">Hello Friend</h1>
            <p className="subcontent_par">
              Enter your personal details to Sign Up to our <strong>Uncommon</strong> Check-In System.
            </p>
            <p className="start_journey">Start the journey with us.</p>
            <div className="btn_container">
              <Link to='./signin' className='sign_in_btn'>SIGN IN</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="create_account_side">
        <div className="overall_container">
          <div className="create_account_content">
            <h1 className="create_account overall_heads chillax_heads">Create Account</h1>
            <div className="google_sign_up">
              <Link>Sign up with Google</Link>
            </div>
            <p className="or_statement">or use your Email Account for Registration</p>

            <form className="form_container" onSubmit={handleSignUp}>
              {error && <p className="error_message">{error}</p>}
              <div className="input_big_container">
                <div className="input_container">
                  <div className="img_input_container">
                    <img src={firstNameIcon} alt="" />
                  </div>
                  <input type="text" placeholder="First Name" required />
                </div>

                <div className="input_container">
                  <div className="img_input_container">
                    <img src={emailIcon} alt="" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input_container">
                  <div className="img_input_container">
                    <img src={passwordIcon} alt="" />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="input_container">
                  <div className="img_input_container">
                    <img src={passwordIcon} alt="" />
                  </div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button className="submit_sign_up_btn" type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
