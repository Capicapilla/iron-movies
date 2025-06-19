import { Link, NavLink } from "react-router";
import { useAuth } from "../../../contexts/auth-context";
import { useTime } from "../../../hooks/use-time";

function Navbar() {
  const user = useAuth();

  const time = useTime();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Iron Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to="/home">
              Home
            </NavLink>
            <NavLink className="register-page" aria-current="page" to="/register">
              Registro
            </NavLink>
          </div>
        </div>
        <div>{time}</div>
        <div>{user?.username}</div>
      </div>
    </nav>
  );
}

export default Navbar;
