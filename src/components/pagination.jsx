import React, { Component } from 'react';

const populatePageItems = (WrappedComponent) => {
    return class Pagination extends Component {
        render() {
            return <div>
                <span>This is the pagination header</span>
                <WrappedComponent/>
                <span>This is the pagination footer</span>
            </div>;
        }
    }
}

export default populatePageItems;
