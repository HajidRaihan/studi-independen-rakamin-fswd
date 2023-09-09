const platKuning = true;
const ccMobil = 1700;
let jenisBbm = "";

if (platKuning === true) {
  jenisBbm = "BBM Subsidi";
} else if (ccMobil < 1500) {
  jenisBbm = "Pertamax";
} else if (ccMobil >= 1500) {
  jenisBbm = "Pertamax Turbo";
}

// console.log("Mobil dengan CC " + ccMobil + " jenis BBMnya adalah " + jenisBbm);
console.log("Mobil dengan plat Kuning jenis BBMnya adalah " + jenisBbm);
