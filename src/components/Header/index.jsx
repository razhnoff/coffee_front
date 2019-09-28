import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
// import defaultUser from "../../assets/img/defaultUser.png";
import Button from "../Button";
import EventsDropDown from "../EventsDropdown";
import { eventsData } from "../../testData";

/**
 * component Header
 * @param isActive: boolean value
 * @param isAdmin: string value
 * @param hasDepartment: boolean value
 * @param avatar: string value
 * @param name: string value
 * */

const Header = (props) => (
  <div className="header">
    <div className="header__container">
      <div className="logo_header">
        <Link to="/" title="Home">
          <img src={logo} alt="coffee" />
        </Link>
        <span>SHARE & COFFEE</span>
      </div>
      {props.isActive ? (
        <div>
          <div className="header-nav">
            <img className="header-user__img" src={props.avatar} alt="avatar" />
            <span className="header-user__info">{props.fullName}</span>
            <Button
              text="Log out"
              type="logout"
              onClick={() => console.log("out")}
            />
          </div>
          <div className="header__dropdown">
            <EventsDropDown events={eventsData} />
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

Header.propTypes = {
  isActive: PropTypes.bool,
  isAdmin: PropTypes.string,
  hasDepartment: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default Header;
