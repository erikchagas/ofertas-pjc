import React, { Component } from 'react';

import './styles.css';

export default class Details extends Component {
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