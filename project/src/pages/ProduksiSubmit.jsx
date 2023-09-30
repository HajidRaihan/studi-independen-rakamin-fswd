import { React, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import GalleryIcon from "../asset/icon/gallery-icon.png";
import { useNavigate } from "react-router-dom";

const ProduksiSubmit = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  console.log("data from image", image);
  return (
    <div>
      <NavigationBar />
      <div className="flex justify-center items-center w-screen md:mb-0 mb-36">
        <div className="md:w-2/3 overflow-y-auto  w-screen mx-3 border border-gray-500 rounded-2xl md:p-12 p-5 mt-28 ">
          <div className="flex justify-between">
            <h1 className="md:text-4xl text-xl font-semibold">Produksi</h1>
            <button
              className="md:px-5 px-3 md:py-3 py-2 text-md bg-buttonColor hover:bg-buttonColor-hover active:bg-buttonColor-active text-white rounded-lg font-medium"
              onClick={() => navigate("/produksi")}
            >
              Unggah
            </button>
          </div>
          <div className="md:flex gap-20">
            <div className="md:mt-5">
              <p className="text-xs mb-3">Total Produksi</p>
              <input
                type="text"
                id="inputBerat"
                value="60"
                className="w-12 h-8 pl-2 border-black border rounded-lg"
              />
              <label htmlFor="inputBerat" className="pl-2">
                Kg
              </label>
            </div>
            <div className="mt-5">
              <p className="text-xs mb-3">Tanggal Produksi</p>
              <input type="date" className="w-30 h-8 pl-2 border-black border rounded-lg" />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xs mb-3">Deskripsi Produksi</p>
            <textarea
              name=""
              id=""
              className="w-full h-40 p-3 rounded-xl border border-black"
            ></textarea>
          </div>
          <div className="mt-5">
            <p className="text-xs mb-3">Foto/Vidio</p>
            <div className="w-20 h-20 bg-gray-200 border border-gray-700 rounded-xl ">
              <input
                type="file"
                id="input-foto"
                onChange={onImageChange}
                className="hidden"
                multiple
              />
              <label
                htmlFor="input-foto"
                className="cursor-pointer flex flex-col justify-center items-center"
              >
                <img src={GalleryIcon} alt="" className="h-10 w-10" />
                <p className="text-xs text-center font-semibold">Pilih Foto/Vidio</p>
              </label>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduksiSubmit;
