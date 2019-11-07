import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, Button, CardGroup, Row
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

        const response = await api.get('/offers');

        this.setState({
            offers: [...offers, ...response.data],
        }, () => {
            console.log('response --> ', response);
            console.log('this.state.offers --> ', this.state.offers);
        });
    }
    render() {
        const { offers } = this.state;
        return (
            <>
            <div>
                <CardGroup>
                    <Row className="justify-content-md-center">
                        {offers.map((offer) => (
                            <Card 
                            key={offer.id}>
                                <Card.Body>
                                    <Card.Img variant="top" src={offer.image.url} />
                                    <Card.Title>{offer.title}</Card.Title>
                                    <Card.Text>{offer.description}</Card.Text>
                                    <Card.Text>{`R$ ${offer.price}`}</Card.Text>
                                    <Link to={`/details/${encodeURIComponent(offer.id)}`}>
                                        <Button 
                                            id={offer.id}
                                            variant="primary">
                                            Comprar
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </CardGroup>
            </div>
            </>
        );        
    }
}