import React from 'react';
import logo from './assets/face.png';
import './App.css';


console.log("test2: ", process.env.PUBLIC_URL);
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Puremonk.net
          <div>A work in progress</div>
        </p>
      </header>
    </div>
  );
}

export default App;
