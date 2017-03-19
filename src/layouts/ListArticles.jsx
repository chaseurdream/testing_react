import React, { Component } from 'react';
import populatePageItems from './../components/pagination.jsx';
import { user_data } from './../providers/fake-users.js'

class ListArticles extends Component {
    constructor() {
        super();
        // console.log(this.props.display, " From list Articles");
        this.state = {
            someLargeArray: (()=> {let arrNos = []; for(var i = 0; i < 100; i++){arrNos.push(i)}; return arrNos; })()
        }
    }

    render() {
        console.log(user_data);
        return <div>
                {this.state.someLargeArray.slice(this.props.indexBegin, this.props.indexEnd).map(x => <div>{x}</div>)}
        </div>
    }
}

export default populatePageItems("display")(ListArticles);