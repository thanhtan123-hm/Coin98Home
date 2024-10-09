import './Footer.scss';

const Footer = () => {
    return(
    <footer>
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-menu-container">
                    <div className="footer-logo">
                        <div className="imageBox">
                            <img src='/Logo.svg'></img>
                        </div>
                        <div className="social-icon">
                            <a href="">
                                <span className="icon-facebook icon-social"></span>
                            </a>
                            <a href="">
                                <span className="icon-discord icon-social"></span>
                            </a>
                            <a href="">
                                <span className="icon-telegram icon-social"></span>
                            </a>
                            <a href="">
                                <span className="icon-google icon-social"></span>
                            </a>
                            <a href="">
                                <span className="icon-twitter icon-social"></span>
                            </a>
                            <a href="">
                                <span className="icon-social1 icon-social"></span>
                            </a>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <div className="menu-box">
                            <div className="menu-title">Products</div>

                            <div className="menu-list">
                            <div className="menu-item undefined">
                                <a href="/">Coin98 Super Wallet</a>
                            </div>
                            <div className="menu-item undefined">
                                <a href="/">Zen Card</a>
                            </div>
                            <div className="menu-item undefined">
                                <a href="/">Ramper SDKs</a>
                            </div>
                        </div>
                            
                        </div>
                        <div className="menu-box">
                            <div className="menu-title">Resources</div>
                            <div className="menu-list">
                                <div className="menu-item undefined">
                                    <a href="/">User Support</a>
                                </div>
                                <div className="menu-item undefined">
                                    <a href="/">User Support</a>
                                </div>
                                <div className="menu-item undefined">
                                    <a href="/">Audit</a>
                                </div>
                                <div className="menu-item undefined">
                                    <a href="/">Brand Assets</a>
                                </div>
                                <div className="menu-item undefined">
                                    <a href="/">Terms of Service</a>
                                </div>
                                <div className="menu-item undefined">
                                    <a href="/">Privacy Policy</a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="footer-text">
                    <div className="footer-text--left">Copyright © 2024 Coin98 Wallet. All rights reserved.</div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;