import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

class News extends Component {

    constructor(props) {
        super(); // required

        console.log(props);
    }

    static propTypes = {
        news: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string,
                description: PropTypes.string
            })
        ),
        age: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    }

    render() {
        return (
            <div>
                {
                    this.props.news.map((item) => {
                        return <NewsItem key={item.id} title={item.title} description={item.description}></NewsItem>
                    })
                }
            </div>
        );
    }
}

export default News;
