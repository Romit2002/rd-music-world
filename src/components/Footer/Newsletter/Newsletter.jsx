import "./Newsletter.scss";
import { Fragment } from "react";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
const Newsletter = () => {
    return (
        <Fragment>
            <div className="newsletter-section">
                <div className="newsletter-content">

                    <span className="small-text">
                        newsletter
                    </span>
                    <span className="small-text">
                    sign up for latest updates
                    </span>
                    <div className="form">
                        <input type="text" placeholder="Email Address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="text">
                        Will be used in accordance with our privacy policy
                    </div>
                    <div className="social-icons">
                        <div className="icon">
                            <FaFacebookF size={14} />
                        </div>
                        <div className="icon">
                            <FaTwitter size={14} />
                        </div>
                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>
                        <div className="icon">
                            <FaLinkedinIn size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Newsletter;
