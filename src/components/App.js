import {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import {connect} from 'react-redux';
import {updateUser} from "../actions/userActions";

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser() {
        this.props.onUpdateUser('Ahmet');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>{this.props.user}</div>
                    <button onClick={this.onUpdateUser}>Change the name</button>
                </header>
            </div>
        );
    }
}

// state'i component içinde kullanabilmek için  yapılan tanımlamalar
// state props'a maplenir
const mapStateToProps = (state) => {
    // burada sadece istenen state'ler de return edilebilir
    return state;
}

const mapDispatchToProps = {
    onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
