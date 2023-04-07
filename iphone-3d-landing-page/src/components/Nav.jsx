import React from "react";
import Logo from "../assets/images/logo.svg";
import Store from "../assets/images/store.svg";
import Search from "../assets/images/search.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple logo" />
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Store
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mac
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              iPad
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              iPhone
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airpods
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              TV & home
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessories
            </a>
          </li>
          <li>
            <a
              className="link-styled"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
