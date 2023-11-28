import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navigation = () => {

    return (

        <Navbar bg='dark' data-bs-theme='dark' className='mb-4'>
            <Container>
                <Link to={'/'} className='navbar-brand'>Home</Link>
                <Nav className="me-auto">
                    <Link to={'/'} className='nav-link'>Home</Link>
                    <Link to={'/Offers'} className='nav-link'>Offers</Link>
                    <Link to={'/Companies'} className='nav-link'>Companies</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation