import React from "react";
import "../styles/components/SliderGallery.css";

function SliderGallery({ data }) {
  console.log(data)
  if (data)
    if (data.showcase)
      return (
        <div className="container-slider-gallery animation">
          {data.showcase.map((item, i) => {
            return (
              <div key={i} className={"slide"}>
                <div
                onClick={()=>{window.location.href=`/${item.slug}`}}
                  style={{
                    position: "absolute",
                    display:'flex',
                    flexDirection:'column',
                    height: "100%",
                    paddingLeft:10,
                    justifyContent:'center',
                    width: "100%",
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    color: "white",
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.durationAndTransportation}</p>
                  <p>{item.polasci}</p>

                </div>
                <img src={item.image}></img>
              </div>
            );
          })}
        </div>
      );
}

export default SliderGallery;
