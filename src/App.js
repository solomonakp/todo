import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './components/context';
import ButtonContainer from './components/ButtonContainer';
import FellowsForm from './components/FellowsForm';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <FellowsForm />

          <style jsx>
            {`
              .App {
                background-color: ${'#000000'};
                transition: all ease-in-out 300ms;
                color: white;
              }
            `}
          </style>
        </div>
      </Provider>
    );
  }
}

export default App;
