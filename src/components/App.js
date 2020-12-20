import React, {Component} from 'react';
import '../css/App.css';
import Contacts from "./Contacts";

class App extends Component {
    state = {
        contacts: [{
            name: 'Zafer',
            phone: '1111111'
        }, {
            name: 'Ahmet',
            phone: '2222222'
        }]
    };

    addContact = (contact) => {
        const {contacts} = this.state;
        contacts.push(contact)

        this.setState({
            contacts
        });

        console.log(this.state.contacts);
    }

    render() {
        return (
            <div className="App">
                <Contacts contacts={this.state.contacts} addContact={this.addContact}></Contacts>
            </div>
        );
    }
}

export default App;
