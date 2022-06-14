import React, { useState } from "react";
import "../styles/components/DestinationLayoutGrid.css";

function DestinationLayoutGrid({ destinationscards }) {
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const slice = destinationscards && loadMoreBtn ? destinationscards.lenght : 4;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {destinationscards &&
          destinationscards.slice(0, slice).map((item, index) => {
            return (
              <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <a href={`/${item.slug}`} className="a-single-destination">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img
                      src={item.destinationCard.thumbnail}
                      className="card-img-top"
                      alt="card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.destinationCard.title}
                      </h5>
                      <p className="card-text">
                        {item.destinationCard.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
      {destinationscards.length > 4 ? (
        <div className="col-md-12 text-center">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setLoadMoreBtn(!loadMoreBtn)}
          >
            {loadMoreBtn ? "vidi manje" : "vidi više"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
export default DestinationLayoutGrid;
