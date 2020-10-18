import React,{createContext, useContext,useReducer} from "react";

//Prepare the datalayer for checkout
export const StateContext = createContext();

//Wrap our app and provide the datalayer
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull the information from datalayer
export const useStateValue = () => useContext(StateContext);