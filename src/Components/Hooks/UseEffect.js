import React,{useState, useEffect} from "react";
import "./Style.css";

const UseEffect = () => {
const [myNum, SetMyNum]  = useState(0);
// console.log(SetMyNum);

useEffect(() => {
    document.title = `Chats(${myNum})`
})


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
      </div>
    </>
  );
};

export default UseEffect;