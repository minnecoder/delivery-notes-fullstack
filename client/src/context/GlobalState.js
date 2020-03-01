import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//  Initial State
const initialState = {
  notes: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  // Actions
  async function getNotes() {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('https://express-delivery-api.herokuapp.com/api/v1/notes', {
        method: 'GET',
        mode: 'cors',
        headers: { Authorization: token },
      });
      dispatch({
        type: 'GET_NOTES',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      });
    }
  }

  return (<GlobalContext.Provider value={{
    note: state.note,
    getNotes,
  }}>{children}</GlobalContext.Provider>);
};
