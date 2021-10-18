import './App.css';

var nota01 = parseInt(prompt("Digite o valor da nota 1"));
var nota02 = parseInt(prompt("Digite o valor da nota 2"));
var nota03 = parseInt(prompt("Digite o valor da nota 3"));




function final() {
    return ((nota01*2)+(nota02*3)+(nota03*5))/10
}

function App18() {
    return(
        <div className="App18">
            <p>A méda final do aluno fo de : {final()}</p>
        </div>
    )
}


export default App18;