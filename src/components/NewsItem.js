import React, {Component} from 'react';
import '../css/NewsItem.css';

class NewsItem extends Component {
    render() {
        const {title, description} = this.props;

        return (
            <div>
                <h1 className="title">Hello {title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default NewsItem;
