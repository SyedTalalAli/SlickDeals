import React, {createContext, useContext, useReducer} from 'react';

// Prepare the dataLayer 
export const stateContext = createContext();

// Wrap our App and provider the data Layer to every component 
export const StateProvider = ({reducer, initialState, children}) =>(
<stateContext.Provider value={useReducer (reducer , initialState)} >
{children}

</stateContext.Provider>

);


export const useStateValue = () => useContext (stateContext);
