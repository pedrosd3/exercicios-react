import './App.css';

var salario = parseInt(prompt("Digite o salário atual do vendedor"));
var reajuste = parseInt(prompt("Digite o percentual de reajuste do salário do vendedor"));



function novoSalario() {
    return (salario/reajuste)+salario
}

function App14() {
    return(
        <div className="App14">
            <p>O salário do vendedor com o reajuste aplicade será de : {novoSalario()}</p>
        </div>
    )
}


export default App14;