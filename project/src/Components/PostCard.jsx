import { React, useState } from "react";
import PetaniImg from "../asset/img/petani1.png";
import EditIcon from "../asset/icon/Edit.png";
import DeleteIcon from "../asset/icon/Delete.png";
import KomentarIcon from "../asset/icon/speech-bubble.png";
import EyeIcon from "../asset/icon/Eye.png";
import LogoUnhas from "../asset/logo/logo-unhas.png";
import LogoMaros from "../asset/logo/logo-maros.png";
import Modals from "./Modals";

const PostCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="lg:ml-[360px] lg:translate-y-32 translate-y-16 overflow-x-hidden flex flex-wrap">
      <div className="flex justify-center right-0">
        <Modals open={open} handler={handleOpen}></Modals>
      </div>
      {/* <div className="md:h-40 md:w-full w-1/2 lg:ml-10 ml-3 mt-10 pr-10 border border-gray-300 shadow-md rounded-l-lg md:flex">
        <div className="w-62 ">
          <img src={PetaniImg} alt="" className="h-full rounded-l-lg" />
        </div>
        <div className="flex items-center">
          <div className="p-5">
            <div className="flex justify-between">
              <p className="text-xs text-hint">18 September 2021</p>
              <div className="flex gap-3 absolute right-10">
                <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                <img src={LogoMaros} alt="Logo Maros" className="h-5" />
              </div>
            </div>
            <div className="flex gap-5">
              <h3 className="text-2xl text-paragraf">
                Total Produksi <span className="font-bold">60 Kg</span>
              </h3>
              <div className="flex gap-1 items-center text-hint cursor-pointer">
                <img src={EditIcon} alt="" className="h-4" />
                <p>Edit</p>
              </div>
              <p>|</p>
              <div
                className="flex gap-2 items-center text-hint cursor-pointer"
                onClick={handleOpen}
              >
                <img src={DeleteIcon} alt="" className="h-4" />
                <p>Hapus</p>
              </div>
            </div>
            <p className="text-sm text-hint">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae eveniet odio
              voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
            </p>
            <div className="flex gap-3 mt-3 text-hint">
              <div className="flex items-center">
                <img src={KomentarIcon} alt="" className="h-4 w-4" />
                <p className="text-xs">5 Komentar</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={EyeIcon} alt="" className="h-4 w-4" />
                <p className="text-xs">5 Kali Dilihat</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <PostCardComponent
        buttonColor={"bg-button-laporan"}
        buttonText={"Laporan masuk"}
        modalHandler={handleOpen}
      />
      <PostCardComponent
        buttonColor={"bg-button-ditindaklanjuti"}
        buttonText={"Ditindaklanjuti"}
        modalHandler={handleOpen}
      />
      <PostCardComponent
        buttonColor={"bg-button-selesai"}
        buttonText={"Selesai"}
        modalHandler={handleOpen}
      />

      <div className="md:h-40 w-full lg:ml-10 md:ml-3 mx-3 mt-10 md:pr-10 border border-gray-300 shadow-md md:rounded-l-lg rounded-lg flex relative">
        <div className="md:w-fit w-1/3">
          <img src={PetaniImg} alt="" className="h-full rounded-l-lg object-cover object-bottom" />
        </div>
        <div className="flex items-center md:w-full w-2/3">
          <div className="md:p-5 p-3">
            <div className="md:flex gap-5">
              {/* <h3 className="text-2xl">
                Total Produksi <span className="font-bold">60 Kg</span>
              </h3> */}
              <div>
                <h3 className="md:text-lg text-sm text-paragraf">
                  Total Penjualan <span className="font-bold">60 Kg</span>
                </h3>
                <h3 className="md:text-lg text-sm text-paragraf">
                  Total Produksi <span className="font-bold">60 Kg</span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center text-hint cursor-pointer">
                  <img src={EditIcon} alt="" className="md:h-4 h-3" />
                  <p className="text-xs">Edit</p>
                </div>
                <p>|</p>
                <div
                  className="flex gap-2 items-center text-hint cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={DeleteIcon} alt="" className="md:h-4 h-3" />
                  <p className="text-xs">Hapus</p>
                </div>
              </div>
              <div className="flex md:gap-3 gap-2 absolute md:right-10 right-3 top-3">
                <img src={LogoUnhas} alt="Logo Unhas" className="md:h-5 h-4" />
                <img src={LogoMaros} alt="Logo Maros" className="md:h-5 h-4" />
              </div>
            </div>
            <div className="flex justify-between md:pt-3 pt-1 pb-1">
              <p className="text-xs text-hint">18 September 2021</p>
            </div>

            <p className="md:text-sm text-xs text-hint overflow-hidden text-ellipsis max-w-[900ch]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae eveniet odio
              voluptates
            </p>
            <div className="flex gap-3 mt-3 text-hint">
              <div className="flex items-center">
                <img src={KomentarIcon} alt="" className="h-4 w-4" />
                <p className="text-xs">5 Komentar</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={EyeIcon} alt="" className="h-4 w-4" />
                <p className="text-xs">5 dilihat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCardComponent = (props) => {
  return (
    // <div className="md:h-40 md:w-full w-[45%] lg:ml-10 ml-3 mt-10 md:pr-10 border border-gray-300 shadow-md md:rounded-l-lg md:flex">
    //   <div className="w-62">
    //     <img src={PetaniImg} alt="" className="h-full md:rounded-l-lg" />
    //   </div>
    //   <div className="flex items-center">
    //     <div className="md:p-5 p-3 w-full">
    //       <div className="md:flex gap-5">
    //         {/* <h3 className="text-2xl">
    //             Total Produksi <span className="font-bold">60 Kg</span>
    //           </h3> */}
    //         <button className={`${props.buttonColor} rounded-md w-36 text-sm text-white h-8`}>
    //           {props.buttonText}
    //         </button>
    //         <div className="flex items-center gap-3">
    //           <div className="flex gap-1 items-center text-hint cursor-pointer">
    //             <img src={EditIcon} alt="" className="h-4" />
    //             <p>Edit</p>
    //           </div>
    //           <p>|</p>
    //           <div
    //             className="flex gap-2 items-center text-hint cursor-pointer"
    //             onClick={props.modalHandler}
    //           >
    //             <img src={DeleteIcon} alt="" className="h-4" />
    //             <p>Hapus</p>
    //           </div>
    //         </div>
    //         <div className="flex gap-3 md:absolute right-10">
    //           <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
    //           <img src={LogoMaros} alt="Logo Maros" className="h-5" />
    //         </div>
    //       </div>
    //       <div className="flex justify-between pt-3">
    //         <p className="text-xs text-hint">18 September 2021</p>
    //       </div>

    //       <p
    //         className="md:text-sm text-xs text-hint truncate"
    //         // style={{ wordWrap: "break-word" }}
    //       >
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae eveniet odio
    //         voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
    //       </p>
    //       <div className="flex gap-3 mt-3 text-hint">
    //         <div className="flex items-center">
    //           <img src={KomentarIcon} alt="" className="h-4 w-4" />
    //           <p className="text-xs">5 Komentar</p>
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <img src={EyeIcon} alt="" className="h-4 w-4" />
    //           <p className="text-xs">5 Kali Dilihat</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="md:h-40 w-full lg:ml-10 md:ml-3 mx-3 mt-10 md:pr-10 border border-gray-300 shadow-md md:rounded-l-lg rounded-lg flex relative">
      <div className="md:w-fit w-1/3">
        <img src={PetaniImg} alt="" className="h-full rounded-l-lg object-cover object-bottom" />
      </div>
      <div className="flex items-center md:w-full w-2/3">
        <div className="md:p-5 p-3">
          <div className="md:flex gap-5">
            {/* <h3 className="text-2xl">
                Total Produksi <span className="font-bold">60 Kg</span>
              </h3> */}
            <button
              className={`${props.buttonColor} rounded-md md:w-36 w-28 md:text-sm text-xs text-white md:h-8 h-7`}
            >
              {props.buttonText}
            </button>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 items-center text-hint cursor-pointer">
                <img src={EditIcon} alt="" className="md:h-4 h-3" />
                <p className="text-xs">Edit</p>
              </div>
              <p>|</p>
              <div
                className="flex gap-2 items-center text-hint cursor-pointer"
                onClick={props.modalHandler}
              >
                <img src={DeleteIcon} alt="" className="md:h-4 h-3" />
                <p className="text-xs">Hapus</p>
              </div>
            </div>
            <div className="flex md:gap-3 gap-2 absolute md:right-10 right-3 top-3">
              <img src={LogoUnhas} alt="Logo Unhas" className="md:h-5 h-4" />
              <img src={LogoMaros} alt="Logo Maros" className="md:h-5 h-4" />
            </div>
          </div>
          <div className="flex justify-between md:pt-3 pt-1 pb-1">
            <p className="text-xs text-hint">18 September 2021</p>
          </div>

          <p className="md:text-sm text-xs text-hint overflow-hidden text-ellipsis max-w-[900ch]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae eveniet odio
            voluptates
          </p>
          <div className="flex gap-3 mt-3 text-hint">
            <div className="flex items-center">
              <img src={KomentarIcon} alt="" className="h-4 w-4" />
              <p className="text-xs">5 Komentar</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={EyeIcon} alt="" className="h-4 w-4" />
              <p className="text-xs">5 dilihat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
