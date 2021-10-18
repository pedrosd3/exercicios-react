import './App.css';

var fahrenheit = parseInt(prompt("Digite a temperatura em graus Fahrenheit"));


function celsius() {
    return (fahrenheit-32)*(5/9)
}

function App20() {
    return(
        <div className="App20">
            <p>{fahrenheit}°F corresponde à {celsius()}°C</p>
        </div>
    )
}


export default App20;