import './App.css'
import Contador from './Contador';
import { GlobalContextProvider } from './ContextReducer'

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">

        <Contador></Contador>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
