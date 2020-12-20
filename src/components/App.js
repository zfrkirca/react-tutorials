import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../css/App.css';

const homepage = () => {
    return (<h1>Homepage</h1>);
}

const contact = () => {
    return (<h1>Contact page</h1>);
}

const news = () => {
    return (<h1>News page</h1>);
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*exact and strict keywords for full match. search on google*/}
                    <Route path="/" exact strict component={homepage}></Route>

                    <Route path="/contact" exact strict component={contact}></Route>

                    <Route path="/newst" exact strict component={news}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
