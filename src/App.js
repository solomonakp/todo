import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import theme from './components/theme';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <style jsx>
          {`
            html,
            body,
            #root,
            .App,
            #prc-1-1 {
              height: 100%;
              width: 100%;
              font-family: 'Circular Std';
            }

            body {
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-kerning: normal;
              scroll-behavior: smooth;
              overflow-x: hidden;
            }

            a,
            a:hover,
            a:active,
            a:focus {
              outline: none;
              text-decoration: none;
            }
            p {
              font-family: ${theme.fontFamily.circularBook};
            }

            button {
              white-space: nowrap;
              display: inline-block;
              border: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
