import "./List.css";
import React from "react";

function List({ pic, header, digit, teksti, Peri }) {
  return (
    <>
      <div className="List_full" style={{background: Peri}}  > 
        <div className="List_left">
          <img src={pic} alt="" />
          <span className="list_heading" style={{color: teksti}} >{header}</span>
        </div>
        <div className="List_right">
          <h1 className="list_bold">{digit}</h1>
          <span className="list_span">/ 100</span>
        </div>
      </div>
    </>
  );
}

export default List
