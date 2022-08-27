import React from "react";
import "./ItemCard.css";
function ItemCard(props) {
    return (
        <div className="row itemcard">
            <div className="col-md-6">
                <img src={props.image_url} className="cardimg" alt="news" />
            </div>
            <div className="col-md-6 my-3">
                <p style={{ fontSize: "120%" }}>{props.title}</p>
                <p className="description">{props.description}</p>
                <a href={props.source_url} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-orange">
                        Read More
                    </button>
                </a>
                <p
                    style={{
                        fontSize: "80%",
                        color: "#8a8d91",
                        position: "absolute",
                        bottom: "10px",
                    }}
                >
                    by {props.author_name} from {props.source_name}
                </p>
            </div>
        </div>
    );
}

export default ItemCard;
