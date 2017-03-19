import React, { Component } from 'react';
import './App.css';
import AddItem from './pages/add-item/add-item.jsx';
import ListArticles from './layouts/ListArticles.jsx';
import HighStocks from './components/HighStocks.jsx';
import UserCard from './layouts/UserCard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="ColGreen">Color in green</span>
        <AddItem/>
        <ListArticles totalItems={100} display={5}/>
        <HighStocks id="container"/>
        <UserCard/>
      </div>
    );
  }
}

export default App;
