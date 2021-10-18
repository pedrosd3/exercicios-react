import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function subtracao() {
    return a-b
}

function App02() {
    return(
        <div className="App02">
            <p>A Subtração dos dois valores digitados é : {subtracao()}</p>
        </div>
    )
}


export default App02;