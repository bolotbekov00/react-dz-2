import './App.css';
import {useState} from "react";

function App() {
  const [red, setRed] = useState('red');
  const [blue, setBlue] = useState('blue');

  const handleClick = () => {
    setBlue(red)
    setRed(blue)
  }


  return (
    <div className="App">
      <div className="block-red"
        style={{
          backgroundColor: red
        }}
           onClick={handleClick}
      ></div>
      <div className="block-red"
        style={{
          backgroundColor: blue
        }}
           onClick={handleClick}
      ></div>
    </div>
  );
}

export default App;
