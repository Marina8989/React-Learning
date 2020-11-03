import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('I was cliked')
}

function App() {
   return (
     <div>
       <img onMouseOver = {() => console.log('Hovered')} src="https://www.fillmurray.com/200/100" />
       <br />
       <button onClick={handleclick}>Click</button>
     </div>
   )
}

export default App;
