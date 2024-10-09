import './Banner.scss';
import DownloadApp from '@/components/share/Button/Button';

const Banner = () => {
    return (
        <div className="home-container">
            <div className="banner-home">
                <video className="video-banner"playsInline autoPlay loop muted data-keepplaying="true">
                    <source src="https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/clip-banner.mp4"/>
                </video>
                <div className="banner-content">
                    <div className="banner-text">
                        <h1 className="title-banner">
                            Everyone's Gateway
                            <br/>
                            To The Open Internet
                        </h1>
                        <div className="text-description">
                            Pave the way to a world where everyone can easily capture new opportunities to build their own future with Coin98 Super Wallet.
                        </div>
                        <DownloadApp/>
                        <div className="info-statistic">
                            <div className="item-statistic">
                                <div className="item-statistic--number">10M+</div>
                                <div className="item-statistic--name">Worldwide Users</div>
                            </div>
                            <div className="item-statistic">
                                <div className="item-statistic--number">170+</div>
                                <div className="item-statistic--name">Countries</div>
                            </div>
                            <div className="item-statistic">
                                <div className="item-statistic--number">120+</div>
                                <div className="item-statistic--name">Blockchains</div>
                            </div>
                            <div className="item-statistic">
                                <div className="item-statistic--number">15K+</div>
                                <div className="item-statistic--name">Compatible DApps</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;