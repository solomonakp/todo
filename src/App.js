import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: 'samuel yusuf',
        sex: 'male',
        track: 'front-end',
      },
      {
        name: 'ekso longe',
        sex: 'male',
        track: 'backend',
      },
      {
        name: 'uncle bay',
        sex: 'male',
        track: 'front-end',
      },
    ];
    this.state = {
      isDarkMode: true,
    };
  }

  render() {
    const { isDarkMode } = this.state;

    return (
      <div className='App'>
        {' '}
        <Table isDarkMode={isDarkMode} />
        <div className='container'>
          <button
            className='btn btn-primary'
            onClick={() => {
              this.setState((state) => {
                return { ...state, isDarkMode: !isDarkMode };
              });
            }}
          >
            {isDarkMode ? 'Dark' : 'Light'}
          </button>
        </div>
        <style jsx>
          {`
            .App {
              background-color: ${isDarkMode ? '#000000' : '#ffffff'};
              transition: all ease-in-out 300ms;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
