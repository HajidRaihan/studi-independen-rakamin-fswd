// import React from "react";
import { Button } from "@material-tailwind/react";
import Modals from "../Components/Modals";
import { React, useState } from "react";

const ModalPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Modals open={open} handler={handleOpen}></Modals>
    </div>
  );
};

export default ModalPage;
