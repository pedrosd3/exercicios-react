import './App.css';

var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));
var c = parseInt(prompt("Digite o valor de C"));



function final() {
    return (a**2)+(b**2)+(c**2)
}

function App30() {
    return(
        <div className="App30">
            <p>O valor da equação feita é :{final()}</p>
        </div>
    )
}


export default App30;