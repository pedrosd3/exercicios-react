import './App.css';

var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));
var aux
aux = a
a = b
b = aux


function trocaA() {
    return a 
}
function trocaB() {
    return b
}


function App24() {
    return(
        <div className="App24">
            <p>O valor de A agora é :{trocaA()}</p>
            <p>O valor de B agora é :{trocaB()}</p>
        </div>
    )
}


export default App24;