import React, { Component } from 'react';
import moment from 'moment';

class Date extends Component {
    render() {
        let format = this.props.format || 'dd MMM YYYY',
        date = this.props.date || moment();
        return <div>    
            <span>moment({date}).format({format})</span>
        </div>
    }
}

export default Date;