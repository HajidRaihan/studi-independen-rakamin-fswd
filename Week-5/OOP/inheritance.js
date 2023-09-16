class Kendaraan {
  constructor(merek, cc) {
    this.merek = merek;
    this.cc = cc;
  }
  penjualan() {
    return "Penjualan " + this.merek + " dengan penjualan terbanyak";
  }
}

class Motor extends Kendaraan {
  constructor(merek, cc, warna, panjang) {
    super(merek, cc);
    this.warna = warna;
    this.panjang = panjang;
  }
}

const honda = new Motor("yamaha", 200, "merah", 150);
console.log(honda.merek);
console.log(honda.cc);
console.log(honda.warna);
console.log(honda.panjang);
console.log(honda.penjualan());
