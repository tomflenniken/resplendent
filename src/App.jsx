import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board/Board";
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
