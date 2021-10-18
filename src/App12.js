import './App.css';

var anos = parseInt(prompt("Digite quantos anos você tem"));
var meses = parseInt(prompt("Digite quantos meses você tem"));
var dias = parseInt(prompt("Digite quantos dias você tem"));



function idade() {
    return (anos*365)+(meses*30)+dias
}

function App12() {
    return(
        <div className="App12">
            <p>A sua idade expressa em dias é : {idade()}</p>
        </div>
    )
}


export default App12;