import React from 'react'
import { createContext, useState } from 'react'

export const counterContext = createContext(null)
export const UserContext = (props) => {
    const [count, setCount] = useState(50)
    return (
        <counterContext.Provider value={count}>
            {props.children}
        </counterContext.Provider>
    )
}
