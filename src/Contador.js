import React from 'react'
import { ACTIONS, useGlobalContext } from './ContextReducer'

const Contador = () => {

    const globalState = useGlobalContext()

    return (
        <div>
            <p>{globalState.count}</p>
            <button onClick={() => globalState.dispatch(ACTIONS.ADD_ONE)}>+1</button>
            <button onClick={() => globalState.dispatch(ACTIONS.TAKE_ONE)}>-1</button>
        </div>
    )
}

export default Contador