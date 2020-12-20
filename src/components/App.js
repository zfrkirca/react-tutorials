import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../css/App.css';

const Homepage = () => {
    return (<h1>Homepage</h1>);
}

const Contact = () => {
    return (<h1>Contact page</h1>);
}

const News = (route) => {
    return (<h1>News page: {route.match.params.id}</h1>);
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/homepage">Homepage</Link><br/>
                    <Link to="/contact">Contact</Link><br/>
                    <Link to="/news/2">News</Link>

                    {/*exact and strict keywords for full match. search on google*/}
                    <Route path="/" exact strict component={Homepage}></Route>

                    <Route path="/contact" exact strict component={Contact}></Route>

                    <Route path="/news/:id" exact strict component={News}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
