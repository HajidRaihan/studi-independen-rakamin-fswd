import React from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

const Modals = ({ open, handler }) => {
  return (
    <>
      <Dialog open={open} handler={handler} size="sm" className="w-[429px]">
        <DialogHeader className="text-red-600 flex justify-center">Peringatan</DialogHeader>
        <DialogBody className="text-center text-black">
          Apakah anda yakin ingin menghapus ini?
        </DialogBody>
        <DialogFooter className="text-center flex justify-center">
          <button
            onClick={handler}
            className="mr-1 w-44 h-10 text-red-700 rounded-none border-2 border-red-700 uppercase"
          >
            <span>Iya, Hapus</span>
          </button>
          <button className="bg-white w-44 text-black font-semibold uppercase" onClick={handler}>
            <span>Tidak</span>
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default Modals;
