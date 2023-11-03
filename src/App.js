import './App.css';
import TodoComponent from './component/todo';

const App = () => {
  return (
    <div className="App">
      <form action="../../post" method="post" className="form">
        <button type="submit">Connect to React</button>
      </form>
      <TodoComponent/>
    </div>
  );
}

export default App;
