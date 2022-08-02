import React from "react";

export default function SuccessPop( props ) {
    console.log(props)
  return (
    <div id="popup1" class={`overlay ${props.isOpen && "overlayShow"}`}>
      <div class="popup">
        <h2>{props.isErr ? "Mail nije poslan" : "Mail je uspješno poslan"}</h2>
        <div class="content">
          {props.isErr
            ? "Dogodila se pogreška prilikom slanja maila molimo vas da pokušate ponovno kasnije"
            : "Zahvaljujemo na vašoj prijavi"}
        </div>
        <button onClick={()=>props.setIsOpen(false)} className="nextPrev">Zatvori</button>
      </div>
    </div>
  );
}
