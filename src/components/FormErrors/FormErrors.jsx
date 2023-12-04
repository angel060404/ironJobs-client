import Alert from 'react-bootstrap/Alert'

const FormErrors = ({ children }) => {
    return (
        <Alert variant={'danger'} style={{ textAlign: 'center', fontSize: '.8em' }}>
            {children}
        </Alert>
    )
}

export default FormErrors