import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../image/download.png';
import './header.css';

const AppHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/result?search=${searchTerm}`);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3 d navbar">
            <Container fluid>
                <Link to='/'>
                    <img className='logo d-none d-md-block' src={logo} alt='' />
                </Link>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 search-bar flex-box"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                            <Nav.Link as={Link} to='/cart'>Giỏ hàng</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default AppHeader;