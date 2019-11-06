import React, { Component } from 'react';
import {
    Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        };
    }

    async componentDidMount() {
        const { offers } = this.state;

    }

    render() {
        return (
            <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            </>
        );        
    }
}