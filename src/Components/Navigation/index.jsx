import "./styles.css";
import Logo from "./Resources/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="Navigation">
       <div className="nav-bar">
        {isOpen ? (
          <div className="nav-center">
            <Hamburger
              toggled={isOpen}
              toggle={() => setOpen((prev) => !prev)}
              direction="right"
              color="#005288"
            />
            <ul className="nav-bar-items">
              <li>
                <NavLink to="/Capsules" className={"menu-link"}>Capsules</NavLink>
              </li>
              <li>
                <NavLink to="/Company" className={"menu-link"}>Company Info</NavLink>
              </li>
              <li>
                <NavLink to="/Cores" className={"menu-link"}>Cores</NavLink>
              </li>
              <li>
                <NavLink to="/Crew" className={"menu-link"}>Crew</NavLink>
              </li>
              <li>
                <NavLink to="/Dragons" className={"menu-link"}>Dragons</NavLink>
              </li>
              <li>
                <NavLink to="/Landpads" className={"menu-link"}>Landpads</NavLink>
              </li>
              <li>
                <NavLink to="/Launches" className={"menu-link"}>Launches</NavLink>
              </li>
              <li>
                <NavLink to="/Launchpads" className={"menu-link"}>Launchpads</NavLink>
              </li>
              <li>
                <NavLink to="/Rockets" className={"menu-link"}>Rockets</NavLink>
              </li>
              <li>
                <NavLink to="/Ships" className={"menu-link"}>Ships</NavLink>
              </li>
              <li>
                <NavLink to="/Starlink" className={"menu-link"}>Starlink</NavLink>
              </li>
              <li>
                <NavLink to="/History" className={"menu-link"}>History</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Hamburger
              toggled={isOpen}
              toggle={() => setOpen((prev) => !prev)}
              direction="right"
              color="#005288"
            />
          </div>
        )}
      </div>
      <div className="logotype">
        <img src={Logo} alt="Space X logo"></img>
      </div>
     
    </div>
  );
}

export default Navigation;
