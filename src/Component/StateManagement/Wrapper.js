import React, { useContext, useReducer } from 'react';

export const myContext = React.createContext()

export const Wrapper = ({reducer,initState,children})=>
    (
        <myContext.Provider value={useReducer(reducer,initState)}>
            {children}
        </myContext.Provider>
    )

export const Value = () => useContext(myContext)