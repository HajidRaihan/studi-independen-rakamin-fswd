import NavigationBar from "../Components/NavigationBar";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import Petani from "../asset/img/petani.png";
import LogoUnhas from "../asset/logo/logo-unhas.svg";
import LogoMaros from "../asset/logo/logo-maros.svg";
import LogoPetani from "../asset/logo/logo-petani.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="h-[430px] w-full bg-black absolute z-10 top-[73px] bg-opacity-50">
        <div className="flex justify-center gap-5 mt-32">
          <img src={LogoUnhas} alt="Logo unhas" className="w-24 h-24" />
          <img src={LogoMaros} alt="Logo unhas" className="w-24 h-24" />
          <img src={LogoPetani} alt="Logo unhas" className="w-24 h-24 rounded-full" />
        </div>
        <div className="mt-5 text-center text-white">
          <h1 className="font-bold text-2xl">Garamqu</h1>
          <p>Universitas Hasanuddin Bekerja Sama dengan</p>
          <p>Pemerintah Kabupaten Maros</p>
        </div>
      </div>
      <Carousel
        transition={{ duration: 2 }}
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        className=" h-[430px] top-[73px]"
      >
        <div className="flex h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="h-fullmd:w-1/2 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="h-full md:w-1/2 w-full object-cover"
          />
        </div>
        <div className="flex h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="h-full md:w-1/2 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="h-full md:w-1/2 w-full object-cover"
          />
        </div>
        <div className="flex h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt=""
            className="h-full md:w-1/2 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt=""
            className="h-full md:w-1/2 w-full object-cover"
          />
        </div>
      </Carousel>

      <div className="lg:mx-20 sm:mx-10 mx-5 pt-20">
        <h1 className="text-5xl font-semibold text-center my-20">Tentang Kami</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci at deserunt voluptas
          obcaecati voluptatibus, quisquam nobis, illo fugiat nisi cumque aliquid placeat
          perspiciatis, dolorum dicta nihil exercitationem voluptatem repudiandae ab ex corrupti.
          Ratione ipsum hic harum perferendis ad molestiae minima et, totam accusantium iure
          possimus quae laudantium, placeat deleniti, adipisci dolore fugiat aspernatur at modi
          animi quo repudiandae quam. Suscipit deleniti aperiam, totam, atque eos veniam libero
          sequi possimus nulla odio, necessitatibus deserunt vel! Dolore corporis ipsam ipsum ex
          excepturi totam quibusdam officiis, eos repudiandae voluptate ipsa eaque reprehenderit,
          vel vitae nemo at? Corrupti architecto quisquam veritatis iure mollitia repudiandae amet
          rerum voluptatem non, saepe vero ullam? Obcaecati dicta, et esse magnam rerum dolorem
          saepe accusantium voluptate quia quae sit expedita adipisci dolore animi praesentium ipsam
          in iste facilis libero quasi similique dolorum sint eaque. Sunt ullam repellendus
          exercitationem nam animi veniam distinctio, dolores amet dolorem nesciunt corporis
          delectus voluptate ea, a sapiente suscipit earum ad nisi, dolorum vitae cupiditate. Ullam
          iure harum molestias quasi error? Accusamus cumque vero debitis ipsum nobis officiis a
          quis doloremque ipsam repellat beatae dolores minima ab eum nisi eius, quos eligendi
          nesciunt. Culpa reprehenderit eos incidunt dignissimos corporis, eius iusto, voluptatibus
          molestiae in totam molestias placeat inventore ex, commodi atque quas. Quisquam, ipsa.
          Voluptates modi doloribus vero, nihil debitis odit inventore adipisci quaerat, itaque a
          explicabo vitae nam libero saepe facilis maxime excepturi earum illo officia voluptatum!
          Est modi sapiente soluta sequi doloribus, tenetur beatae libero praesentium distinctio quo
          quam quia autem! Odit doloremque asperiores sed cumque inventore debitis numquam. Itaque
          necessitatibus porro neque corrupti reiciendis eveniet nobis natus autem harum minus
          libero asperiores voluptates sapiente dolor aut, quas doloremque ea animi at? Repellendus
          odio, doloremque ipsum laudantium quia iste minima! Corporis voluptatum, ea numquam maxime
          iure reiciendis labore vel accusamus id assumenda sunt!
        </p>
      </div>

      <hr className="border border-black my-20 mx-52" />
      <h1 className="text-4xl text-center font-semibold mb-20">Petani Garam</h1>
      <div className="my-10">
        <div className="lg:flex lg:justify-center gap-10 mb-10">
          <Link to={"/bio-petani"}>
            <div className="h-[512px] w-[300px] mx-auto rounded-xl border border-black">
              <div>
                <img src={Petani} alt="" />
              </div>
              <div className="card-title bg-primary h-10 flex items-center justify-center">
                <h1 className="text-white text-xl font-semibold">Petani 1</h1>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-semibold my-3">8 Anggota</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </Link>
          <Link to={"/bio-petani"}>
            <div className="h-[512px] w-[300px] mx-auto mt-10 lg:mt-0 rounded-xl border border-black">
              <div>
                <img src={Petani} alt="" />
              </div>
              <div className="card-title bg-primary h-10 flex items-center justify-center">
                <h1 className="text-white text-xl font-semibold">Petani 1</h1>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-semibold my-3">8 Anggota</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </Link>
          <Link to={"/bio-petani"}>
            <div className="h-[512px] w-[300px] mx-auto mt-10 lg:mt-0 rounded-xl border border-black">
              <div>
                <img src={Petani} alt="" />
              </div>
              <div className="card-title bg-primary h-10 flex items-center justify-center">
                <h1 className="text-white text-xl font-semibold">Petani 1</h1>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-semibold my-3">8 Anggota</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:flex justify-center gap-10">
          <Link to={"/bio-petani"}>
            <div className="h-[512px] w-[300px] mx-auto mt-10 lg:mt-0 rounded-xl border border-black">
              <div>
                <img src={Petani} alt="" />
              </div>
              <div className="card-title bg-primary h-10 flex items-center justify-center">
                <h1 className="text-white text-xl font-semibold">Petani 1</h1>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-semibold my-3">8 Anggota</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </Link>
          <Link to={"/bio-petani"}>
            <div className="h-[512px] w-[300px] mx-auto mt-10 lg:mt-0 rounded-xl border border-black">
              <div>
                <img src={Petani} alt="" />
              </div>
              <div className="card-title bg-primary h-10 flex items-center justify-center">
                <h1 className="text-white text-xl font-semibold">Petani 1</h1>
              </div>
              <div className="text-center">
                <h3 className="text-xl text-semibold my-3">8 Anggota</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <footer className="w-full h-[285px] bg-primary flex items-center justify-center">
        <h1 className="md:text-3xl text-xl text-white font-light">Hubungi Kami | Bantuan</h1>
      </footer>
    </>
  );
};

const laporanToggle = () => {
  return <div className="h-screen w-3/4"></div>;
};

export default Home;
