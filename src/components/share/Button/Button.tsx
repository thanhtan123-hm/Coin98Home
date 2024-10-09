import './Button.scss'


const DownloadApp = () => {
  return (
    <div className="button-action">
      <a href="/wallet">
        <div className="btn-download">
            <div className="text-btn">Download App</div>
            <div className="icon-btn">
                <span className="icon-arrow-right icon-arrow">
                  {/* <img src="Icon.svg" alt="Arrow Icon" /> */}
                </span>
            </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadApp;


{/* <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M20 12L12 20M20 12L12 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}