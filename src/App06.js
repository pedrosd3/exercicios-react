import './App.css';

var a = parseInt(prompt("Digite um valor"));

function sucessor() {
    return a+1
}

function App06() {
    return(
        <div className="App06">
            <p>A Sucessor do valor digitado é : {sucessor()}</p>
        </div>
    )
}


export default App06;