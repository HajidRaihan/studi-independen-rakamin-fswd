exports.luasPersegi = function (sisi) {
  const luas = sisi * sisi;
  return console.log("luas persegi : " + luas);
};

exports.kelilingPersegi = function (sisi) {
  const keliling = sisi * 4;
  return console.log("keliling persegi : " + keliling);
};

exports.luasPersegiPanjang = function (panjang, lebar) {
  const luas = panjang * lebar;
  return console.log("luas persegi panjang : " + luas);
};

exports.kelilingPersegiPanjang = function (panjang, sisi) {
  const keliling = panjang * 2 + lebar * 2;
  return console.log("keliling persegi panjang : " + keliling);
};
