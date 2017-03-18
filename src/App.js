import React, { Component } from 'react';
import './App.css';
import AddItem from './pages/add-item/add-item.jsx';
import ListArticles from './layouts/ListArticles.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem/>
        <ListArticles/>
      </div>
    );
  }
}

export default App;