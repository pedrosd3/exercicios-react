import './App.css';

var base = parseInt(prompt("Digite a base do triângulo"));
var altura = parseInt(prompt("Digite a altura do triângulo"));


function area() {
    return base*altura/2
}

function App08() {
    return(
        <div className="App08">
            <p>A Área do triângulo dos valores digitados é : {area()}</p>
        </div>
    )
}


export default App08;