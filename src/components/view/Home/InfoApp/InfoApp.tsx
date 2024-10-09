import './InfoApp.scss';

const InfoApp = () => {
    return (
        <div className="info-app">
                <div className="info-app-container">
                    <h2 className="info-app-title">Open For Everyone, Everywhere</h2>
                    <div className="info-app-list">
                        <div className="item-info-wrapper false">
                            <div className="item-info-app item-info-app--app-1">
                                <div className="info-content">
                                    <h3 className="text-title">Easy to join <br /> in multiple ways</h3>
                                    <div className="info-content__description">
                                        Enter the Open Internet with ease - just user your email,social accounts or create a new wallet in a single click
                                    </div>
                                </div>
                                <div className="info-image">
                                    <div className="Image_imageBox__Jchv7 img-screen img-screen--img-1">
                                        <img alt="" loading="lazy" decoding="async" data-nimg="fill"  src="imgHome/image 272.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-info-wrapper false">
                            <div className="Image_imageBox__Jchv7 item-info-app item-info-app--app-2">
                                <div className="info-content">
                                    <h3 className="text-title">Instantly transfer<br/>money globally</h3>
                                    <div className="info-content__description">
                                        Send and receive money to anyone, anywhere in just seconds with no barriers.
                                    </div>
                                </div>
                                <div className="info-image">
                                    <div className="Image_imageBox__Jchv7 img-sub">
                                        <img alt="" loading="lazy" decoding="async" data-nimg="fill"  src="/imgHome/image 273.png"/>
                                    </div>
                                    <div className="Image_imageBox__Jchv7 img-screen img-screen--img-2">
                                        <img alt="" loading="lazy" decoding="async" data-nimg="fill" src="/imgHome/image 274.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-info-wrapper false">
                        <div className="item-info-app item-info-app--app-3">
                                <div className="info-content">
                                    <h3 className="text-title">Accessible for all</h3>
                                    <div className="info-content__description">Simply manage your money and take part in the global economy, no matter your experience and background.</div>
                                </div>
                                <div className="info-image">
                                    <div className="Image_imageBox__Jchv7 img-screen img-screen--img-3">
                                        <img alt="" loading="lazy" decoding="async" data-nimg="fill" src="/imgHome/image 275.png"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoApp;
