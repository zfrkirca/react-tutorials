import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*exact and strict keywords for full match. search on google*/}
                    <Route path="/" exact render={() => {
                        return (<h1>Homepage</h1>);
                    }}></Route>

                    <Route path="/contact" exact strict render={() => {
                        return (<h1>Contact page</h1>);
                    }}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
