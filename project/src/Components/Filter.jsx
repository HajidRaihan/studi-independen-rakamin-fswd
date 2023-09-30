import React from "react";
import BookIcon from "../asset/icon/Book.png";
import ErrorIcon from "../asset/icon/Error.png";
import CircledMenuIcon from "../asset/icon/Circled-Menu.png";
import { useLocation } from "react-router-dom";
import PersonIcon from "../asset/icon/person-icon.svg";
import KelompokIcon from "../asset/icon/kelompok-icon.svg";
import { Link, useParams } from "react-router-dom";

const Filter = () => {
  const location = useLocation().pathname;

  return (
    <div className="w-[360px] h-screen border-gray-300 shadow-lg border-2 bg-white z-10 lg:block hidden">
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
        <FilterTemplate riwayatTitle="RIWAYAT LAPORAN" totalTitle="TOTAL SELURUH RIWAYAT LAPORAN" />
      )}
    </div>
  );
};

export const FilterTemplate = (props) => {
  const location = useLocation().pathname;
  const { jenis } = useParams();
  return (
    <>
      {(location === "/produksi" || location === "/laporan" || location === "/riwayat-laporan") && (
        <div className="md:ml-8 md:my-8 w-full">
          <h5 className="md:text-xl text-lg font-semibold mb-3 text-header2">
            {props.riwayatTitle}
          </h5>
          <div className="pl-2 text-paragraf">
            <div className="flex items-center mb-3 gap-1">
              <img src={CircledMenuIcon} alt="Circled Menu Icon " className="md:h-5 h-4" />
              <p className="md:text-sm text-xs">Semua</p>
            </div>
            <div className="flex items-center mb-3 gap-1">
              <img src={BookIcon} alt="Book Icon" className="md:h-5 h-4" />
              <p className="md:text-sm text-xs">Produksi</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={ErrorIcon} alt="Laporan Icon" className="md:h-5 h-4" />
              <p className="md:text-sm text-xs">Produksi</p>
            </div>
          </div>
        </div>
      )}

      {(location === "/produksi" || location === "/laporan") && (
        <div className="md:ml-8 md:my-8 mt-5 w-full">
          <h5 className="md:text-xl text-lg font-semibold mb-3 text-header2">
            {props.ratarataTitle}
          </h5>
          <div className="pl-2 md:w-1/3 w-1/2 text-paragraf">
            <div className="flex items-center mb-3 justify-between">
              <p className="md:text-sm text-xs">Mingguan :</p>
              <p className="md:text-sm text-xs">20</p>
            </div>
            <div className="flex items-center mb-3 justify-between">
              <p className="md:text-sm text-xs">Bulanan :</p>
              <p className="md:text-sm text-xs">21</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="md:text-sm text-xs">Tahunan :</p>
              <p className="md:text-sm text-xs">30</p>
            </div>
          </div>
        </div>
      )}

      {location === "/riwayat-laporan" && (
        <div className="md:ml-8 md:my-8 mt-5 w-full">
          <h5 className="md:text-xl text-lg font-semibold mb-3 text-header2">{props.totalTitle}</h5>
          <div className="pl-2 md:w-1/3 w-1/2 text-paragraf">
            <div className="flex items-center mb-3 justify-between">
              <p className="md:text-sm text-xs">Semua :</p>
              <p className="md:text-sm text-xs">20</p>
            </div>
            <div className="flex items-center mb-3 justify-between">
              <p className="md:text-sm text-xs">Produksi :</p>
              <p className="md:text-sm text-xs">21</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="md:text-sm text-xs">Masalah :</p>
              <p className="md:text-sm text-xs">30</p>
            </div>
          </div>
        </div>
      )}

      {location === "/laporan" && (
        <div className="md:ml-8 md:my-8 mt-5 w-full">
          <h5 className="md:text-xl text-lg font-semibold mb-3 text-header2">
            {props.filterTItle}
          </h5>
          <div className="pl-2 w-2/3 text-paragraf">
            <div className="flex items-center mb-3 gap-3">
              <input type="radio" id="radio" className="h-3 w-3" />
              <label htmlFor="radio" className="md:text-sm text-xs">
                Laporan belum ibaca
              </label>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <input type="radio" id="radio" className="h-3 w-3" />
              <label htmlFor="radio" className="md:text-sm text-xs">
                Laporan ditindak lanjuti
              </label>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <input type="radio" id="radio" className="h-3 w-3" />
              <label htmlFor="radio" className="md:text-sm text-xs">
                Laporan selesai
              </label>
            </div>
          </div>
        </div>
      )}

      {(location === "/produksi" || location === "/laporan") && (
        <div className="md:ml-8 md:my-8 mt-5 w-full">
          <h5 className="md:text-xl text-lg font-semibold mb-3 md:mr-10 text-header2">
            {props.waktuTitle}
          </h5>
          <div className="pl-2 md:w-3/4 w-full text-paragraf">
            <div className="flex justify-between items-center mb-3 gap-3">
              <label htmlFor="date" className="md:text-sm text-xs">
                Dari
              </label>
              <input
                type="date"
                id="date"
                className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
              />
            </div>
            <div className="flex justify-between items-center mb-3 gap-3">
              <label htmlFor="date" className="md:text-sm text-xs">
                Sampai
              </label>
              <input
                type="date"
                id="date"
                className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
              />
            </div>
          </div>
        </div>
      )}
      {(location === "/pengaturan/profil" || location === "/pengaturan/kelompok") && (
        <div className="md:ml-12 md:my-8">
          {/* <h1 className="md:text-2xl text-lg font-semibold mb-3 text-header2">Pengaturan</h1> */}
          <div className="pl-2">
            <Link to={"/pengaturan/profil"} className="flex items-center gap-3 mb- text-paragraf">
              <img src={PersonIcon} alt="" className="md:h-5 md:w-5 h-4 w-4" />
              <p
                className={`text-lg ${
                  jenis === "profil" ? "font-bold md:text-base text-sm" : "md:text-base text-sm"
                }`}
              >
                Profil Saya
              </p>
            </Link>
            <Link to={"/pengaturan/kelompok"} className="flex items-center gap-3 text-paragraf">
              <img src={KelompokIcon} alt="" className="md:h-5 md:w-5 h-4 w-4" />
              <p
                className={`text-lg ${
                  jenis === "kelompok" ? "font-bold md:text-base text-sm" : "md:text-base text-sm"
                }`}
              >
                Kelompok Saya
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
// export const Template = () => {
//   return (
//     <>
//       <div className="md:ml-8 md:my-8 w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">RIWAYAT LAPORAN</h5>
//         <div className="pl-2 text-paragraf">
//           <div className="flex items-center mb-3 gap-1">
//             <img src={CircledMenuIcon} alt="Circled Menu Icon " className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Semua</p>
//           </div>
//           <div className="flex items-center mb-3 gap-1">
//             <img src={BookIcon} alt="Book Icon" className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Produksi</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <img src={ErrorIcon} alt="Laporan Icon" className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Produksi</p>
//           </div>
//         </div>
//       </div>

//       <div className="md:ml-8 md:my-8 mt-5 w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">
//           RATA - RATA PRODUKSI
//         </h5>
//         <div className="pl-2 md:w-1/3 w-1/2 text-paragraf">
//           <div className="flex items-center mb-3 justify-between">
//             <p className="md:text-sm text-xs">Mingguan :</p>
//             <p className="md:text-sm text-xs">20</p>
//           </div>
//           <div className="flex items-center mb-3 justify-between">
//             <p className="md:text-sm text-xs">Bulanan :</p>
//             <p className="md:text-sm text-xs">21</p>
//           </div>
//           <div className="flex items-center justify-between">
//             <p className="md:text-sm text-xs">Tahunan :</p>
//             <p className="md:text-sm text-xs">30</p>
//           </div>
//         </div>
//       </div>

//       <div className="md:ml-8 md:my-8 mt-5  w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">
//           FILTER JANGKA WAKTU LAPORAN PRODUKSI
//         </h5>
//         <div className="pl-2 md:w-3/4 w-full text-paragraf">
//           <div className="flex justify-between items-center mb-3 gap-3">
//             <label htmlFor="date" className="md:text-sm text-xs">
//               Dari
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
//             />
//           </div>
//           <div className="flex justify-between items-center mb-3 gap-3">
//             <label htmlFor="date" className="md:text-sm text-xs">
//               Sampai
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export const FilterLaporanTemplate = () => {
//   return (
//     <>
//       <div className="md:ml-8 md:my-8 w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">RIWAYAT LAPORAN</h5>
//         <div className="pl-2 text-paragraf">
//           <div className="flex items-center mb-3 gap-1">
//             <img src={CircledMenuIcon} alt="Circled Menu Icon " className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Semua</p>
//           </div>
//           <div className="flex items-center mb-3 gap-1">
//             <img src={BookIcon} alt="Book Icon" className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Produksi</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <img src={ErrorIcon} alt="Laporan Icon" className="md:h-5 h-4" />
//             <p className="md:text-sm text-xs">Produksi</p>
//           </div>
//         </div>
//       </div>

//       <div className="md:ml-8 md:my-8 mt-5 w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">
//           RATA - RATA PRODUKSI
//         </h5>
//         <div className="pl-2 md:w-1/3 w-1/2 text-paragraf">
//           <div className="flex items-center mb-3 justify-between">
//             <p className="md:text-sm text-xs">Mingguan :</p>
//             <p className="md:text-sm text-xs">20</p>
//           </div>
//           <div className="flex items-center mb-3 justify-between">
//             <p className="md:text-sm text-xs">Bulanan :</p>
//             <p className="md:text-sm text-xs">21</p>
//           </div>
//           <div className="flex items-center justify-between">
//             <p className="md:text-sm text-xs">Tahunan :</p>
//             <p className="md:text-sm text-xs">30</p>
//           </div>
//         </div>
//       </div>
//       <div className="md:ml-8 md:my-8 mt-5 w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">
//           FILTER LAPORAN MASALAH
//         </h5>
//         <div className="pl-2 w-2/3 text-paragraf">
//           <div className="flex items-center mb-3 gap-3">
//             <input type="radio" id="radio" className="h-3 w-3" />
//             <label htmlFor="radio" className="md:text-sm text-xs">
//               Laporan belum ibaca
//             </label>
//           </div>
//           <div className="flex items-center mb-3 gap-3">
//             <input type="radio" id="radio" className="h-3 w-3" />
//             <label htmlFor="radio" className="md:text-sm text-xs">
//               Laporan ditindak lanjuti
//             </label>
//           </div>
//           <div className="flex items-center mb-3 gap-3">
//             <input type="radio" id="radio" className="h-3 w-3" />
//             <label htmlFor="radio" className="md:text-sm text-xs">
//               Laporan selesai
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="md:ml-8 md:my-8 mt-5  w-full">
//         <h5 className="md:text-2xl text-lg font-semibold mb-3 text-header2">
//           FILTER JANGKA WAKTU LAPORAN PRODUKSI
//         </h5>
//         <div className="pl-2 md:w-3/4 w-full text-paragraf">
//           <div className="flex justify-between items-center mb-3 gap-3">
//             <label htmlFor="date" className="md:text-sm text-xs">
//               Dari
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
//             />
//           </div>
//           <div className="flex justify-between items-center mb-3 gap-3">
//             <label htmlFor="date" className="md:text-sm text-xs">
//               Sampai
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="md:mr-8 mr-5 border-b-2 border-gray-300 md:text-sm text-xs"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Filter;
