import React, { Component } from 'react';

const populatePageItems = (propName) => (WrappedComponent) => {
    return class Pagination extends Component {
        constructor(props) {
            super();
            console.log(props[propName]);
            let display = props[propName];
            this.state = {
                pageNo: 1,
                display
            }
            this.pageChange = this.pageChange.bind(this);
            this.changeSize = this.changeSize.bind(this);
        }

        changeSize(e) {
            let display = e.target.value;
            this.setState({ display })
        }

        pageChange(e) {
            let pageState = e.target.getAttribute("data-pageState"),
                pageNo = this.state.pageNo;

            const totalPages = 10;

            switch (pageState) {
                case "first":
                    pageNo = 1;
                    break;
                case "prev":
                    pageNo -= pageNo > 1 && 1;
                    break;
                case "next":
                    pageNo += pageNo < totalPages && 1;
                    break;
                case "last":
                    pageNo = totalPages;
                    break;
                default:
                    console.log("Never happen");
            }

            this.setState({
                pageNo
            })
        }


        render() {
            return <div>
                <span onClick={this.pageChange} data-pageState="first">first</span>
                <span onClick={this.pageChange} data-pageState="prev">prev</span>
                <input type="text" placeholder="page no" value={this.state.pageNo} />
                <span onClick={this.pageChange} data-pageState="next">next</span>
                <span onClick={this.pageChange} data-pageState="last">last</span>
                <span>display:</span><input type="text" onChange={this.changeSize} value={this.state.display} /> <span> at a time({this.state.display})</span>
                <WrappedComponent />
                <span>This is the pagination footer</span>
            </div>;
        }
    }
}

export default populatePageItems;
