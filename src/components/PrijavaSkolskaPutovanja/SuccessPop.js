import React from "react";

export default function SuccessPop( props ) {
  return (
    <div id="popup1" class={`overlay ${props.isOpen && "overlayShow"}`}>
      <div class="popup">
        <h2>{props.isErr ? "Prijava nije poslana." : "Prijava je uspješno poslana."}</h2>
        <div class="content">
          {props.isErr
            ? "Dogodila se pogreška prilikom slanja maila molimo vas da pokušate ponovno kasnije"
            : "Zahvaljujemo na ukazanom povjerenju."}
        </div>
        <button onClick={()=>document.location.reload()} className="nextPrev">Povratak na Početak prijave</button>
      </div>
    </div>
  );
}
