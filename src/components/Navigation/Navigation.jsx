import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to={'/'} className='nav-link'>Home</Link>
                    <Link to={'/Offers'} className='nav-link'>Offers</Link>
                    <Link to={'/Companies'} className='nav-link'>Companies</Link>
                </Nav>
                <Nav>
                    <Link to={'/sign-up'} className='nav-link'>Sign Up</Link>
                    <Link to={'/log-in'} className='nav-link'>Log In</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>







        // <Navbar bg='dark' data-bs-theme='dark' className='mb-4'>
        //     <Container>
        //         <Navbar.Brand to={'/'} className='navbar-brand '>Home</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Link to={'/'} className='nav-link'>Home</Link>
        //             <Link to={'/Offers'} className='nav-link'>Offers</Link>
        //             <Link to={'/Companies'} className='nav-link'>Companies</Link>

        //         </Nav>
        //         <Nav>
        //             <Link to={'/sign-up'} className='justify-content-end'>Sign Up</Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
    )
}

export default Navigation