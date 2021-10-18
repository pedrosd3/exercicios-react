import './App.css';

var fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit"));


function celsius() {
    return ((fahrenheit-32)/9)*5
}

function App17() {
    return(
        <div className="App17">
            <p>{fahrenheit}°F corresponde à {celsius()}°C</p>
        </div>
    )
}


export default App17;