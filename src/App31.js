import './App.css';

var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));
var c = parseInt(prompt("Digite o valor de C"));



function final() {
    return (a+b+c)**2
}

function App31() {
    return(
        <div className="App31">
            <p>O valor da equação feita é :{final()}</p>
        </div>
    )
}


export default App31;