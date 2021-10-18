import './App.css';

var cotacao = parseInt(prompt("Digite a cotação do dólar em relação ao real"));
var quantidade = parseInt(prompt("Digite a quantidade disponível em reais"));


function final() {
    return quantidade/cotacao
}

function App29() {
    return(
        <div className="App29">
            <p>O valor convertido pra dólar é : {final()}</p>
        </div>
    )
}


export default App29;