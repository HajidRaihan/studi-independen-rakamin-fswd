import { React, useRef, useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import LogoPetani from "../asset/logo/logo-petani.png";
import LogoUnhas from "../asset/logo/logo-unhas.png";
import LogoMaros from "../asset/logo/logo-maros.png";
import Kalkulator from "../asset/icon/Page.png";
import ErrorIcon from "../asset/icon/Error.png";
import CircledMenuIcon from "../asset/icon/Circled-Menu.png";
import NotificationIcon from "../asset/icon/Notification.png";
import AvatarIcon from "../asset/icon/avatar-icon.png";
import HomeIcon from "../asset/icon/home-icon.svg";
import FilterIcon from "../asset/icon/filter-icon.svg";
import Notifikasi from "./Notifikasi";
import BackIcon from "../asset/icon/back-icon.svg";
import { FilterTemplate } from "./Filter";

// const NavigationBar = () => {
//   const windowWidth = useRef(window.innerWidth);
//   const location = useLocation().pathname;
//   console.log(location);
//   return (
//     <>
//       {windowWidth === 400 &&
//       (location === "/submit/laporan" || location === "/submit/produksi") ? (
//         <BackNavigation />
//       ) : (
//         <Navbar />
//       )}
//     </>
//   );
// };

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const handleToggle = () => {
    setShow((current) => !current);
  };

  const handleNotif = () => {
    setNotifOpen((current) => !current);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNotifOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="shadow-xl relative w-screen">
      <nav className="bg-[#f5f5f5] h-[73px] flex items-center w-full fixed z-20">
        <div className="md:px-10 px-2 flex justify-between w-full">
          <div className="flex items-center ">
            <Link to={"/"} className="sm:flex hidden items-center gap-5 font-bold">
              <img src={LogoPetani} alt="" className="h-10 w-10" />
              <span className="text-2xl">Garamqu</span>
            </Link>
            <Link to={"/"}>
              <img
                src={HomeIcon}
                alt="home icon"
                className={`sm:hidden h-8 w-8 mr-3 ${location === "/" && "hidden"}`}
              />
            </Link>
            <div className="relative sm:ml-10">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 h-8 lg:w-80 w-full text-sm text-gray-900 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-2 ml-2">
            <button
              className={`border bg-primary text-white h-8 w-[93px] px-2 rounded-md text-xs gap-1 items-center lg:hidden ${
                location === "/laporan" ||
                location === "/produksi" ||
                location === "/riwayat-laporan" ||
                location === "/pengaturan/profil" ||
                location === "/pengaturan/kelompok"
                  ? "flex"
                  : "hidden"
              }`}
              onClick={handleToggle}
            >
              <img src={FilterIcon} alt="" className=" h-4 w-4" />
              Filter
            </button>

            <button
              className={`border border-black text-black h-8 w-[93px] px-2 rounded-md text-xs gap-1 flex items-center lg:hidden ${
                (location === "/laporan" ||
                  location === "/produksi" ||
                  location === "/pengaturan/profil" ||
                  location === "/pengaturan/kelompok" ||
                  location === "/riwayat-laporan") &&
                "hidden"
              }`}
              onClick={handleToggle}
            >
              <img src={CircledMenuIcon} alt="" className=" h-4 w-4" />
              Laporan
            </button>
            <button
              className={`bg-buttonColor hover:bg-buttonColor-hover active:bg-buttonColor-active h-10 px-3 rounded-md text-sm text-white gap-1 lg:flex items-center hidden ${
                location === "/submit/produksi" && "lg:hidden"
              }`}
              onClick={() => navigate("/submit/produksi")}
            >
              <img src={Kalkulator} alt="" className="h-5 w-5" />
              Laporkan Produksi
            </button>
            <button
              className={`border border-red-600 text-black h-10 px-3 rounded-md text-sm gap-1 lg:flex items-center hidden ${
                location === "/submit/laporan" && "lg:hidden"
              }`}
              onClick={() => navigate("/submit/laporan")}
            >
              <img src={ErrorIcon} alt="" className="h-5 w-5" />
              Laporkan Masalah
            </button>
            <button
              className="border border-black text-black h-10 px-3 rounded-md text-sm gap-1 lg:flex items-center hidden"
              onClick={() => navigate("/riwayat-laporan")}
            >
              <img src={CircledMenuIcon} alt="" className="h-5 w-5" />
              Riwayat Laporan
            </button>
            <div
              className={`${
                location === "/" ? "relative" : "relative hidden md:flex "
              } cursor-pointer`}
              onClick={handleNotif}
              ref={menuRef}
            >
              <img src={NotificationIcon} alt="error" className="w-8 h-8" />
              <div className="h-4 w-4 bg-button-laporan rounded-full text-white text-xs flex items-center justify-center font-semibold absolute top-0">
                2
              </div>
            </div>

            {/* show notification */}

            <div
              className={`absolute bg-white top-16 md:right-20 right-3 w-80 rounded-md p-5 shadow-md before:content-[''] ${
                notifOpen
                  ? "opacity-100 visible translate-y-0 duration-200 ease-linear"
                  : "opacity-0 invisible -translate-y-5 duration-200 ease-linear"
              }`}
            >
              <ul>
                <Notifikasi img={LogoPetani} title={"Kedaireka"} />
                <Notifikasi img={LogoUnhas} title={"Unhas"} />
                <Notifikasi img={LogoMaros} title={"Pemda"} />
              </ul>
            </div>

            <Link to={"/pengaturan/profil"} className="flex items-center gap-3">
              <img
                src={AvatarIcon}
                alt="error"
                className={` ${
                  location === "/" ||
                  location === "/pengaturan/profil" ||
                  location === "/pengaturan/kelompok"
                    ? "h-8 w-8"
                    : "h-8 w-8 hidden md:flex"
                }`}
              />
              <p className="xl:block hidden">Petani 1</p>
            </Link>
            <div className="h-10 border border-gray-500 hidden xl:block"></div>
            <p className="xl:block hidden">Keluar</p>
          </div>

          {/* Show toggle */}
          {show &&
            (location === "/" ||
              location === "/submit/produksi" ||
              location === "/submit/laporan") && <ToggleLaporan closeHandler={handleToggle} />}
          {show &&
            (location === "/laporan" ||
              location === "/produksi" ||
              location === "/riwayat-laporan") && (
              <FilterToggle closeHandler={handleToggle} title="FILTER" />
            )}
          {show && (location === "/pengaturan/profil" || location === "/pengaturan/kelompok") && (
            <FilterToggle closeHandler={handleToggle} title="PENGATURAN" />
          )}
        </div>
      </nav>
    </div>
  );
};

