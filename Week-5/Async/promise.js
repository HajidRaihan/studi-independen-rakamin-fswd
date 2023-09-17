const tabungan = 70;

const belanja = new Promise((resolve, reject) => {
  if (tabungan > 50) {
    const myInterval = setInterval(() => {
      console.log("Sedang berbelanja");
    }, 1000);
    setTimeout(() => {
      resolve("selesai belanja");
      clearInterval(myInterval);
    }, 5000);
  } else {
    reject("tidak bisa belanja");
  }
});

belanja
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// handle callback hell
const playGame = (nama) => {
  return new Promise((resolve, reject) => {
    resolve("start game" + nama + "sekarang!");
  });
};

const namaGame1 = "dota";
const namaGame2 = "mobile legend";
const namaGame3 = "GTA";

Promise.all([playGame(namaGame1), playGame(namaGame2), playGame(namaGame3)]).then((result) => {
  for (let game of result) {
    console.log(game);
  }
});
