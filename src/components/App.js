import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import '../css/App.css';
import Homepage from "./Homepage";
import Contact from "./Contact";
import News from "./News";
import Profile from "./Profile";

class App extends Component {
    state = {
        loggedIn: false
    }

    onClickButton = () => {
        this.setState((prevState) => ({
            loggedIn: !prevState.loggedIn
        }))
    }

    render() {
        return (
            <Router>
                <div>
                    {/*
                    <Link to="/homepage">Homepage</Link><br/>
                    <Link to="/contact">Contact</Link><br/>
                    <Link to="/news/2">News</Link>
                    */}

                    {/* You can also use activeClassName */}
                    <NavLink activeStyle={{color: 'red'}} to="/" exact>Homepage</NavLink><br/>
                    <NavLink activeStyle={{color: 'red'}} to="/contact" exact>Contact</NavLink><br/>
                    <NavLink activeStyle={{color: 'red'}} to="/news/2" exact>News</NavLink><br/>
                    <NavLink activeStyle={{color: 'red'}} to="/profile" exact>Profile</NavLink>

                    <br/><br/>

                    <input type="button" onClick={this.onClickButton}
                           value={this.state.loggedIn ? 'Log out' : 'Log in'}/>

                    {/*exact and strict keywords for full match. search on google*/}
                    <Route path="/" exact strict component={Homepage}></Route>

                    <Route path="/contact" exact strict component={Contact}></Route>

                    <Route path="/news/:id" exact strict component={News}></Route>

                    <Route path="/profile" exact strict render={() => (
                        this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)
                    )}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
