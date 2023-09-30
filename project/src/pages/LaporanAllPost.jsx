import React from "react";
import NavigationBar from "../Components/NavigationBar";
import PostCard from "../Components/PostCard";
import Filter from "../Components/Filter";

const LaporanAllPost = () => {
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

          <div className="w-full header fixed bg-white z-10 lg:ml-[360px] ">
            <div className="lg:h-32 lg:justify-start justify-center h-16 text-center w-full flex items-center border-2 border-gray-300 shadow-lg md:pl-10">
              <h1 className="lg:text-4xl text-2xl font-semibold">Laporan</h1>
            </div>
            {/* <FilterPetani /> */}
          </div>

          {/* post card */}
          <PostCard />
        </div>
      </div>
    </>
  );
};

export default LaporanAllPost;
