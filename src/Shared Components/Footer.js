import React from 'react'
import "../Css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
        <div className='container'>
            <div className='row footerOuter'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 footerLeft'>
                    <div className='footerLogo'>
                        <div className='footerLogoImage'>
                            <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1728883740/Vector_qctrm3.png' alt=''/>
                        </div>
                        <div className='footerLogoName'>
                            <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1728888213/Ik_developers_djw7jx.png' alt=''/>
                        </div>
                    </div>
                <div className='footerData'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='footerImage'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1729173335/google-page-speed_1_y5x4qy.png'/>

                </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 footerMiddle1'>
                    <div >
                    <h6>
                        Links
                    </h6>
                    </div>
                    <div className='footerLinks'>
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Case Studies</li>
                            <li>How it Work</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Area we Serve</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 footerMiddle2'>
                    <div>
                        <h6>Contact Us</h6>
                    </div>
                    <div className='footerMiddle2Data'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>+923183561921</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 footerRight'>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} className='socialIcon'/>
                        <FontAwesomeIcon icon={faFacebook} className='socialIcon'/>
                        <FontAwesomeIcon icon={faTwitter} className='socialIcon'/>
                        <FontAwesomeIcon icon={faLinkedinIn} className='socialIcon'/>

                    </div>

                </div>
            </div>
            <div>
                <hr/>
            </div>
            <div className='copyRight'>
                <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer