import React from "react";
import PersonIcon from "../asset/icon/person-icon.svg";
import KelompokIcon from "../asset/icon/kelompok-icon.svg";
import { Link, useParams } from "react-router-dom";

const FilterPengaturan = () => {
  const { jenis } = useParams();
  console.log(jenis);
  return (
    <>
      <div className="fixed bg-white lg:block hidden">
        <div className="w-[360px] h-screen border-gray-300 shadow-lg border-2 fixed bg-white z-20">
          <div className="ml-12 my-8">
            <h1 className="text-2xl font-semibold mb-3 text-header2">Pengaturan</h1>
            <div className="pl-2">
              <Link to={"/pengaturan/profil"} className="flex items-center gap-3 mb- text-paragraf">
                <img src={PersonIcon} alt="" className="h-5 w-5 " />
                <p className={`text-lg ${jenis === "profil" ? "font-bold" : ""}`}>Profil Saya</p>
              </Link>
              <Link to={"/pengaturan/kelompok"} className="flex items-center gap-3 text-paragraf">
                <img src={KelompokIcon} alt="" className="h-5 w-5" />
                <p className={`text-lg ${jenis === "kelompok" ? "font-bold" : ""}`}>
                  Kelompok Saya
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPengaturan;
