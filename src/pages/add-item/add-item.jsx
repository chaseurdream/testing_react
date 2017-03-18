import React, { Component } from 'react';

import seller_inventory from '../../providers/seller.js';


class AddItem extends Component {
    render() {
        return (
            <div>
                <span>Key:Value</span>
                {
                    seller_inventory.items.map(
                        (x,i) => {
                            /* Another way of achieving things, (code modification required)
                            let item_properties = [];
                            for (let key in x) {
                                if (x.hasOwnProperty(key)) {
                                    item_properties.push(<li>{x[key]}: {key} </li>);
                                }
                            }*/
                            return <ul key={i}>{Object.keys(x).map((y,j)=> <li key={j}>{x[y]}:{y}</li>)}</ul>;
                        }

                    )
                }
            </div>
        )
    };
}

export default AddItem;