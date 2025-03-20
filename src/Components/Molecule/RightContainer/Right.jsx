import "./Right.css";
import Button from "../../Atoms/Button/Button";
import Summary from "../../Atoms/Summary/Summary";
import List from "../List/List";
import iconBrain from "../../../assets/images/iconoir_brain.svg";
import Chat from "../../../assets/Images/iconoir_chat-remove.svg";
import Eye from "../../../assets/Images/iconoir_eye-empty.svg";
import Flash from "../../../assets/Images/Vector.svg";

function Right() {
  return (
    <>
      <div className="Right_kont">
        <Summary />
        <div className="listebii">
          <List
            header="Reaction"
            digit="80"
            pic={Flash}
            teksti="rgba(255, 85, 85, 1) "
            Peri="
            linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
            linear-gradient(0deg, #FF5555, #FF5555)"
          />
          <List
            header="Memory"
            digit="92"
            pic={iconBrain}
            teksti="rgba(255, 178, 30, 1)"
            Peri="
            linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
            linear-gradient(0deg, #FFB21E, #FFB21E)"
          />
          <List
            header="Verbal"
            digit="61"
            pic={Chat}
            teksti="rgba(0, 187, 143, 1)"
            Peri="
            linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
            linear-gradient(0deg, #00BB8F, #00BB8F)"
          />
          <List
            header="Visual"
            digit="73"
            pic={Eye}
            teksti="rgba(17, 37, 214, 1)"
            Peri="
            linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
            linear-gradient(0deg, #1125D6, #1125D6)"
          />
        </div>
        <Button />
      </div>
    </>
  );
}

export default Right;
