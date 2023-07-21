import React from "react";

import PropTypes from "prop-types";

const User = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="mt-3 container">
      <div className="card mb-3">
        <div className="row g-0 p-2">
          <div className="col-md-3 d-flex align-items-center">
            <img
              src={avatar_url ? avatar_url : props.avatar_url}
              className="img-fluid rounded-pill"
              alt="Github Profil Images"
            ></img>
          </div>
          <div className="col-md-9 ps-2">
            <div className="card-body">
              <h4 className="card-title">
                {login ? login[0].toUpperCase() + login.slice(1) : props.login}
              </h4>
              <a
                href={html_url ? html_url : props.html_url}
                className="btn btn-primary"
                target="blank"
              >
                GitHub Profili
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

User.defaultProps = {
  login: "Kamran22",
  avatar_url:
    "https://www.nicepng.com/png/detail/0-7565_no-photography-sign-png-no-photography-allowed-signs.png",
  html_url: "/",
};

User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};

export default User;
