import React from "react";
import LogoUnhas from "../asset/logo/logo-unhas.png";
import LogoMaros from "../asset/logo/logo-maros.png";
import LogoPetani from "../asset/logo/logo-petani.png";

const Login = () => {
  return (
    <div className="h-screen sm:w-[450px] sm:h-[650px] sm:border border-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
      <div className="h-12 flex justify-center gap-5 mt-16">
        <img src={LogoUnhas} alt="" />
        <img src={LogoMaros} alt="" />
        <img src={LogoPetani} alt="" />
      </div>
      <div>
        <h1 className="text-4xl mt-8 font-semibold text-center text-header0">Masuk!</h1>
        <h3 className="text-center">
          Selamat datang di <b>nama brand</b>
        </h3>
      </div>
      <div className="flex justify-center mt-10">
        <form action="submit">
          <div>
            <h4 className="font-bold mb-2">Email</h4>
            <input
              type="email"
              placeholder="Silahkan ketik e-mail Anda disini"
              id="email"
              className="border-2 w-80 h-8 rounded-md text-xs ps-2 "
              required
            />
          </div>
          <div>
            <h4 className="font-bold my-2">Password</h4>
            <input
              type="password"
              placeholder="Silahkan ketik password Anda disini"
              id="email"
              className="border-2 w-80  h-8 rounded-md text-xs ps-2"
              required
            />
          </div>
          <button className="w-80 bg-buttonColor hover:bg-buttonColor-hover active:bg-buttonColor-active h-8 rounded-md text-white font-semibold mt-5">
            Masuk
          </button>
          <div className="gap-16 flex justify-center mt-5">
            <div>
              <input type="checkbox" id="rememberme" className="h-2.5" />
              <label for="rememberme" className="text-xs">
                Ingat saya
              </label>
            </div>
            <div>
              <a href="#" className="text-xs text-cyan-600 underline">
                Lupa kata sandi
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
