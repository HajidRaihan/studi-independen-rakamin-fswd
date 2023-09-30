import React from "react";
import { UserData } from "../Components/DataChart";
import { useState } from "react";
import PetaniImg from "../asset/img/petani.png";
import Chart from "../Components/Chart";
import EditIcon from "../asset/icon/Edit.png";
import DeleteIcon from "../asset/icon/Delete.png";
import KomentarIcon from "../asset/icon/speech-bubble.png";
import EyeIcon from "../asset/icon/Eye.png";
import LogoUnhas from "../asset/logo/logo-unhas.png";
import LogoMaros from "../asset/logo/logo-maros.png";
import Filter from "../Components/Filter";
import NavigationBar from "../Components/NavigationBar";

const BioPetani = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: ["Pendapatan produksi garam kecamatan xxxxxx 10 bulan terakhir", "Kecamatan 1"],
        data: UserData.map((data) => data.produksi),
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [fix, setFix] = useState(false);

  function fixedFilter() {
    if (window.scrollY >= 700) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", fixedFilter);

  return (
    <>
      <NavigationBar />
      <div className="lg:mx-32 pt-32 lg:flex gap-10 justify-center">
        <div className="flex justify-center">
          <div className="h-[600px] md:w-[380px] w-full lg:mx-0 mx-10 lg:mb-0 mb-10 border border-gray-600 rounded-xl">
            <div className="text-center mt-5 md:text-2xl text-xl font-semibold text-header1">
              <h1>Ketua</h1>
              <h1>Kelompok Petani Garam</h1>
            </div>
            <img src={PetaniImg} alt="" className="mx-auto" />
            <div className="w-full h-14 bg-primary text-white flex items-center justify-center">
              <p>Nama Lengkap</p>
            </div>
            <div className="text-center mt-5">
              <p className="md:text-xl text-lg font-medium text-header2">Total Lahan: 20 Hektar</p>
              <p className="font-light md:text-base text-sm text-paragraf">
                Kecamatan xxxxxx, Kabupaten Maros
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-3">
          <div>
            <h1 className="md:text-2xl text-lg font-medium text-header1">
              Grafik garis produksi (Ton)
            </h1>
            <div className="w-full mb-10">
              <Chart chartData={userData} />
            </div>

            <div>
              <h1 className="md:text-2xl text-lg font-medium text-header2">
                Anggota Kelompok Tani :{" "}
              </h1>
              <div className="flex gap-10 pl-5 mt-5 md:text-lg text-sm text-paragraf">
                <ul className="list-disc">
                  <li>Nama lengkap Petani1: X Hektar</li>
                  <li>Nama lengkap Petani1: X Hektar</li>
                  <li>Nama lengkap Petani1: X Hektar</li>
                </ul>
                <ul className="list-disc">
                  <li>Nama lengkap Petani1: X Hektar</li>
                  <li>Nama lengkap Petani1: X Hektar</li>
                  <li>Nama lengkap Petani1: X Hektar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[73px] flex grid-container">
        {/* Left Konten */}
        <div className={fix ? "fixed top-[73px] bg-white" : "bg-white"}>
          <Filter />
        </div>

        <div className="w-full">
          {/* Right Konten */}

          <div
            className={fix ? "w-full md:fixed top-[73px] z-10 bg-white lg:ml-[360px]" : "w-full"}
          >
            <div className="h-32 w-full flex items-center justify-center md:justify-start md:border-2 md:border-gray-300 md:shadow-lg md:pl-10">
              <h1 className="md:text-4xl text-2xl font-semibold">Produksi</h1>
            </div>
          </div>

          {/* post card */}
          <div className={fix ? "lg:ml-[360px] " : ""}>
            <div className="p-5 border border-gray-700 rounded-xl  md:mr-10 mx-2 md:translate-y-32 md:mt-10 mt-2 md:mb-10 mb-5">
              <div className="lg:flex gap-32">
                <div>
                  <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Alamat Rumah</h3>
                  <table className="w-full table-fixed sm:text-lg text-xs">
                    <tr>
                      <td>Username</td>
                      <td>Petani1</td>
                    </tr>
                    <tr>
                      <td>Nama Lengkap</td>
                      <td>Nama Lengkap Petani</td>
                    </tr>
                    <tr>
                      <td>Nama Panggilan</td>
                      <td>Petani</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>Tempat Lahir</td>
                      <td>Makassar</td>
                    </tr>
                    <tr>
                      <td>Tanggal Lahir</td>
                      <td>31 Juli 2000</td>
                    </tr>
                    <tr>
                      <td>No.Telp</td>
                      <td>08192737465</td>
                    </tr>
                  </table>
                </div>
                <div className="md:flex gap-32 md:mt-0 mt-5">
                  <div>
                    <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Lahan Garam</h3>
                    <table className="w-full table-fixed sm:text-lg text-xs">
                      <tr>
                        <td>Jalan</td>
                        <td>Jl.xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kelurahan/Dusun</td>
                        <td>xxxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kecamatan</td>
                        <td>xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kabupaten/Kota</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Provinsi</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Alamat lahan garam</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Luas Lahan</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-700 rounded-xl  md:mr-10 mx-2 md:translate-y-32 md:mt-10 mt-2 md:mb-10 mb-5">
              <div className="lg:flex gap-32">
                <div>
                  <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Alamat Rumah</h3>
                  <table className="w-full table-fixed sm:text-lg text-xs">
                    <tr>
                      <td>Username</td>
                      <td>Petani1</td>
                    </tr>
                    <tr>
                      <td>Nama Lengkap</td>
                      <td>Nama Lengkap Petani</td>
                    </tr>
                    <tr>
                      <td>Nama Panggilan</td>
                      <td>Petani</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>Tempat Lahir</td>
                      <td>Makassar</td>
                    </tr>
                    <tr>
                      <td>Tanggal Lahir</td>
                      <td>31 Juli 2000</td>
                    </tr>
                    <tr>
                      <td>No.Telp</td>
                      <td>08192737465</td>
                    </tr>
                  </table>
                </div>
                <div className="md:flex gap-32 md:mt-0 mt-5">
                  <div>
                    <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Lahan Garam</h3>
                    <table className="w-full table-fixed sm:text-lg text-xs">
                      <tr>
                        <td>Jalan</td>
                        <td>Jl.xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kelurahan/Dusun</td>
                        <td>xxxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kecamatan</td>
                        <td>xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kabupaten/Kota</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Provinsi</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Alamat lahan garam</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Luas Lahan</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-700 rounded-xl  md:mr-10 mx-2 md:translate-y-32 md:mt-10 mt-2 md:mb-10 mb-5">
              <div className="lg:flex gap-32">
                <div>
                  <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Alamat Rumah</h3>
                  <table className="w-full table-fixed sm:text-lg text-xs">
                    <tr>
                      <td>Username</td>
                      <td>Petani1</td>
                    </tr>
                    <tr>
                      <td>Nama Lengkap</td>
                      <td>Nama Lengkap Petani</td>
                    </tr>
                    <tr>
                      <td>Nama Panggilan</td>
                      <td>Petani</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>Tempat Lahir</td>
                      <td>Makassar</td>
                    </tr>
                    <tr>
                      <td>Tanggal Lahir</td>
                      <td>31 Juli 2000</td>
                    </tr>
                    <tr>
                      <td>No.Telp</td>
                      <td>08192737465</td>
                    </tr>
                  </table>
                </div>
                <div className="md:flex gap-32 md:mt-0 mt-5">
                  <div>
                    <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Lahan Garam</h3>
                    <table className="w-full table-fixed sm:text-lg text-xs">
                      <tr>
                        <td>Jalan</td>
                        <td>Jl.xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kelurahan/Dusun</td>
                        <td>xxxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kecamatan</td>
                        <td>xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kabupaten/Kota</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Provinsi</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Alamat lahan garam</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Luas Lahan</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-700 rounded-xl  md:mr-10 mx-2 md:translate-y-32 md:mt-10 mt-2 md:mb-10 mb-5">
              <div className="lg:flex gap-32">
                <div>
                  <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Alamat Rumah</h3>
                  <table className="w-full table-fixed sm:text-lg text-xs">
                    <tr>
                      <td>Username</td>
                      <td>Petani1</td>
                    </tr>
                    <tr>
                      <td>Nama Lengkap</td>
                      <td>Nama Lengkap Petani</td>
                    </tr>
                    <tr>
                      <td>Nama Panggilan</td>
                      <td>Petani</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Laki-laki</td>
                    </tr>
                    <tr>
                      <td>Tempat Lahir</td>
                      <td>Makassar</td>
                    </tr>
                    <tr>
                      <td>Tanggal Lahir</td>
                      <td>31 Juli 2000</td>
                    </tr>
                    <tr>
                      <td>No.Telp</td>
                      <td>08192737465</td>
                    </tr>
                  </table>
                </div>
                <div className="md:flex gap-32 md:mt-0 mt-5">
                  <div>
                    <h3 className="font-semibold sm:text-xl text-sm md:mb-3 mb-1">Lahan Garam</h3>
                    <table className="w-full table-fixed sm:text-lg text-xs">
                      <tr>
                        <td>Jalan</td>
                        <td>Jl.xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kelurahan/Dusun</td>
                        <td>xxxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kecamatan</td>
                        <td>xxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Kabupaten/Kota</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Provinsi</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Alamat lahan garam</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Luas Lahan</td>
                        <td>xxxxxxxxxxxxx</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={fix ? "ml-[360px] translate-y-28 overflow-x-hidden" : ""}>
            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>

            <div className="h-40 ml-10 mt-10 border border-gray-300 shadow-md rounded-l-lg flex">
              <div className="w-62">
                <img src={PetaniImg} alt="" className="h-full w rounded-l-lg" />
              </div>
              <div className="flex items-center">
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-xs">18 September 2021</p>
                    <div className="flex gap-3">
                      <img src={LogoUnhas} alt="Logo Unhas" className="h-5" />
                      <img src={LogoMaros} alt="Logo Maros" className="h-5" />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <h3 className="text-2xl">
                      Total Produksi <span className="font-bold">60 Kg</span>
                    </h3>
                    <div className="flex gap-1 items-center">
                      <img src={EditIcon} alt="" className="h-4" />
                      <p>Edit</p>
                    </div>
                    <p>|</p>
                    <div className="flex gap-2 items-center">
                      <img src={DeleteIcon} alt="" className="h-4" />
                      <p>Hapus</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nulla quae
                    eveniet odio voluptates. Temporibus blanditiis reiciendis dicta totam dolores!
                  </p>
                  <div className="flex gap-3 mt-3">
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
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const dataPetani = () => {};

export default BioPetani;
