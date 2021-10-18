import './App.css';

var valor = parseInt(prompt("Digite o valor da dívida"));
var taxa = parseInt(prompt("Digite a taxa de juros da dívida"));
var tempo = parseInt(prompt("Digite o tempo em meses da dívida"));




function divida() {
    return valor+(valor*taxa/100)*tempo
}


function App23() {
    return(
        <div className="App23">
            <p>O valor da dívida atualmente é de :{divida()}</p>
        </div>
    )
}


export default App23;