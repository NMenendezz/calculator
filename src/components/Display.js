import React from "react";

const Display = ({ value }) => {
  return (
    <form>
      <input readOnly type="text" value={value} />
    </form>
  );
};

export default Display;