import './App.css';

var tempo = parseInt(prompt("Digite o tempo gasto para realizar a viagem"));
var velocidade = parseInt(prompt("Digite a velocidade média durante a viagem"));



function distancia() {
    return tempo*velocidade
}
function combustivel() {
    return distancia()/12
}

function App22() {
    return(
        <div className="App22">
            <p>A Distância percorrida foi de :{distancia()}</p>
            <p>A quantidade de combustível utilizada foi de :{combustivel()}L</p>
        </div>
    )
}


export default App22;