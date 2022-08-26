import React,{useState} from "react";
import "./Style.css";

const UseState = () => {
const [myNum, SetMyNum]  = useState(0);
// console.log(SetMyNum);

    return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => SetMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => myNum > 0 ? SetMyNum(myNum - 1): SetMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;