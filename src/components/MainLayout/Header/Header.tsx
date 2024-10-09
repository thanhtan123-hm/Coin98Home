import Link from 'next/link';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        {/* Logo */}
        <div className="header-container ">
          <a href="/">
              <img src="/Logo.svg" alt=''  />
          </a>
        </div>

        {/* Navigation */}
        <div className='header-menu'>
          <div className='item-menu'>
              <div className='item-menu-text'>Products</div>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <a href="/">
                      <div className='item-child'>Coin98 Super Wallet</div>
                    </a>
                    <a href="/">
                      <div className='item-child'>Zen Card</div>
                    </a>
                    <a href="/">
                      <div className='item-child'>Ramper SDKs</div>
                    </a>
                  </div>
              </div>
          </div>
          <div className='item-menu'>
              <div className='item-menu-text'>Developers</div>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <a href="/">
                      <div className='item-child'>Documentation</div>
                    </a>
                  </div>
              </div>
          </div>
          <div className='item-menu'>
              <div className='item-menu-text'>Ecosystem</div>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <a href="/">
                      <div className='item-child'>Blockchains</div>
                    </a>
                    <a href="/">
                      <div className='item-child'>Assets</div>
                    </a>
                    <a href="/">
                      <div className='item-child'>DApps</div>
                    </a>
                  </div>
              </div>
          </div>
          <div className='item-menu'>
              <div className='item-menu-text'>Community</div>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <a href="/">
                      <div className='item-child'>C98 Token</div>
                    </a>
                    <a href="/">
                      <div className='item-child'>Merch Store</div>
                    </a>
                  </div>
              </div>
          </div>
        </div>

        {/* Button */}
        <a href="/">
          <div className='Button_wrapper'>
            <button className='button button--dark '>Download App</button>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
