import React from 'react';
import PropTypes from 'prop-types';
import List from "./List";
import Form from "./Form";

const Contacts = (props) => {
    <div>
        <List contacts={this.props.contacts}></List>
        <Form addContact={this.props.addContact}></Form>
    </div>
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
};

export default Contacts;
