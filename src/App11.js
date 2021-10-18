import './App.css';

var base = parseInt(prompt("Digite a base do retângulo"));
var altura = parseInt(prompt("Digite a altura do retângulo"));


function area() {
    return base*altura
}

function App11() {
    return(
        <div className="App11">
            <p>A Área do retângulo dos valores digitados é : {area()}</p>
        </div>
    )
}


export default App11;