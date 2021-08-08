import React, { Component } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container mt-4">
                    <Form>
                        <Row >
                            <Col>
                                <Form.Control placeholder="Nama depan" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Nama belakang" />
                            </Col>
                        </Row>

                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Masukan email" />
                            <Form.Text className="text-muted">
                                Kami tidak akan pernah membagikan email anda kepada orang lain.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Kirim
                        </Button>
                    </Form>
                </div>
                <div className="mt-4" >
                    <Footer />
                </div>
            </div>

        )
    }
}
