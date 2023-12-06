import { Button, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const CompaniesCarrusel = ({ companies }) => {
    console.log(companies)
    return (
        <Carousel >
            {companies?.map((company) => {
                return (
                    <Carousel.Item key={company._id} className='carouselContent' interval={5000}>
                        <div className='carouselContent'>
                            <Image className='carouselImg ' src={company.image} alt="" />
                            <Carousel.Caption>
                                <div className='carouselCaption'>
                                    <h4>{company.name}</h4>
                                    <p>{company.description}</p>
                                    <Link className='link' to={`/company/details/${company._id}`}>
                                        <div className="gap-2">
                                            <Button variant="dark">Details</Button>
                                        </div>
                                    </Link>
                                </div>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                )
            })

            }

        </Carousel>
        // <div className="carruselCompanies">
        //     <Carousel>
        //         {companies?.map((elm) => {
        //             // console.log(elm)
        //             <Carousel.Item>
        //                 <Image src={elm.image} />
        //                 <Carousel.Caption>
        //                     <h4>{elm.name}</h4>
        //                     <p>{elm.description}</p>
        //                 
        //             </Carousel.Item>
        //         })}
        //     </Carousel>
        // </div>
    )
}

export default CompaniesCarrusel