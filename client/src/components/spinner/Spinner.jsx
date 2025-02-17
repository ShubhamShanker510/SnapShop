import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading flex flex-col items-center mb-5">


      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
