import React from "react";
import { Image } from "react-bootstrap";

export default function Modal({ setActive, setOpen, active, data }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        padding: 16,
      }}
    >
      <i
        onClick={() => {
          setOpen(false);
        }}
        className="fa fa-solid fa-x fa-2x"
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <i
          class="fa-solid fa-arrow-left fa-2x"
          onClick={() => {
            if (active != 0) setActive(active - 1);
          }}
        ></i>

        {data.map((item, i) => {
          if (active === i) {
            return (
              <Image
                id={i}
                thumbnail
                onClick={() => {
                  setOpen(true);
                  setActive(i);
                }}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "90%",
                }}
                src={item}
              />
            );
          } else {
            return;
          }
        })}
        <i
          class="fa-solid fa-arrow-right fa-2x"
          onClick={() => {
            if (active!=(data.length-1)) setActive(active +1);
          }}
        ></i>
      </div>
      <div></div>
    </div>
  );
}
