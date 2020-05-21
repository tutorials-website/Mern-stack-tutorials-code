import React from 'react';
import {Provider} from 'react-redux';
import PassCatContainer from './components/PassCatContainer';
import Header from './components/Header';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
    <PassCatContainer/>
  
    </div>
    </Provider>
  );
}

export default App;
