import React, { Component } from 'react';
import './App.css';
import AddItem from './pages/add-item/add-item.jsx';
import ListArticles from './layouts/ListArticles.jsx';
import HighStocks from './components/HighStocks.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem/>
        <ListArticles totalItems={100} display={5}/>
        <HighStocks id="container"/>
      </div>
    );
  }
}

export default App;
