import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../contexts/usersContext";

const Navbar = () => {
  const { icon, title } = useContext(UserContext);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className={`${icon} me-2`}></i>
          {title}
        </a>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
