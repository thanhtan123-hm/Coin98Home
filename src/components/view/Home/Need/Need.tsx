import './Need.scss';

const Need = () => {
    return (
        <div className='your-need'>
            <div className='your-need-container'>
                <h2 className='your-need-title'>One Wallet<br/>For All Your Needs</h2>
                <div className='your-need-content'>
                    <div className='itemm-content item-content--content-1'>
                        <div className='text-content'>One home for <br />all your crypto assets</div>
                        <div className='img-content'>
                            <div className='Image_imageBox__Jchv7 img-content-screen'>
                                <img width={624} height={663} alt="" loading="lazy" decoding="async" data-nimg="fill" src="/need/image 281.png"/>
                            </div>
                        </div>
                    </div>
                    <div className='itemm-content item-content--content-2'>
                        <div className='content-text'>
                            <div className="text-title">One browser to</div>
                            <div className='text-value'>
                                <div className="text-value-item">
                                    <div className="value">120+</div>
                                    <div className="name">Blockchains</div>
                                </div>
                                <div className="text-value-item">
                                    <div className="value">15K+</div>
                                    <div className="name">dApps</div>
                                </div>
                            </div>
                        </div>
                        <div className="img-content">
                            <video width={624} className="video-content" id="video-banner" autoPlay muted playsInline loop data-keepplaying="true">
                                <source src="https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/blockchain.mp4" type="video/mp4"/>
                            </video>
                            <div className="Image_imageBox__Jchv7 img-content-screen">
                                <img alt="" loading="lazy" decoding="async" data-nimg="fill" src="/need/Ellipse 43.png" />
                            </div>
                        </div>
                    </div>
                    <div className='itemm-content item-content--content-3'>
                        <div className="content-text">One place to buy, sell digital assets conveniently</div>
                        <div className="content-img">
                            <div className="Image_imageBox__Jchv7 img-card">
                                <img alt="" loading="lazy" decoding="async" data-nimg="fill" src="/need/Coin98 2.0_Website_Cards_002 1.png"/>
                            </div>
                        </div>
                    </div>
                    <div className='itemm-content item-content--content-4'>
                        <div className="content-text">One platform for multiple earning ways</div>
                        <div className="content-img">
                            <video width={432} className="clip-comp" id="video-banner" playsInline muted autoPlay loop data-keepplaying="true">
                                <source  type="video/webm" src="https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/circle-token.mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Need;