import { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import "./Navigation.css";

const Navigation = () => {
  const { loggedUser, logOut } = useContext(AuthContext);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="custom-navbar"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          IRONJOB$_
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {loggedUser && (
              <Link to="/Offers" className="nav-link">
                Offers
              </Link>
            )}
            <Link to="/Companies" className="nav-link">
              Companies
            </Link>
          </Nav>
          <Nav>
            {loggedUser ? (
              <>
                <NavDropdown
                  title={`Hello, ${loggedUser.name}!!`}
                  id="basic-nav-dropdown"
                  className="navDropdown"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as="button"
                    onClick={logOut}
                    className="dropdown-item"
                  >
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
                <img
                  src={loggedUser.avatar}
                  alt={loggedUser.name}
                  className="profileImgNav"
                />
              </>
            ) : (
              <>
                <Link to="/sign-up" className="nav-link">
                  Sign Up
                </Link>
                <Link to="/log-in" className="nav-link">
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
