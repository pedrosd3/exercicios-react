import './App.css';

var lado = parseInt(prompt("Digite o valor do lado do quadrado"));


function area() {
    return lado*lado
}

function App10() {
    return(
        <div className="App10">
            <p>A Área do quadrado é : {area()}</p>
        </div>
    )
}


export default App10;