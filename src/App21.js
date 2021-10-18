import './App.css';

var raio = parseInt(prompt("Digite o raio da lata"));
var altura = parseInt(prompt("Digite a altura da lata"));



function volume() {
    return Math.PI*(raio**2)*altura
}

function App21() {
    return(
        <div className="App21">
            <p>O volume da lata de óleo é :{volume()}</p>
        </div>
    )
}


export default App21;