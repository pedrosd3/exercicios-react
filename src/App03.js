import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function multiplicacao() {
    return a*b
}

function App03() {
    return(
        <div className="App03">
            <p>A Multiplicação dos dois valores digitados é : {multiplicacao()}</p>
        </div>
    )
}


export default App03;