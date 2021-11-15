import React from "react";
import { useState } from "react/cjs/react.development";
import { Button } from "../styledComps/Button.styled";
import Comments from "./Comments";

const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={(e) => setOpen(true)}>Open Comments</Button>
      {open && <Comments setOpen={setOpen} id={"DzLyux31eR52SqJcHSUg"} />}
    </>
  );
};

export default Test;
