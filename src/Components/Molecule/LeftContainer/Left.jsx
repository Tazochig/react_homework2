import "./Left.css";
import Circle from "../../Atoms/Circle/Circle";
import Text from "../../Atoms/Text/Text";
import Result from "../../Atoms/Result/Result";
function Left() {
  return (
    <>
      <div className="Left_kont">
        <Result />
        <Circle />
        <Text />
      </div>
    </>
  );
}

export default Left;
