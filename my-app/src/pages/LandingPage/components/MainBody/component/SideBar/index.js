import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMobileAlt,
  faCreditCard,
  faFileAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

import Elon from "../../../../../../assets/Landing-Page/MainBody/SideBar/elon.png";
const Sidebar = ({ sideBarHandler }) => {
  return (
    <div className="sidebar-wrapper ">
      <div className="section-one">
        <div className="section-one-sub-one">
          <div className="close">
            <button onClick={() => sideBarHandler()} className="close-button">
              x
            </button>
          </div>
          <div className="section-one-sub-one-user-info">
            <div className="avatar" bgColor="white" mr="20px">
              <img src={`${Elon}`} alt="elon musk" />
            </div>
            <div className="section-one-sub-one-user-info-text">
              <p>Elon Musk A</p>
              <p>ID: 9AD34990</p>
            </div>
          </div>
          <div className="section-one-sub-one-user-info-view-profile">
            <button borderRadius="3em" color="white" variant="outline">
              View Profile
            </button>
          </div>
        </div>
        <div className="section-two">
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faHome}
                size="2x"
              />
            </div>
            <p fontSize="15px">Home</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faMobileAlt}
                size="2x"
              />
            </div>
            <p>Buy Airtime</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faMobileAlt}
                size="2x"
              />
            </div>
            <p>Send Money</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faCreditCard}
                size="2x"
              />
            </div>
            <p>Bills Payment</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faFileAlt}
                size="2x"
              />
            </div>
            <p>Free Credit Report</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon
                color="rgb(142,102,219)"
                icon={faFire}
                size="2x"
              />
            </div>
            <p>Complaints</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
