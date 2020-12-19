import React, {Component} from 'react';
import NewsItem from "./NewsItem";

class News extends Component {
    render() {
        const news = [
            {
                title: "title1",
                description: "description1"
            }, {
                title: "title2",
                description: "description2"
            }, {
                title: "title3",
                description: "description3"
            }, {
                title: "title4",
                description: "description4"
            },
        ];

        return (
            <div>
                <NewsItem title={news[0].title} description={news[0].description}></NewsItem>
            </div>
        );
    }
}

export default News;
