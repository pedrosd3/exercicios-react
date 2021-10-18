import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function divisao() {
    return a/b
}

function App04() {
    return(
        <div className="App04">
            <p>A Divisão dos dois valores digitados é : {divisao()}</p>
        </div>
    )
}


export default App04;