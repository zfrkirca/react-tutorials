import logo from './logo.svg';
import './App.css';
import News from "./components/News";

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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <News news={news} age={30} addNews={addNews}></News>
            </header>
        </div>
    );
}

function addNews() {
    console.log('addNews function worked in app.js');

    // it isn't shown on the screen
    news.push({
        id: 4,
        title: 'title4',
        description: 'description4'
    });

    console.log(news);
}

export default App;
