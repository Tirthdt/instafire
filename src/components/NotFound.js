import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.querySelector("header").style.display = "none";

    return () => {
      document.querySelector("header").style.display = "block";
    };
  });
  return <main className="container-max">404, Not Found</main>;
};

export default NotFound;
