// console.log("step1");

// setTimeout(() => {
//   console.log("step3");
// }, 5000);

// console.log("step2");

// callback

const notify = () => {
  console.log("game selesai");
};
// const playGame = (nama, callback) => {
//   console.log(`mulai game ${nama}`);
//   callback();
// };

const namaGame = "valorant";
playGame(namaGame, notify);

// nested callback
const namaGame1 = "dota";
const namaGame2 = "mobile legend";
const namaGame3 = "GTA";

playGame(namaGame1, function () {
  playGame(namaGame2, function () {
    playGame(namaGame3, function () {
      console.log("udahan mainnya");
    });
  });
});
