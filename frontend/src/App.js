import React from 'react';
import {Provider} from 'react-redux';
//import BookContainer from './components/BookContainer'
import GetPassCatContainer from './components/GetPassCatContainer';
import PassCatContainer from './components/PassCatContainer';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <PassCatContainer/>
    <GetPassCatContainer/>
    </div>
    </Provider>
  );
}

export default App;
