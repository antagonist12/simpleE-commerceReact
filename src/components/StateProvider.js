// Setup datalayer
// This components used to track the basket
import React, {createContext, useContext, useReducer} from "react";

// This is datalayer
export const StateContext = createContext();

// Build provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we used it inside of a component
export const useStateValue = () => useContext(StateContext);