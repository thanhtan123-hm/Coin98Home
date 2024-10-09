import Banner from "./Banner/Banner";
import InfoApp from "./InfoApp/InfoApp";
import './Home.scss'
import Need from "./Need/Need";
import DownloadApp from '@/components/share/Button/Button';

import hero from '~/hero.png'
import Image from "next/image";

const Home = () => {
    return (
        <div className="HomeScreen">
            <Banner/>
            <InfoApp/>
            <Need/>
            <div className="do-more-container">
                <div className="do-more">
                    <h2 className="do-more-title">Do More, Worry Less</h2>
                    <div className="do-more-clip">
                        <video className="clip-coin" id="video-banner" playsInline muted autoPlay data-keepplaying="true">
                            <source src="https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/security.mp4" type="video/mp4"/>
                            <source src="videos/security.webm" type="video/webm"/>Your browser is not supported!
                        </video>
                    </div>
                    <div className="do-more-info">
                        <div className="info-item">
                            <span className="icon-key info-item-icon"></span>
                            <h3 className="info-item-text">
                                Full control over your assets<br/>Youre keys, your coins.
                            </h3>
                        </div>
                        <div className="info-item">
                            <span className="icon-shield info-item-icon"></span>
                            <h3 className="info-item-text">Multi-layered security width hardware Wallet support.</h3>                        
                        </div>
                        <div className="info-item">
                            <span className="icon-protect-x info-item-icon"></span>
                            <h3 className="info-item-text">Take control back by revoking your token approvals.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BuildYourFuture_buildYourFuture__JdtDH">
                <div className="your-future-container">
                    <div className="your-future">
                        <h3 className="your-future-title">
                            Build Your Future <br />In Your Own Way
                        </h3>
                        <DownloadApp/>
                    </div>
                </div>
                <div className="Image_imageBox__Jchv7 bg-people">
                    <Image alt="" loading="lazy" decoding="async" fill src={hero}/>
                </div>
            </div>
        </div> 
    );
};

export default Home;