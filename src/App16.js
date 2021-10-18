import './App.css';

var fixo = parseInt(prompt("Digite o valor do salário fixo do vendedor"));
var comissao = parseInt(prompt("Digite o valor da comissão recebida por carro vendido"));
var carros = parseInt(prompt("Digite a quantidade de carros vendidos"));
var total = parseInt(prompt("Digite o valor total das vendas efetuados pelo vendedor"));



function final() {
    return (comissao*carros)+(total*0.05)+fixo
}

function App16() {
    return(
        <div className="App16">
            <p>O salário final do vendedor será de : {final()}</p>
        </div>
    )
}


export default App16;