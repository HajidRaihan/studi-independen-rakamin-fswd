const suhu = 1000;
let kondisi = "";

if (suhu >= -100 && suhu <= 0) {
  kondisi = "Beku";
} else if (suhu >= 1 && suhu <= 100) {
  kondisi = "cair";
} else if (suhu >= 101 && suhu <= 500) {
  kondisi = "Uap";
} else {
  kondisi = "Tidak terdefinisi";
}
console.log("Kondisi air pada suhu " + suhu + " adalah " + kondisi);
