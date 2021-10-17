import React from "react";
import "./Item.css";

export default function Item() {
  return (
    <div className="d-flex mt-3">
      <div className="img-wrapper col-lg-4 m-1 order-1 order-lg-0">
        <img className="item-img" src="/images/image2.png" alt="image" />
      </div>
      <div className="articles-wrapper col-lg-8 m-1 order-0">
        <div className="content">
          Ludus Girişim Stüdyosu, 5 girişime yatırım yaptığını duyurdu
        </div>
        <div className="writer mt-4">Alper Papuçiyan</div>
      </div>
    </div>
  );
}
