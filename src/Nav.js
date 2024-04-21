import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory, Link } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  let history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix-logo"
          />
        </Link>

        <Link to="/profile">
          <img
            className="nav__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
