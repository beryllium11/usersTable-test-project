import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import UsersApiComponent from "./components/UsersContainer";
import store from "./redux/ReduxStore";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <UsersApiComponent/>
        </div>
      </Provider>
  );
}

export default App;
