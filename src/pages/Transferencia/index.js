import React from 'react';
import Page from '../../components/Page';
import {ListGroup, Card} from 'react-bootstrap';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

export default function index() {
    return (
        <Page >
            <Card style={{width:'50%', marginLeft:"25%"}}>
                <Card.Header>PACIENTES INTERNADOS:</Card.Header>
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