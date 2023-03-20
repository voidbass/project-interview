import React from "react";

const PAGE404 = () => {
  return (
    <div className="box">
      <div>Error 404 !!</div>
      <br></br>
      <p>
        PAGE NOT FOUND
        <span style={{ color: "#ffc900" }}>
          <a style={{ color: "#ffc900" }} href="/home">
            back to home{" "}
          </a>
        </span>
      </p>
    </div>
  );
};

export default PAGE404;
