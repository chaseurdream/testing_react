import React, { Component } from 'react';
import Date from './../components/date.jsx';
import Price from './../components/price.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './UserCard.css'

class UserCard extends Component {
    render() {
        let props = this.props;

        let labelHighlighter;

        switch (props.lastActivity.status) {
            case "bought": labelHighlighter = "label-success"; break;
            case "viewed": labelHighlighter = "label-info"; break;
            case "interested": labelHighlighter = "label-warning"; break;
            case "commented": labelHighlighter = "label-default"; break;
            default: labelHighlighter = "label-default";
        }


        return <div>
            <div className="container margin-top-1">
                <div className="row inline-block card-size">
                    <div className="pull-left img-space">
                        <img className="" alt={"Profile pic of " + props.name} src={props.avatar}></img>
                        <div className="">{props.name}</div>
                    </div>
                    <div className="pull-left padding-left-1 padding-top-1 info-space">
                        <div className="img-height">
                            <span className="font-size-12 pull-left">USER ID: {props.userid}</span>
                            <span className="pull-right font-size-12 font-weight-600 font-color-grey">GENDER: {props.gender}</span>
                            <div className="last-activity padding-top-1 clear-both text-align-left">
                                <div className="">
                                    <div>
                                        <span>Last Activity: </span><button className="btn btn-xs btn-default">On graph</button>
                                    </div>
                                    <div className="pull-left font-size-12 margin-left-1 margin-top-1">
                                        <div>
                                            <div className="label-width-2 inline-block">DATE: </div><Date date={props.lastActivity.date} className="inline-block" />
                                        </div>
                                        <div>
                                            <div className="label-width-2 inline-block">PRICE: </div><Price price={props.lastActivity.price} className="inline-block" />
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <span className={"label " + labelHighlighter}>{props.lastActivity.status}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="font-size-12">
                            <div className="pull-left">Age: {props.age}</div>
                            <div className="pull-right">Location: {props.city}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UserCard;