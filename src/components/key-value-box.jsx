import React, { Component } from 'react';

class KeyValue extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <span>:</span>
                <input type="text"/>     
            </div>
        )
    };
}