import './App.css';

var a = parseInt(prompt("Digite o valor de A"));
var b = parseInt(prompt("Digite o valor de B"));


function final() {
    return (a-b)**2
}

function App27() {
    return(
        <div className="App27">
            <p>O resultado da operação foi de :{final()}</p>
        </div>
    )
}


export default App27;