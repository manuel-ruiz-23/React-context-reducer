// Context en si
import { createContext, useContext, useReducer } from "react"

const GlobalContext = createContext()

const ACTIONS = {
    ADD_ONE: 'ADD_ONE',
    TAKE_ONE: 'TAKE_ONE',
}

const INITIAL_STATE = {
    count: 0,
}

function Globalreducer(state, action) {
    switch (action) {
        case ACTIONS.ADD_ONE:
            return { ...state, count: state.count + 1 }
        case ACTIONS.TAKE_ONE:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

// Context provider
const GlobalContextProvider = ({ children }) => {

    // Inicializa el state del contexto
    const [state, dispatch] = useReducer(Globalreducer, INITIAL_STATE)

    return (
        <GlobalContext.Provider value={{...state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

// useContext
const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if (!context) {
        // throw error
        console.error('You can only access this state from insisde the Global Context')
    } else {
        return context
    }
}

// export things
export { GlobalContextProvider, useGlobalContext, ACTIONS }