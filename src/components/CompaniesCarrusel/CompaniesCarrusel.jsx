import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';

const CompaniesCarrusel = ({ companies }) => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <Carousel >
            {companies?.map((company) => {
                return (
                    <Carousel.Item key={company._id} className='carouselContent' interval={2000}>
                        <div className='carouselContent'>
                            <Image className='carouselImg ' src={company.image} alt="" />
                            <Carousel.Caption>
                                <div className='carouselCaption'>
                                    <h4>{company.name}</h4>
                                    <p>{company.description}</p>
                                    {loggedUser && <Link className='link' to={`/company/details/${company._id}`}>
                                        <div className="gap-2">
                                            <Button variant="dark">Details</Button>
                                        </div>
                                    </Link>}
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                )
            })

            }

        </Carousel>
    )
}

export default CompaniesCarrusel