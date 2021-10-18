import './App.css';

var comprimento = parseInt(prompt("Digite o valor do comprimento"));
var largura = parseInt(prompt("Digite o valor da largura"));
var altura = parseInt(prompt("Digite o valor da altura"));




function volume() {
    return comprimento*largura*altura
}

function App26() {
    return(
        <div className="App26">
            <p>o volume da caixa é de :{volume()}</p>
        </div>
    )
}


export default App26;