const randomArr = [];
const x = 50;
const arrGenap = [];
const arrGanjil = [];

// Membuat array dengan nilai random 1-50 dengan panjang 100
for (let i = 0; i < 100; i++) {
  randomArr.push(Math.floor(Math.random() * x));
}

// Memecah array menjadi dua berdasarkan index ganjil dan genap yang masing masing panjang array 50
for (const key in randomArr) {
  if (key % 2 === 0) {
    arrGenap.push(randomArr[key]);
  } else {
    arrGanjil.push(randomArr[key]);
  }
}

// membuat fungsi untuk mencari nilai terkecil dari sebuah array
function nilaiMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arrGanjil[i] < min) {
      min = arrGanjil[i];
    }
  }
  return min;
}

// membuat fungsi untuk mencari nilai terbesar dari sebuah array
function nilaiMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//membuat fungsi untuk menghitung total dari nilai dari sebuah array
function nilaiTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// membuat fungsi untuk menghitung rata-rata dari sebuah array
function nilaiMean(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const ratarata = total / arr.length;
  return ratarata;
}

// membuat fungsi untuk membandingkan dua buah array berdasarkan total, nilai terkecil, terbesar, dan juga rata-rata
function perbandingan(arrGanjil, arrGenap) {
  if (nilaiMin(arrGanjil) > nilaiMin(arrGenap)) {
    console.log("Min lebih besar Array Ganjil");
  } else if (nilaiMin(arrGanjil) < nilaiMin(arrGenap)) {
    console.log("Min lebih besar Array Genap");
  } else {
    console.log("Nilai Min sama antara Array Ganjil dan Genap");
  }

  if (nilaiMax(arrGanjil) > nilaiMax(arrGenap)) {
    console.log("Max lebih besar Array Ganjil");
  } else if (nilaiMax(arrGanjil) < nilaiMax(arrGenap)) {
    console.log("Max lebih besar Array Genap");
  } else {
    console.log("Nilai Max sama antara Array Ganjil dan Genap");
  }

  if (nilaiTotal(arrGanjil) > nilaiTotal(arrGenap)) {
    console.log("Total lebih besar Array Ganjil");
  } else if (nilaiTotal(arrGanjil) < nilaiTotal(arrGenap)) {
    console.log("Total lebih besar Array Genap");
  } else {
    console.log("Nilai Total sama antara Array Ganjil dan Genap");
  }

  if (nilaiMean(arrGanjil) > nilaiMean(arrGenap)) {
    console.log("Rata-rata lebih besar Array Ganjil");
  } else if (nilaiMean(arrGanjil) < nilaiMean(arrGenap)) {
    console.log("Rata-rata lebih besar Array Genap");
  } else {
    console.log("Nilai Rata-rata sama antara Array Ganjil dan Genap");
  }
}

// mencetak hasil
console.log("Random Array dengan panjang 100 :");
console.log(randomArr);
console.log("\n");
console.log("Array Ganjil :");
console.log(arrGanjil);
console.log("panjang \t: " + arrGanjil.length);
console.log("min \t\t: " + nilaiMin(arrGanjil));
console.log("max \t\t: " + nilaiMax(arrGanjil));
console.log("total \t\t: " + nilaiTotal(arrGanjil));
console.log("rata-rata \t: " + nilaiMean(arrGanjil));
console.log("\n");
console.log("Array Genap :");
console.log(arrGenap);
console.log("panjang \t: " + arrGenap.length);
console.log("min \t\t: " + nilaiMin(arrGenap));
console.log("max \t\t: " + nilaiMax(arrGenap));
console.log("total \t\t: " + nilaiTotal(arrGenap));
console.log("rata-rata \t: " + nilaiMean(arrGenap));
console.log("\n");
console.log("Perbandingan : ");
perbandingan(arrGanjil, arrGenap);
