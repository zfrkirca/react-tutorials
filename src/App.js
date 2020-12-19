import logo from './logo.svg';
import './App.css';
import News from "./components/News";

function App() {
    const name = 'Zafer KIRCA';

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                {name}

                <News></News>
            </header>
        </div>
    );
}

export default App;
