class Kendaraan {
  constructor(produsen) {
    this.produsen = produsen;
  }
  lokasi() {
    return "Lokasi " + this.produsen + "ada di 40 cabang di indonesia";
  }
}

class Motor extends Kendaraan {
  constructor(produsen) {
    super(produsen);
  }
  // lokasi() {
  //   return "Lokasi " + this.produsen + "ada di 30 cabang di indonesia";
  // }
}

const honda = new Motor("Honda");
console.log(honda.lokasi());
