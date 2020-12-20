import React, {Component} from 'react';

class NewsForm extends Component {

    addButton() {
        console.log('hello from button');

        this.props.addNews();
    }

    render() {
        return (
            <div>
                <button onClick={this.addButton.bind(this)}>Add</button>
            </div>
        )
    }
}

export default NewsForm;
