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
    }

    render() {
        return (
            <>
                <p>Details</p>
            </>
        );        
    }
}