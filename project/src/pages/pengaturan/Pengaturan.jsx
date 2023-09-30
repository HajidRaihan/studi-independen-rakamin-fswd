import React from "react";
import AvatarIcon from "../../asset/icon/avatar-icon.png";
import NavigationBar from "./../../Components/NavigationBar";
import FilterPengaturan from "../../Components/FilterPengaturan";
import { useParams } from "react-router-dom";
import "./pengaturan.css";

const Pengaturan = () => {
  const { jenis } = useParams();

  return (
    <div>
      <NavigationBar />

      <div className="pt-[73px] flex ">
        {/* Left Konten */}
        <FilterPengaturan />

        <div className="w-full md:h-fit">
          {/* Right Konten */}

          <div className="w-full header md:fixed md:bg-white z-10 lg:ml-[360px]">
            <div className="md:h-32 h-20 w-full flex items-center justify-center md:justify-start md:border-2 md:border-gray-300 md:shadow-lg md:pl-10">
              <h1 className="md:text-4xl text-2xl font-semibold">
                {jenis === "profil"
                  ? "Profil Saya"
                  : jenis === "kelompok" && "Data Diri Anggota Saya"}
              </h1>
            </div>
          </div>
          <div className="md:h-[700px]">
            {jenis === "profil" ? <Profil /> : jenis === "kelompok" && <Kelompok />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Profil = () => {
  return (
    <div className="lg:ml-[360px] md:translate-y-32 md:flex overflow-x-hidden md:mb-0 mb-5">
      <div className="md:w-1/2 md:border-r-2 border-gray-600 mt-3">
        <div className="flex justify-center">
          <div className="md:mt-10">
            <img src={AvatarIcon} alt="Avatar" className="mx-auto" />

            <button className="w-64 py-3 rounded-xl text-xl border border-gray-700 mt-8">
              Ganti Foto Profil
            </button>
            <div className="text-xs mt-3">
              <p>Maksimal 10 mb</p>
              <p>jenis foto PNG, JPG, JPEG</p>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center justify-start ml-3 md:ml-0 mt-8">
          <div className="md:mx-10">
            <h3 className="font-semibold md:text-xl text-sm md:mb-3">Data Diri</h3>
            <table className="w-full max-auto table-fixed sm:text-lg text-xs">
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
        </div>
      </div>

      {/* right kontent */}
      <div className="md:w-1/2 ml-3 w-full ">
        <div className="md:mt-16 mt-8 md:ml-10">
          <div className="md:mb-16 mb-8">
            <h3 className="font-semibold md:text-xl text-sm mb-3">Alamat Rumah</h3>
            <table className="w-full max-auto table-fixed  sm:text-lg text-xs">
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
            </table>
          </div>
          <div>
            <h3 className="font-semibold md:text-xl text-sm mb-3">Lahan Garam</h3>
            <table className="w-full max-auto table-fixed  sm:text-lg text-xs">
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
                <td>Koordinat Lahan Garam</td>
                <td>xxxxxxxxxxxxx</td>
              </tr>
              <tr>
                <td>Luas Lahan Garam</td>
                <td>xxxxxxxxxxxxx</td>
              </tr>
              <tr>
                <td>Metode Produksi</td>
                <td>xxxxxxxxxxxxx</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const Kelompok = () => {
  return (
    <div className="pb-[150px] overflow-x-hidden">
      <div className="p-5 border border-gray-700 rounded-xl lg:ml-[26rem] md:mr-10 mx-2 md:translate-y-32 md:mt-10 mt-2 md:mb-10 mb-5 ">
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
  );
};

export default Pengaturan;
