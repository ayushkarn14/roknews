import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Loader from "./loader";
import "./ContentPage.css";
function ContentPage(props) {
    const [article, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const updateNews = async () => {
        // const url = `https://inshortsv2.vercel.app/news?type=${props.category}&limit=100`;
        const url = `https://inshorts.me/news/${props.category}?limit=100`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.data.articles);
        setLoading(false);
    };

    useEffect(() => {
        updateNews();
    });
    return (
        <div
            className="container mycontainer d-flex justify-content-around my-5 row"
            key="1"
        >
            {article.map((element) => {
                return (
                    <div className="col-md-12" key={element.sourceUrl}>
                        <ItemCard
                            title={element.title}
                            image_url={element.imageUrl}
                            description={element.content}
                            source_url={element.sourceUrl}
                            author_name={element.authorName}
                            source_name={element.sourceName}
                        />
                    </div>
                );
            })}
            {loading && <Loader />}
        </div>
    );
}

export default ContentPage;
