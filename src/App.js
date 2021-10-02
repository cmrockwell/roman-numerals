import './App.css';

const parseNumber = require('./utils/ParseNumber');
const convertNumerals = require('./utils/ConvertNumerals');
let error = "" // thrown error messages 
let input = "" // the users input after parsing

function App() {
  parseInput()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Convert Numbers to Roman Numerals</h1>
        <p style={{display: input && "none"}}>
          Add <code>?query=&lt;number&gt;</code> to URL and reload.
        </p>
        <p style={{display: !isValid() && "none"}}>You entered {input}. 
        </p>

        <div style={{display: error && "none"}}>
          <div>That's ... </div>
          <div><strong style={{fontSize: "2em"}}> {getRoman()}</strong></div>
          <div>
            in Roman Numerals.
          </div>
        </div>
        <p style={{display: isValid() && "none"}}>Error: {error}</p>
      </header>
    </div>
  );
}

function getInput(){
  return document.location.search
}

function parseInput(){
  try {
    input = parseNumber(getInput())
    return input
  } catch (err){
    error = err.message
    return error
  }  
}

function isValid(){
  return error === ""
}

function getRoman(){
  try {
    return isValid ? convertNumerals(input) : ""
  } catch(err){
    error = err.message
    return err.message
  }
}

export default App;
