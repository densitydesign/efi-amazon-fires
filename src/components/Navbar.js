import '../scss/style.scss';
import { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="text-white px-5 sticky-top">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">
          <div className="col-10">
            <div className="row">
              <span>Home</span>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <span className="text-end">
                <span className="pointer" onClick={() => setMenu(true)}>
                  Menu
                </span>
              </span>
              <div className={`side-bar ${menu ? 'active' : ''}`}>
                <ul className="nav flex-column text-white px-4">
                  <li className="nav-item text-white py-3 pb-5 border-white">
                    <span className="pointer" onClick={() => setMenu(false)}>x</span>
                  </li>
                  <li className="nav-item text-white py-3 border-bottom border-top border-white">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">Home</Link>
                  </li>

                  <li className="nav-item py-3">
                    <Link className="text-white text-decoration-none serif fw-bolder ps-2" to="">Issue story 1</Link>
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
