import React, { useState } from "react";
import { PlayCircle } from "react-bootstrap-icons";

interface OpenCloseProps {
  color: string;
  style: React.CSSProperties;
  className: string;
}

const useOpenClose = (initialState: boolean = false) => {
  const [show, setShow] = useState(initialState);
  const OpenClose = (props: OpenCloseProps) => {
    const style = {
      color: props.color || "red",
      rotate: show ? "90deg" : "0deg",
      marginTop: "5px",
      ...props.style,
    };
    return (
      <PlayCircle
        className={props.className || ""}
        style={style}
        onClick={() => setShow(!show)}
      />
    );
  };
  return { show, setShow, OpenClose };
};

export default useOpenClose;
