import '../scss/style.scss';

export default function Navbar() {
  return (
    <nav className="text-white px-5">
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
                <span className="px-4">
                  About
                </span>
                <span>
                  Menu
                </span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
