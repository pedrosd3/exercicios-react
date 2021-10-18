import './App.css';

var celsius = parseInt(prompt("Digite a temperatura em graus Celsius"));


function fahrenheit() {
    return (9*celsius+160)/5
}

function App19() {
    return(
        <div className="App19">
            <p>{celsius}°C corresponde à {fahrenheit()}°F</p>
        </div>
    )
}


export default App19;