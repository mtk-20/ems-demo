import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <div>
        <header className="shadow-sm">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" id="name" href="/">Employee Management</a>
              <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/employees">Employees</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/departments">Departments</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Management</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Payroll</a></li>
                      <li><a className="dropdown-item" href="#">Reports</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item text-danger" href="#">System Logs</a></li>
                    </ul>
                  </li>
                </ul>

                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-light btn-sm">Logout</button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default HeaderComponent;
