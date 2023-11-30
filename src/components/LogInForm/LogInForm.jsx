import { useContext, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth.services'
import { AuthContext } from '../../contexts/auth.context'


const LogInForm = () => {

    const [LogInData, setLogInData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { autheticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setLogInData({ ...LogInData, [name]: value })
    }

    const handleForSubmit = e => {
        e.preventDefault()
        authService
            .logIn(LogInData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                autheticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))

    }


    return (
        <div className="LogInForm">
            <h1>aqui va el formulario</h1>
            <Form onSubmit={handleForSubmit}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={LogInData.email} placeholder="Enter email" onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={LogInData.password} placeholder="Password" onChange={handleInputChange} />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                    <Button variant="dark" type="submit">Log In</Button>
                </div>
            </Form>
        </div>
    )
}
export default LogInForm