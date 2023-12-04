import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { useNavigate } from "react-router-dom"
import offersService from "../../services/offers.services"
import { Form, Button, Col, Row } from "react-bootstrap"
import authService from "../../services/auth.services"
import companiesServices from "../../services/companies.services"


const OfferForm = ({ setShowModal, loadOffers }) => {

    const { loggedUser } = useContext(AuthContext)
    const [companies, setCompanies] = useState()

    const [offerData, setOfferData] = useState({
        title: '',
        occupation: '',
        description: '',
        owner: loggedUser._id,
        company: '',
        salary: 0,
        applicants: [],
        latitude: 0,
        longitude: 0,
        type: '',
        duration: '12 months',
        imageUrl: '',
    })

    useEffect(() => {
        loadCompanys()

    }, [])

    let selectedCompanies = []

    companies && companies.map((elm) => {
        selectedCompanies.push(
            <option value={elm.company_id} >{elm.name}</option>
        )
    })


    const loadCompanys = () => {
        authService
            .findById(loggedUser._id)
            .then(({ data }) => data.companies)
            .then(companies => {
                const selectedCompanies = companies.map((elm) => {
                    return companiesServices.getOneCompany(elm)
                        .then(({ data }) => ({ company_id: data._id, name: data.name, imageUrl: data.image }))
                        .catch(err => console.log(err))
                })
                return Promise.all(selectedCompanies)
            })
            .then(result => setCompanies(result))
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setOfferData({ ...offerData, [name]: value })

    }

    const handleForSubmit = (e) => {
        e.preventDefault()
        offersService
            .createOffer(offerData)
            .then(() => {
                setShowModal(false)
                loadOffers()
            })
            .catch(err => navigate('/offers'))
    }

    return (
        <Form onSubmit={handleForSubmit}>

            <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title of the Offer:</Form.Label>
                <Form.Control type="text" value={offerData.title} name='title' onChange={handleInputChange} placeholder="Title" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="occupation" name='occupation' value={offerData.occupation}
                        placeholder="Enter occupation" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCompany">
                    <Form.Label>Company:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        value={offerData.company}
                        onChange={handleInputChange}
                        name='company'>
                        <option>Chosse a company</option>
                        {selectedCompanies}
                    </Form.Select>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Longitude:</Form.Label>
                    <Form.Control type="text" step="any" name='longitude' value={offerData.longitude} placeholder="Enter longitude" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Latitude:</Form.Label>
                    <Form.Control type='text' step="any" name='latitude' value={offerData.latitude} placeholder="Enter latitude" onChange={handleInputChange} />
                </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridDuration">
                <Form.Label>Duration:</Form.Label>
                <Form.Control type='text' name='duration' value={offerData.duration} placeholder="duration on months" onChange={handleInputChange} />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text" name='salary' value={offerData.salary} placeholder="Write a Number" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        value={offerData.type}
                        onChange={handleInputChange}
                        name='type'>
                        <option >Chosse a type job</option>
                        <option value="part-time">Part Time</option>
                        <option value="full-time">Full Time</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" name='description' value={offerData.description} rows={3} onChange={handleInputChange} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Create Offer</Button>
            </div>

        </Form>

    )
}

export default OfferForm