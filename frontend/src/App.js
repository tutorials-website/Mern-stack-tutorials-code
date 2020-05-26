import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './components/MainContainer';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
