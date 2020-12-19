import logo from './logo.svg';
import './App.css';
import News from "./components/News";

function App() {
    const news = [
        {
            id: 1,
            title: "title1",
            description: "description1"
        }, {
            id: 2,
            title: "title2",
            description: "description2"
        }, {
            id: 3,
            title: "title3",
            description: "description3"
        }
    ];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <News news={news} age={30}></News>
            </header>
        </div>
    );
}

export default App;
