import React from 'react';
import "./Pages.css";
import { Link } from 'react-router-dom';
import logo from '../images/uncommon-half-block.png';
import firstName from '../images/icons/user.png';
import email from '../images/icons/mail.png';
import password from '../images/icons/padlock.png';

export const SignUp = () => {
  return (
    <div>
        <div className="sign_up_grid_container">
            <div className="blue_sign_up_side">
                <div className="overall_container">
                    <img className='logo' src={logo} alt='Our Logo' />
                    {/* Sub-Content on the Blue Bg Container */}
                    <div className="subcontent">
                        <h1 className="subcontent_head chillax_heads">Hello Friend</h1>
                        <p className="subcontent_par">Enter your personal details to Sign Up to  our
                            <strong> Uncommon</strong> Check-In System.
                        </p>
                        <p className="start_journey">start the journey with us.</p>

                        <div className="btn_container">
                            <Link to='./signin' className='sign_in_btn'>SIGN IN</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create_account_side">
                <div className="overall_container">
                    <div className="create_account_content">
                        <h1 className='create_account overall_heads chillax_heads'>Create Account</h1>
                        <div className="google_sign_up">
                            <Link>Sign up with Google</Link>
                        </div>
                        <p className="or_statement">or use your Email Account for Registration</p>
                        <div className="form_container">
                            <div className="input_big_container">
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={firstName} alt='' />
                                    </div>
                                    <input type="text" placeholder='First Name' />
                                </div>
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={email} alt='' />
                                    </div>
                                    <input type="email" placeholder='Email Address' />
                                </div>
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={password} alt='' />
                                    </div>
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={password} alt='' />
                                    </div>
                                    <input type="password" placeholder='Confirm Password' />
                                </div>
                            </div>
                            <button className='submit_sign_up_btn' type="submit">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
