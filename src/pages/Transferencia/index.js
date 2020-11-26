import React from 'react';
import Page from '../../components/Page';
import {ListGroup, Card, Form} from 'react-bootstrap';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

export default function index() {
    return (
        <Page >
            <Card style={{width:'50%', marginLeft:"25%"}}>
                <Card.Header>PACIENTES INTERNADOS:</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail" style={{width:'50%'}}>
                                <Form.Label>Unidade:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                                <Form.Label>Setor:</Form.Label>
                                <Form.Control as="select">
                                </Form.Control>
                            </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Body>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action onClick={alertClicked}>
                            This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            This one is a button
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            
        </Page>
    );
}