import React from "react";
import { Link } from "react-router-dom";

const PAGE404 = () => {
  return (
    <div className="text-center">
      <div>Error 404 !!</div>
      <br></br>
      <p>
        PAGE NOT FOUND
        <div>
          <Link to="/home">
            Back to home
          </Link>
        </div>
      </p>
    </div>
  );
};

export default PAGE404;
