import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ContentPage(props) {
    const [article, setArticles] = useState([]);
    const updateNews = async () => {
        const url = `https://inshortsv2.vercel.app/news?type=${props.category}&limit=100`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        console.log(parsedData);
    };

    useEffect(() => {
        updateNews();
    });
    return (
        <div
            className="container d-flex justify-content-around my-5 row"
            key="1"
        >
            {article.map((element) => {
                return (
                    <>
                        <div className="col-md-12" key={element.source_url}>
                            <ItemCard
                                title={element.title}
                                image_url={element.image_url}
                                description={element.description}
                                source_url={element.source_url}
                                author_name={element.author_name}
                                source_name={element.source_name}
                                created_at={element.created_at}
                            />
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default ContentPage;
