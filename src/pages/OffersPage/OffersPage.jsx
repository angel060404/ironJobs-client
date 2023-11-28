import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import offersService from '../../services/offers.services'

const OffersPage = () => {

    const [offers, setOffers] = useState()

    useEffect(() => {
        loadOffers()
    }, [])

    const loadOffers = () => {
        offersService
            .getOffers()
            .then(({ data }) => {
                console.log(data)
                setOffers(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="OffersPage">
            <Container>
                <h1>Offers List</h1>
                <hr />
                {
                    !offers ?
                        <h2>cargando...</h2>
                        :
                        offers.map(elm => console.log(elm))
                }
            </Container>
        </div>
    )
}

export default OffersPage