const ToggleLaporan = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-64 h-screen bg-white shadow-md absolute z-30 right-0 p-5 top-0">
      <div onClick={props.closeHandler} className="font-semibold flex items-center gap-3 mb-5">
        <img src={BackIcon} alt="backicon" />
        <p className="text-lg semibold">LAPORAN</p>
      </div>
      <div className="absolute z-40">
        <button
          className={`bg-buttonColor hover:bg-buttonColor-hover active:bg-buttonColor-active h-10 px-3 rounded-md text-sm text-white gap-1 items-center flex w-48`}
          onClick={() => navigate("/submit/produksi")}
        >
          <img src={Kalkulator} alt="" className="h-5 w-5" />
          Laporkan Produksi
        </button>
        <button
          className={`border border-red-600 text-black h-10 px-3 rounded-md text-sm gap-1 flex items-center w-48 mt-5`}
          onClick={() => navigate("/submit/laporan")}
        >
          <img src={ErrorIcon} alt="" className="h-5 w-5" />
          Laporkan Masalah
        </button>
        <button
          className="border border-black text-black h-10 px-3 rounded-md text-sm gap-1 flex items-center w-48 mt-5"
          onClick={() => navigate("/riwayat-laporan")}
        >
          <img src={CircledMenuIcon} alt="" className="h-5 w-5" />
          Riwayat Laporan
        </button>
      </div>
    </div>
  );
};

const FilterToggle = (props) => {
  const location = useLocation().pathname;
  console.log("ini lokasinya", location);
  return (
    <div className="w-[300px] h-screen bg-white shadow-md absolute z-30 right-0 p-5 top-0">
      <div onClick={props.closeHandler} className="font-semibold flex items-center gap-3 mb-5">
        <img src={BackIcon} alt="backicon" />
        <p className="text-lg semibold">{props.title}</p>
      </div>
      <div className="absolute z-40">
        {/* {location === "/produksi" && <FilterProduksiTemplate />}
        {location === "/laporan" && <FilterLaporanTemplate />} */}
        {location === "/produksi" && (
          <FilterTemplate
            riwayatTitle="RIWAYAT LAPORAN"
            ratarataTitle="RATA - RATA PRODUKSI"
            filterTItle="FILTER LAPORAN MASALAH"
            waktuTitle="FILTER JANGKA WAKTU LAPORAN PRODUKSI"
          />
        )}
        {location === "/laporan" && (
          <FilterTemplate
            riwayatTitle="RIWAYAT LAPORAN"
            ratarataTitle="RATA - RATA MASALAH"
            filterTItle="FILTER LAPORAN MASALAH"
            waktuTitle="FILTER JANGKA WAKTU LAPORAN MASALAH"
          />
        )}
        {location === "/riwayat-laporan" && (
          <FilterTemplate
            riwayatTitle="RIWAYAT LAPORAN"
            totalTitle="TOTAL SELURUH RIWAYAT LAPORAN"
          />
        )}
        {(location === "/pengaturan/profil" || location === "/pengaturan/kelompok") && (
          <FilterTemplate />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
