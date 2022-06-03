import React, { useMemo, useState } from "react";
import data from "./util/DestinationGridData";
import "../styles/components/DestinationLayoutGrid.css";
import axios from "axios";

function DestinationLayoutGrid() {
  const [destinations, setDestinations] = useState();
  const dataCall = () => {
    axios.get(`http://146.190.227.241/wp-json/tour/v1/gallery/malta`).then((res) => {
      setDestinations(res.data);
    });
  };
  useMemo(() => dataCall(), []);
  console.log(destinations);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const slice = data.cardData.slice(0, loadMoreBtn ? data.cardData.length : 4);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <a href="/single-destination" className="a-single-destination">
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} className="card-img-top" alt="card" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="col-md-12 text-center">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setLoadMoreBtn(!loadMoreBtn)}
        >
          {loadMoreBtn ? "vidi manje" : "vidi više"}
        </button>
      </div>
    </section>
  );
}
export default DestinationLayoutGrid;
