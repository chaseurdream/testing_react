import React, { Component } from 'react';
import Date from './../components/date.jsx';

class UserCard extends Component {
    render() {
        return <div>
            <div>
                <img alt={"Profile pic of " + this.props.name} src={this.props.avatar}></img>
                <span>{this.props.name}</span>
            </div>
            <div>
                <span>User Id: {this.props.userid}</span> <span>GENDER: {this.props.gender}</span>
                <div className="last-activity">
                    <title>Last Activity</title><span>On graph</span>
                    <Date />
                    <Price />
                    <tag></tag>
                </div>
                <div>
                    <age></age>
                    <location></location>
                </div>
            </div>
        </div>
    }
}

export default UserCard;