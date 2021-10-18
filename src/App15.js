import './App.css';

var valorFinal = parseInt(prompt("Digite o valor do carro ao consumidor"));
var distribuidor = valorFinal*0.28
var imposto = valorFinal*0.45


function App15() {
    return(
        <div className="App15">
            <p>O percentual do distribuidor é :{distribuidor}</p>
            <p>O percentual de imposto é :{imposto}</p>
        </div>
    )
}


export default App15;