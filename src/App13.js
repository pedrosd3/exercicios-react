import './App.css';

var brancos = parseInt(prompt("Digite quantos votos brancos houve na eleição"));
var nulos = parseInt(prompt("Digite quantos votos nulos houve na eleição"));
var validos = parseInt(prompt("Digite quantos votos válidos houve na eleição"));



function total() {
    return brancos+nulos+validos
}
function totalBrancos() {
    return brancos/total()*100
}
function totalNulos() {
    return nulos/total()*100
}
function totalValidos() {
    return validos/total()*100
}

function App13() {
    return(
        <div className="App13">
            <p>O total de votos foi de : {total()}</p>
            <p>O total de votos brancos percentualmente foi de: {totalBrancos().toFixed(2)} %</p>
            <p>O total de votos nulos percentualmente foi de  : {totalNulos().toFixed(2)} %</p>
            <p>O total de votos válidos percentualmente foi de  : {totalValidos().toFixed(2)} %</p>
        </div>
    )
}


export default App13;