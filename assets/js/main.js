// main.js - slajder slika na početnoj stranici

const slajderSlike = [
  "assets/img/galerija/slika-1.jpg",
  "assets/img/galerija/slika-2.jpg",
  "assets/img/galerija/slika-3.jpg"
];

let trenutnaSlika = 0;

const slajderSlika = document.querySelector("#slajderSlika");
const dugmeSledeca = document.querySelector("#slajderSledeca");
const dugmePrethodna = document.querySelector("#slajderPrethodna");

if (slajderSlika && dugmeSledeca && dugmePrethodna) {

  dugmeSledeca.addEventListener("click", function () {
    trenutnaSlika = (trenutnaSlika + 1) % slajderSlike.length;
    slajderSlika.src = slajderSlike[trenutnaSlika];
  });

  dugmePrethodna.addEventListener("click", function () {
    trenutnaSlika = (trenutnaSlika - 1 + slajderSlike.length) % slajderSlike.length;
    slajderSlika.src = slajderSlike[trenutnaSlika];
  });

}
