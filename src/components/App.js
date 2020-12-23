import {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import {connect} from 'react-redux';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
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

export default connect(mapStateToProps)(App);
