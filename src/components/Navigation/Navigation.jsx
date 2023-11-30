import { useContext } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './Navigation.css'

const Navigation = () => {

    const { loggedUser, logOut } = useContext(AuthContext)


    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to={'/'} className='nav-link'>Home</Link>
                    {loggedUser ? <Link to={'/Offers'} className='nav-link'>Offers</Link> : null}
                    <Link to={'/Companies'} className='nav-link'>Companies</Link>
                </Nav>
                <Nav>

                    {loggedUser ?
                        <>
                            <NavDropdown
                                title={`Hello, ${loggedUser.name}!!`}
                                src={loggedUser.avatar}
                                id="basic-nav-dropdown"
                                className='navDropdown'>
                                <NavDropdown.Item href='/profile'>
                                    Profile
                                </NavDropdown.Item>
                                <span className='dropwown-item' onClick={logOut}>
                                    <button className='dropdown-item'>
                                        Log out
                                    </button>
                                </span>
                            </NavDropdown>
                            <img src={loggedUser.avatar} alt="" className='profileImgNav' />
                        </>
                        :
                        <>

                            <Link to={'/sign-up'} className='nav-link'>Sign Up</Link>
                            <Link to={'/log-in'} className='nav-link'>Log In</Link>
                        </>

                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation