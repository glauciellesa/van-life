import React from "react";

const filterVans = (props) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};

export default filterVans;
