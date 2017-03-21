import React, { Component } from 'react';
import populatePageItems from './../components/pagination.jsx';
import { users_data } from './../providers/fake-users.js';
import UserCard from './UserCard.jsx';

class ListArticles extends Component {
    constructor() {
        super();
        // console.log(this.props.display, " From list Articles");
        this.state = {
            /*someLargeArray: (() => { let arrNos = []; for (var i = 0; i < 100; i++) { arrNos.push(i) }; return arrNos; })()*/
            someLargeArray: users_data
        }
    }

    render() {
        return <div>
            {this.state.someLargeArray.slice(this.props.indexBegin, this.props.indexEnd).map(x =>
                <UserCard
                    name={x.username}
                    avatar={x.avatar}
                    gender={x.gender}
                    userid={x.userid}
                    lastActivity={x.last_activity}
                    age={x.age}
                    city={x.city}
                    key={x.userid}
                />)
            }
        </div>
    }
}

export default populatePageItems("display")(ListArticles);