import React from "react";

const Btn = ({ onClick, name, className, id, text }) => {
  return (
    <button className={className} id={id} onClick={onClick} name={name}>
      {text}
    </button>
  );
};

export default Btn;