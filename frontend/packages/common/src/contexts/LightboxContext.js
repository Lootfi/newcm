import React, { useReducer } from 'react';
import axios from '../axios';
import { useReducerAsync } from 'use-reducer-async';
const initialState = {
  email: '',
  name: '',
  ccNumber: '',
  password: '',
  emailValid: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALID_STATE': {
      return { ...state, emailValid: action.payload };
    }
    case 'CHANGE_VALUE': {
      return { ...state, [action.payload.name]: action.payload.value.trim() };
    }
    default:
      return state;
  }
}

export const LightboxContext = React.createContext(initialState);

const asyncActionHandlers = {
  VALIDATE_EMAIL: ({ dispatch }) => async (action) => {
    let valid = null;
    await axios
      .post('validate-email', {
        email: action.payload
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 'valid') valid = true;
        else valid = false;
      })
      .catch((err) => {
        console.log('ERROR', err);

        valid = false;
      })
      .then(() => {
        dispatch({ type: 'SET_VALID_STATE', payload: valid });
      });
    //return { ...state, emailValid: valid };
  }
};

export const LightboxProvider = ({ children }) => {
  const [state, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  return (
    <LightboxContext.Provider value={{ state, dispatch }}>
      {children}
    </LightboxContext.Provider>
  );
};
