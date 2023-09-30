import React, { useState } from "react";

function FilterPetani() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
    setSelectedOption2(""); // Reset opsi kedua saat opsi pertama berubah
  };

  return (
    <div className="flex items-center h-16 border border-gray-300 pl-10 gap-5">
      <div>
        <h1 className="font-semibold text-lg">Filter Petani :</h1>
      </div>
      <div>
        <select
          value={selectedOption1}
          onChange={handleOption1Change}
          className="mr-5 border border-gray-200 shadow-md"
        >
          <option value="">Semua</option>
          <option value="option1a">Kecamatan 1A</option>
          <option value="option1b">Kecamatan 1B</option>
          <option value="option1b">Kecamatan 1C</option>
        </select>

        {selectedOption1 && (
          <select
            value={selectedOption2}
            onChange={(event) => setSelectedOption2(event.target.value)}
            className="border border-gray-200 shadow-md"
          >
            <option value="">Petani 1</option>
            {selectedOption1 === "option1a" && (
              <>
                <option value="option2a1">Petani 2A1</option>
                <option value="option2a2">Petani 2A2</option>
              </>
            )}
            {selectedOption1 === "option1b" && (
              <>
                <option value="option2b1">Petani 2B1</option>
                <option value="option2b2">Petani 2B2</option>
              </>
            )}
          </select>
        )}
      </div>
    </div>
  );
}

export default FilterPetani;
