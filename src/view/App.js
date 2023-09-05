import "./App.scss";
import Mycomponent from "./Example/Mycomponent";
import ListTodo from "./Todos/ListTodo";

/**
 * class/function component 
 *  function c ko use hook 
 
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ListTodo />
        {/* <Mycomponent /> */}
      </header>
    </div>
  );
}

export default App;
