import "./Container.css";
import Left from "../Molecule/LeftContainer/Left";
import Right from "../Molecule/RightContainer/Right";

function Container() {
  return (
    <>
      <div className="Container">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default Container;
