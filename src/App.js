import './App.css';

const nome = "Pedro";
const sobrenome = " Ferreira da Silva"

function soma(a,b) {
  return a+b
}
function subtracao(a,b) {
  return a-b
}
function multiplicacao(a,b) {
  return a*b
}
function divisao(a,b) {
  return a/b
}
function App() {
  return (
    <div className="App">
      <p>O nome armezanado é : {nome} {sobrenome}</p>
      <p>A soma : {2+2}</p>
      <p>A soma dos valore é : {soma(3,5)}</p>
      <p>A subtração dos valore é : {subtracao(3,5)}</p>
      <p>A multiplicação dos valore é : {multiplicacao(3,5)}</p>
      <p>A divisão dos valore é : {divisao(3,5)}</p>
    </div>
  );
}

export default App;
