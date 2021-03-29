import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHandHoldingUsd,
  faSearch,
  faMobileAlt,
  faTv,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

const MainBody = () => {
  return (
    <div className="main-body-wrapper">
      <div className="main-body-header">
        <div className="main-body-section-one">
          <div className="main-body-section-one-sub-one">
            <div>
              <p>YOUR WALLET</p>
            </div>
            <div>
              <p>Feb 2.2021</p>
            </div>
          </div>
          <div className="main-body-section-one-sub-two">
            <p>Wallet Balance</p>
            <p className="wallet-balance">N 14.61</p>
          </div>

          <div className="main-body-section-one-sub-three">
            <div className="main-body-section-one-sub-three-icon-box">
              <div>
                <FontAwesomeIcon
                  icon={faHandHoldingUsd}
                  size="2x"
                  color="white"
                />
              </div>
              <p>Withdraw</p>
            </div>
            <div className="main-body-section-one-sub-three-icon-box">
              <div>
                <FontAwesomeIcon icon={faWallet} size="2x" color="white" />
              </div>
              <p>Fund Wallet</p>
            </div>

            <div className="main-body-section-one-sub-three-icon-box">
              <div>
                <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
              </div>
              <p>Transactions</p>
            </div>
          </div>
        </div>
        <div className="main-body-section-two">
          <p>Need cash instantly ?</p>
          <button bgColor="rgb(67,1,194)" color="white" borderRadius="0px">
            Apply for a Loan
          </button>
        </div>
      </div>
      <div className="main-body-section-three">
        <div className="main-body-section-three-sub-one">
          <p>Categories</p>
          <div>
            <div>
              <ChevronLeftIcon /> <ChevronRightIcon />
            </div>
          </div>
        </div>
        <hr />
        <div className="main-body-section-three-sub-two">
          <div className="main-body-section-three-sub-two-icon-box">
            <div>
              <FontAwesomeIcon icon={faMobileAlt} size="4x" />
            </div>
            <p>Mobile & Internet Data</p>
          </div>
          <div className="main-body-section-three-sub-two-icon-box">
            <div>
              <FontAwesomeIcon icon={faTv} size="4x" />
            </div>
            <p>Cable TV</p>
          </div>
          <div className="main-body-section-three-sub-two-icon-box">
            <div>
              <FontAwesomeIcon icon={faPlug} size="4x" />
            </div>
            <p>Power & Utility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
