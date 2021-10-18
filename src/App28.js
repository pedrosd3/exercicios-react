import './App.css';

var cotacao = parseInt(prompt("Digite a cotação do dólar em relação ao real"));
var quantidade = parseInt(prompt("Digite a quantidade disponível em dólar"));


function final() {
    return cotacao*quantidade
}

function App28() {
    return(
        <div className="App28">
            <p>O valor convertido pra real é : {final()}</p>
        </div>
    )
}


export default App28;