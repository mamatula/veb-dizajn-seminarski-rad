// validacija.js - provera kontakt forme pre slanja (samo na kontakt.html)
// Sajt je statičan (bez servera), pa se nakon uspešne provere samo prikazuje
// poruka o uspehu i forma se resetuje.

const forma = document.querySelector(".forma");

if (forma) {
  const poljeIme = document.querySelector("#ime");
  const poljeEmail = document.querySelector("#email");
  const poljePoruka = document.querySelector("#poruka");
  const porukaUspeh = document.querySelector("#uspehForma");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function prikaziGresku(polje, kljuc) {
    polje.classList.add("pogresno");
    const greska = polje.parentElement.querySelector(".greska");
    if (greska) {
      greska.textContent = recnik[podesavanja.jezik][kljuc];
    }
  }

  function ukloniGresku(polje) {
    polje.classList.remove("pogresno");
    const greska = polje.parentElement.querySelector(".greska");
    if (greska) {
      greska.textContent = "";
    }
  }

  forma.addEventListener("submit", function (e) {
    e.preventDefault();

    let ispravno = true;

    if (poljeIme.value.trim().length < 2) {
      prikaziGresku(poljeIme, "greska_ime");
      ispravno = false;
    } else {
      ukloniGresku(poljeIme);
    }

    if (!emailRegex.test(poljeEmail.value.trim())) {
      prikaziGresku(poljeEmail, "greska_email");
      ispravno = false;
    } else {
      ukloniGresku(poljeEmail);
    }

    if (poljePoruka.value.trim().length < 10) {
      prikaziGresku(poljePoruka, "greska_poruka");
      ispravno = false;
    } else {
      ukloniGresku(poljePoruka);
    }

    if (ispravno) {
      porukaUspeh.textContent = recnik[podesavanja.jezik]["poruka_uspeh"];
      porukaUspeh.classList.add("prikazano");
      forma.reset();
    } else {
      porukaUspeh.classList.remove("prikazano");
    }
  });
}
