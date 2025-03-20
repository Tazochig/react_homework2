import "./Right.css";
import Button from "../../Atoms/Button/Button";
import Summary from "../../Atoms/Summary/Summary";
import List from "../List/List";
import iconBrain from "../../../assets/images/iconoir_brain.svg";
import Chat from "../../../assets/Images/iconoir_chat-remove.svg";
import Eye from "../../../assets/Images/iconoir_eye-empty.svg";
import Flash from "../../../assets/Images/Vector.svg";
import React from "react";

function Right() {
  return (
    <>
      <div className="Right_kont">
        <Summary />
        <div className="listebii">
          <List header="Reaction" digit="80" pic={Flash} />
          <List header="Memory" digit="92" pic={iconBrain} />
          <List header="Verbal" digit="61" pic={Chat} />
          <List header="Visual" digit="73" pic={Eye} />
        </div>
        <Button />
      </div>
    </>
  );
}

export default Right;
