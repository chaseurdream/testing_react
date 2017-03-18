import React, { Component } from 'react';
import populatePageItems from './../components/pagination.jsx';

class ListArticles extends Component {
    constructor() {
        super();
        this.state = {
            someLargeArray: (()=> {let arrNos = []; for(var i = 0; i < 100; i++){arrNos.push(i)}; return arrNos; })()
        }
    }

    render() {
        return <div>
                {this.state.someLargeArray.map(x => <div>{x}</div>)}
        </div>
    }
}

export default populatePageItems(ListArticles);