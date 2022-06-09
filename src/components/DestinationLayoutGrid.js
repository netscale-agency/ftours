import React, { useMemo, useState } from "react";
import data from "./util/DestinationGridData";
import "../styles/components/DestinationLayoutGrid.css";

function DestinationLayoutGrid({ dataDest ,imgData}) {
  console.log(imgData)
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const slice = data.cardData.slice(0, loadMoreBtn ? data.cardData.length : 4);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {false
          ? dataDest?.map((item, i) => {
              return (
                <div key={i} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                  <a
                    href="/single-destination"
                    className="a-single-destination"
                  >
                    <div className="card p-0 overflow-hidden h-100 shadow">
                      <img src={item.hero.image} className="card-img-top" alt="card" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })
          : */}{slice.map((item, index) => { 
              return (
                <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                  <a
                    href="/single-destination"
                    className="a-single-destination"
                  >
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
