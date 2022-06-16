import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import Header from './components/Header'
//import Footer from './components/Footer'

const Footer = () => {
    return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer