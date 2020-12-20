import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        name: 'zafer'
    }

    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        console.log('button clicked');
        this.setState({
            name: "KIRCA"
        })
    }

    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>
                    {this.state.name}
                </h1>

                <button onClick={this.changeName}>Change the name</button>
            </div>
        );
    }
}

export default App;
