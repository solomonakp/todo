// imported react , component and createContext
import React, { Component, createContext } from 'react';

//  intialized context
const myContext = createContext();
// makes edits to state or alters state
const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleMode':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case 'deleteFellow':
      return {
        ...state,
        fellows: state.fellows.filter((fellow) => {
          return fellow.name !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true,
      isLoggedIn: false,
      fellows: [
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
      ],
      // dispatch sends and action
      dispatch: (action) => {
        // setting state
        return this.setState((state) => {
          return reducer(state, action);
        });
      },
    };
  }

  render() {
    return (
      <myContext.Provider value={this.state}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

// created our consumer and we exported it initialized
export const Consumer = myContext.Consumer;
