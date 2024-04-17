import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sports = () => {
    const [input, setInput] = useState('');
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchSportsData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://18.201.187.118:3000/sports?name=${input}`);
            if (response.data && response.data.length > 0) {
                setSports(response.data);
            } else {
                setError('No sports data found for the provided name. Please try a different name.');
                setSports([]);
            }
        } catch (error) {
            console.error('Error fetching sports data:', error);
            setError('Failed to fetch sports data. Please check the console for more information.');
            setSports([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            setError('Please enter a sport name.');
            return;
        }
        fetchSportsData();
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Sport Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter sport name"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? 'Loading…' : 'Search'}
                        </Button>
                    </Form>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                </Col>
            </Row>
            <Row className="mt-3">
                {sports.map((sport, index) => (
                    <Col key={index} md={4} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{sport.name}</Card.Title>
                                <Card.Text>{sport.details}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Sports;
