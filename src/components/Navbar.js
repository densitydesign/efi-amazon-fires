import '../scss/style.scss';
import { useState } from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactComponent as Close } from '../svg/x-lg.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="text-white px-5 sticky-top">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-10">
            <div className="row">
              <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/">HOME</Link>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <span className="text-end">
                <span className="pointer serif fw-bolder" onClick={() => setMenu(true)}>
                  MENU
                </span>
              </span>
              <div className={`side-bar ${menu ? 'active' : ''}`}>
                <ul className="nav flex-column text-white px-4 ">
                  <li className="nav-item text-white py-3 pb-5 border-white text-uppercase">
                    <span className="pointer" onClick={() => setMenu(false)}><Close /></span>
                  </li>
                  <li className="nav-item text-white py-3 border-bottom border-top border-white text-uppercase">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/">Home</Link>
                  </li>

                  <li className="nav-item py-3 text-uppercase">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/first-issue">Issue story 1</Link>
                  </li>
                  <li className="nav-item py-3 text-uppercase">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/second-issue">Issue story 2</Link>
                  </li>
                  <li className="nav-item py-3 border-bottom border-white text-uppercase">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/third-issue">Issue story 3</Link>
                  </li>
                  <li className="nav-item text-white py-3 border-bottom border-white ">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2 text-uppercase" to="/about">About</Link>
                    <ul className="nav flex-column text-white px-4">
                      <li className="nav-item text-white py-2 border-white">
                        <AnchorLink to="/about#background" className="text-white text-decoration-none serif fw-bolder ps-2">Background</AnchorLink>
                      </li>
                      <li className="nav-item text-white py-2 border-white">
                        <AnchorLink to="/about#ResearchMethods" className="text-white text-decoration-none serif fw-bolder ps-2">Research Methods</AnchorLink>
                      </li>
                      <li className="nav-item text-white py-2 border-white">
                        <AnchorLink to="/about#resources" className="text-white text-decoration-none serif fw-bolder ps-2">Resources</AnchorLink>
                      </li>
                      <li className="nav-item text-white py-2 border-white">
                        <AnchorLink to="/about#team" className="text-white text-decoration-none serif fw-bolder ps-2">Team and Contributors</AnchorLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
