import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faHandHoldingUsd,
  faSearch,
  faMobileAlt,
  faTv,
  faPlug,
  faCrown,
  faCreditCard,
  faFileContract,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import chocolate from "../../../../assets/Landing-Page/MainBody/SectionFive/pic1.jpg";
import cheeseCake from "../../../../assets/Landing-Page/MainBody/SectionFive/pic2.jpg";

const MainBody = ({ menu }) => {
  const walletInfo = menu.response.data.wallet.balance;
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
            <p className="wallet-balance">
              {" "}
              {`${walletInfo.currency} ${walletInfo.value}`}
            </p>
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

      <div className="main-body-section-four">
        <div>
          <p>MAKE PAYMENTS</p>
        </div>
        <div className="main-body-section-four-sub-one">
          <div style={{ fontSize: "4em", color: "purple" }}>
            <ChevronLeftIcon />
          </div>
          <div>
            <FontAwesomeIcon icon={faPlug} size="4x" />
            <p>Donations & Charities</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCrown} size="4x" />
            <p>Insurance</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCreditCard} size="4x" />
            <p>Payment Services</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faFileContract} size="4x" />
            <p>Agents & Dealers</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faFax} size="4x" />
            <p>Visa & Embassy Payments</p>
          </div>
          <div style={{ fontSize: "4em", color: "purple" }}>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="main-body-section-five">
        <div className="main-body-section-five-sub-one">
          <div className="img">
            <img src={chocolate} alt="chocolate" />
          </div>
          <div className="cake-info">
            <div className="cake-name">
              <p>Chocolate Cake</p>
            </div>
            <div className="cake-details">
              <p>Cakes</p>
              <p>09.04.2018</p>
              <div class="chocolates">
                <p>PROCESSED</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="main-body-section-five-sub-one">
          <div className="img">
            <img src={cheeseCake} alt="chocolate" />
          </div>
          <div className="cake-info">
            <div className="cake-name">
              <p>Cheesecake</p>
            </div>
            <div className="cake-details">
              <p>Cupcakes</p>
              <p>09.04.2018</p>
              <div className="cupcakes">
                <p>ON HOLD</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
