const hewan = document.querySelectorAll("li");
const listHewan = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", function () {
  const binatang = document.createElement("li");
  binatang.textContent = input.value;
  listHewan.appendChild(binatang);
  input.value = "";
});

for (let i = 0; i < hewan.length; i++) {
  hewan[i].style.color = "red";
  hewan[i].style.cursor = "pointer";
}
input.addEventListener("change", function () {
  const binatang = document.createElement("li");
  binatang.textContent = input.value;
  listHewan.appendChild(binatang);
  input.value = "";
});
