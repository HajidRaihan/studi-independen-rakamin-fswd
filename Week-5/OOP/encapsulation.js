function produk(nama, harga) {
  // yang memakai this berarti public
  this.nama_pub = nama;
  this.harga_pub = harga;

  // yang pakai const berarti private
  const nama_pri = nama;
  const harga_pri = harga;

  // contoh function public pakai this
  this.detail_pub = function () {
    return "nama : " + nama + "harga : " + harga;
  };

  // contoh function tidak pakai this = private
  function detail_pri() {
    return "nama : " + nama + "harga : " + harga;
  }
}
const transaksi = new produk("lato lato", 3000);
console.log(transaksi.nama_pub);
console.log(transaksi.harga_pub);
console.log(transaksi.detail_pub());
// console.log(transaksi.detail_pri());
