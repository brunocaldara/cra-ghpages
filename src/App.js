import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleClick = () => {
    console.log('apiKey', apiKey)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Show API KEY in console</button>
      </header>
    </div>
  );
}

export default App;
