import './App.css';

var raio = parseInt(prompt("Digite o raio do círculo"));


function area() {
    return Math.PI*raio**2
}

function App09() {
    return(
        <div className="App09">
            <p>A Área do círculo com base no valor digitado é : {area().toFixed(3)}</p>
        </div>
    )
}


export default App09;