import React, {Component} from 'react';
import NewsItem from "./NewsItem";

class News extends Component {
    render() {
        const news = [
            {
                id: 1,
                title: "title1",
                description: "description1"
            }, {
                id: 2,
                title: "title2",
                description: "description2"
            }, {
                id: 3,
                title: "title3",
                description: "description3"
            }
        ];

        return (
            <div>
                {
                    news.map((item) => {
                        return <NewsItem key={item.id} title={item.title} description={item.description}></NewsItem>
                    })
                }
            </div>
        );
    }
}

export default News;
