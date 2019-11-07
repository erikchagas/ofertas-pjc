import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offer: {}
        };
    }

    async componentDidMount() {
        const { match } = this.props;
        const id = match.params.id;
        console.log(id);

        const response = await api.get(`/offer/${match.params.id}`);
        this.setState({
            offer: {...this.state.offer, ...response.data}
        }, () => {
            console.log('response --> ', response);
            console.log('this.state.offer --> ', this.state.offer);
        });
    }

    render() {
        return (
            <>
                <p>Details</p>
            </>
        );        
    }
}