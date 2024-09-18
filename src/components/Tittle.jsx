import React from "react";

const Tittle = ({ text1, text2 }) => {
  return (
    <div className="d-flex justify-content-center  mt-2 p-3 fw-bolder">
      <div className="d-flex gap-2">
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
    </div>
  );
};

export default Tittle;
