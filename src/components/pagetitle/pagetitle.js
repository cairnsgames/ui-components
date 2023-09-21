import React, { useContext } from "react";

const PageTitle = ({title, style, className}) => {
  return (
      <h1 style={{...style}} className={className}>
        {title}
      </h1>
  );
};

export default PageTitle;
