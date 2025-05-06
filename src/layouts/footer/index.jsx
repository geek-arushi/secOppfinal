import { Link } from "react-router-dom";
import SocialIcon from "../../components/social-icon";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="footer-top">
                <div className="footer-section logo-section">
                    <Logo
                        classOption="footer-logo"
                        image={`${process.env.PUBLIC_URL}/img/logo-dark.png`}
                    />
                    <p>
                        SECOPP connects patients in India with a trusted network
                        of top US medical professionals for second opinions.
                    </p>
                </div>
                <div className="footer-section links-section">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/service">Services</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog & News</Link>
                        </li>
                        <li>
                            <Link to="/how-it-works">How it Works</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">PrivacyPolicy</Link>
                        </li>
                        <li>
                            <Link to="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                            <a
                                href="https://secopp-admin.onrender.com/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Admin Login
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section social-section">
                    <h4>Follow Us</h4>
                    <p>Stay connected with our latest updates!</p>
                    <div className="social-icons">
                        <SocialIcon
                            path="https://facebook.com"
                            icon="icofont-facebook"
                        />
                        <SocialIcon
                            path="https://instagram.com"
                            icon="icofont-instagram"
                        />
                        <SocialIcon
                            path="https://twitter.com"
                            icon="icofont-twitter"
                        />
                        <SocialIcon
                            path="https://linkedin.com"
                            icon="icofont-linkedin"
                        />
                        <SocialIcon
                            path="https://youtube.com"
                            icon="icofont-youtube"
                        />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; 2025 <span>Secopp</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;