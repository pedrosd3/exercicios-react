import './App.css';

var a = parseInt(prompt("Digite um valor"));

function antecessor() {
    return a-1
}

function App05() {
    return(
        <div className="App05">
            <p>A Antecessor do valor digitado é : {antecessor()}</p>
        </div>
    )
}


export default App05;