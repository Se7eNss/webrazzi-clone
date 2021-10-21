import React from "react";
import "./Item.css";

export default function Item({newb}) {
  return (
    <div className="d-flex mt-3">
      <div className="img-wrapper col-lg-4 m-1 order-1 order-lg-0">
        <img className="item-img" src={newb.urlToImage} alt="image" />
      </div>
      <div className="articles-wrapper col-lg-8 m-1 order-0">
        <div className="content">
          {newb.title}
        </div>
        <div className="writer mt-4">{newb.author}</div>
      </div>
    </div>
  );
}
