import '../scss/style.scss';
import { useState } from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Close } from '../svg/x-lg.svg';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="text-white px-5 sticky-top">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-10">
            <div className="row">
              <span className="serif fw-bolder">HOME</span>
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
                <ul className="nav flex-column text-white px-4">
                  <li className="nav-item text-white py-3 pb-5 border-white">
                    <span className="pointer" onClick={() => setMenu(false)}><Close /></span>
                  </li>
                  <li className="nav-item text-white py-3 border-bottom border-top border-white">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">Home</Link>
                  </li>

                  <li className="nav-item py-3">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="/first-issue">Issue story 1</Link>
                  </li>
                  <li className="nav-item py-3">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">Issue story 1</Link>
                  </li>
                  <li className="nav-item py-3 border-bottom border-white">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">Issue story 1</Link>
                  </li>
                  <li className="nav-item text-white py-3 border-bottom border-white">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">About</Link>
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
