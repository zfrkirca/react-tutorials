import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        addContact: PropTypes.func
    };

    state = {
        name: '',
        phone: ''
    };

    constructor() {
        super();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name={"name"} id={"name"} placeholder={"Enter a name"} value={this.state.name}
                           onChange={this.onChange}/>
                    <br/>
                    <input name={"phone"} id={"phone"} placeholder={"Enter a phone"} value={this.state.phone}
                           onChange={this.onChange}/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;
