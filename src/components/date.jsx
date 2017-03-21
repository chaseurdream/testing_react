import React, { Component } from 'react';
import moment from 'moment';
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Date extends Component {
    render() {
        let format = this.props.format || 'DD MMM YYYY',
        date = this.props.date || moment();
        return <div className={this.props.className}>    
            <span>{moment(date).format(format)}</span>
        </div>
    }
}

export default Date;