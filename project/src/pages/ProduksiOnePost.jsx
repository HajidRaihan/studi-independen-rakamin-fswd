import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Filter from "../Components/Filter";
import EmblaCarousel from "../Components/EmblaCarousel";
import "../Components/embla.css";
import { images } from "../Components/ImageByIndex";
import LogoUnhas from "../asset/logo/logo-unhas.png";
import LogoMaros from "../asset/logo/logo-maros.png";

const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
const SLIDE_COUNT = images.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProduksiOnePost = () => {
  return (
    <>
      <NavigationBar />
      <div className="pt-[73px] flex grid-container">
        {/* Left Konten */}
        <div className="fixed bg-white">
          <Filter />
        </div>

        <div className="w-full">
          {/* Right Konten */}

          <div className="w-full">
            <div className="h-32 w-full flex items-center border-2 border-gray-300 shadow-lg pl-10 ml-[360px] z-20 fixed bg-white">
              <h1 className="text-4xl font-semibold">Produksi</h1>
            </div>

            <div className=" translate-x-[360px] translate-y-32">
              <section className="sandbox__carousel z-0">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              </section>

              <div className="mx-10">
                <div>
                  <p className="text-xs text-gray-600">15 September 2021</p>
                  <p className="text-xs text-gray-600 font-semibold">Petani 1</p>
                </div>
                <div className="mt-5">
                  <p className="text-xs">Total Produksi</p>
                  <p className="text-2xl font-bold">60 Kg</p>
                </div>
                <div className="mt-5">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae minus nihil eum
                    esse. Placeat in molestias optio quasi vero perferendis quibusdam, ab cum labore
                    repellendus dicta ipsam odio reiciendis harum, asperiores reprehenderit velit
                    ratione ullam dolor. Voluptatem sequi quia iusto harum, porro ex ipsam
                    perspiciatis non facilis dolorem, dicta minima.
                  </p>
                </div>
                <div className="w-full border border-black mt-10"></div>

                {/* Kolom Komentar */}
                <div className="mx-10">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full border-2 border-gray-500 focus:border-gray-700 active:border-gray-700 rounded-3xl mt-10 p-5"
                  ></textarea>
                  <button className="bg-buttonColor px-5 py-3 rounded-md text-white mt-8">
                    Komentar
                  </button>
                </div>

                <div className="w-full border border-black mt-10"></div>

                <div className="mt-10 mx-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <img src={LogoUnhas} alt="logo unhas" className="h-9" />
                      <h1 className="text-2xl font-bold">Admin 1</h1>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
                        blanditiis fugit fuga quia est itaque impedit placeat ratione ipsum ea
                        quisquam asperiores hic delectus at, voluptatibus a suscipit soluta sint
                        perspiciatis assumenda voluptatum quaerat. Corrupti, officiis! Rerum
                        accusamus ab, harum expedita tempora velit deserunt consequuntur voluptatum
                        commodi nemo a vitae!
                      </p>
                      <p className="text-xs mt-3">18 September 2021</p>
                    </div>
                    <div className="w-full border border-gray-700 mt-10"></div>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <img src={LogoMaros} alt="logo unhas" className="h-9" />
                      <h1 className="text-2xl font-bold">Admin 1</h1>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
                        blanditiis fugit fuga quia est itaque impedit placeat ratione ipsum ea
                        quisquam asperiores hic delectus at, voluptatibus a suscipit soluta sint
                        perspiciatis assumenda voluptatum quaerat. Corrupti, officiis! Rerum
                        accusamus ab, harum expedita tempora velit deserunt consequuntur voluptatum
                        commodi nemo a vitae!
                      </p>
                      <p className="text-xs mt-3">18 September 2021</p>
                    </div>
                    <div className="w-full border border-gray-700 mt-10"></div>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center gap-3">
                      <img src={LogoMaros} alt="logo unhas" className="h-9" />
                      <h1 className="text-2xl font-bold">Admin 1</h1>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
                        blanditiis fugit fuga quia est itaque impedit placeat ratione ipsum ea
                        quisquam asperiores hic delectus at, voluptatibus a suscipit soluta sint
                        perspiciatis assumenda voluptatum quaerat. Corrupti, officiis! Rerum
                        accusamus ab, harum expedita tempora velit deserunt consequuntur voluptatum
                        commodi nemo a vitae!
                      </p>
                      <p className="text-xs mt-3">18 September 2021</p>
                    </div>
                    <div className="w-full border border-gray-700 mt-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProduksiOnePost;
