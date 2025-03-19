import "./List.css";

function List({ pic, header, digit, color }) {
  return (
    <>
      <div className="List_full" > 
        <div className="List_left">
          <img src={pic} alt="" />
          <span className="list_heading">{header}</span>
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