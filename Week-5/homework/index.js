const nama = document.querySelector("#nama");
const umur = document.querySelector("#umur");
const uangSangu = document.querySelector("#uang");
const buttonSubmit = document.querySelector(".btn-submit");
const table = document.querySelector("tbody");
const data = [];
const rataUmurElement = document.querySelector(".rata-umur");
const rataUangElement = document.querySelector(".rata-uang");
const resume = document.querySelector(".resume");
const btnHasil = document.querySelector(".btn-hasil");
const form = document.querySelector(".form-wrapper");
const tableContainer = document.querySelector(".table-container");
const backButton = document.querySelector(".back-button");
let dataobj = [];
let jumlahUang = 0;
let jumlahUmur = 0;
let uangTemp = 0;
let umurTemp = 0;
let counter = 0;
let ratarataUmur = 0;
let ratarataUang = 0;

// fungsi untuk handle submit button
buttonSubmit.addEventListener("click", function () {
  // variable untuk menyimpan nilai dari uang sangu dan juga umur kemudian dikonversi jadi number agar bisa di hitung rata ratanya
  uangTemp = parseInt(uangSangu.value);
  umurTemp = parseInt(umur.value);

  // pengkondisian untuk menentukan kondisi inputan yaitu nama minimal 10 karakter, umur minimal 25 dan uang sangu 100 ribu sampai 1jt
  if (nama.value.length > 10 && umurTemp >= 25 && uangTemp >= 100000 && uangTemp <= 1000000) {
    data.push(nama.value, umur.value, uangSangu.value);
    const tr = document.createElement("tr");

    // perulangan untuk menginput nilai dari data yang sudah di submit
    for (let i = 0; i < data.length; i++) {
      const td = document.createElement("td");
      td.innerHTML = data[i];
      tr.appendChild(td);
    }

    table.insertBefore(tr, resume); // fungsi untuk memasukkan element baru tr ke tabel

    counter++; // variable untuk menghitung jumlah data yang telah di input
    jumlahUang += uangTemp;
    jumlahUmur += umurTemp;

    ratarataUmur = jumlahUmur / counter;
    ratarataUang = jumlahUang / counter;

    // perulangan untuk mengosongkan nilai array data
    while (data.length) {
      data.pop();
    }

    // variable untuk menentukan nilai rata rata dari umur dan uang sangu
    rataUmurElement.innerHTML = ratarataUmur.toFixed(2);
    rataUangElement.innerHTML = ratarataUang.toFixed(2);

    // mereset value input nama, umur, dan uang sangu
    nama.value = "";
    umur.value = "";
    uangSangu.value = "";
  } else {
    // memunculkan alert jika kondisi diatas tidak terpenuhi
    alert("Data yang anda masukkan tidak sesuai dengan aturan yang ada");
  }
});

// handle button untuk pindah tab ke tab table
btnHasil.addEventListener("click", function () {
  form.style.display = "none";
  tableContainer.style.display = "block";
});

// handle button untuk kembali ke tab form
backButton.addEventListener("click", function () {
  form.style.display = "block";
  tableContainer.style.display = "none";
});
