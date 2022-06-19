import React from "react";
import { Image } from "react-bootstrap";

export default function Gallery({ setOpen, setActive, data }) {
  return (
    <>
      {data && (
        <div className="div-gallery-single">
          {data.map((item, i) => {
            return (
              <Image
                thumbnail
                onClick={() => {
                  setOpen(true);
                  setActive(i);
                }}
                className="thumb-single"
                src={item}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
