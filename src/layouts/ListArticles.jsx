import React, { Component } from 'react';
import populatePageItems from './../components/pagination.jsx';

class ListArticles extends Component {
    constructor() {
        super();
        // console.log(this.props.display, " From list Articles");
        this.state = {
            someLargeArray: (()=> {let arrNos = []; for(var i = 0; i < 100; i++){arrNos.push(i)}; return arrNos; })()
        }
    }

    render() {
        return <div>
            {this.props.display} / 
                {this.state.someLargeArray.map(x => <div>{x}</div>)}
        </div>
    }
}

export default populatePageItems("display")(ListArticles);