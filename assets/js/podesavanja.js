// podesavanja.js - jezik (SR/EN), veličina slova i tema (svetla/tamna)
// Sve se pamti u localStorage, pod jednim ključem "stayfit-podesavanja".

const recnik = {
  sr: {
    nav_pocetna: "Početna",
    nav_onama: "O nama",
    nav_usluge: "Usluge",
    nav_cenovnik: "Cenovnik",
    nav_casovi: "Grupni časovi",
    nav_kontakt: "Kontakt",
    footer_kreirao: "Kreirao Pavle Stanulov SI 41/23 | Sva prava zadržana",

    baner_naslov: "Trening koji te pokreće napred",
    baner_tekst: "StayFit je teretana u Novom Bečeju - oprema za sve nivoe, iskusni treneri i ekipa koja te motiviše da dođeš i sledeći put.",
    baner_dugme: "Zakaži besplatan trening",
    info1_naslov: "Zašto trenirati kod nas?",
    info1_tekst: "Sala sa slobodnim tegovima, kardio zonom i prostorom za grupne časove. Bez obzira da li tek počinješ ili treniraš godinama, kod nas ćeš naći program koji ti odgovara.",
    info1_dugme: "Pročitajte više",
    info2_naslov: "Zajednica koja te motiviše",
    info2_tekst: "Grupni časovi, iskusni treneri i članovi koji te bodre. Prvi trening je besplatan - dođi da vidiš salu i upoznaš ekipu.",
    info2_dugme: "Pogledaj usluge",

    onama_naslov: "O <span class=\"isticanje\">nama</span>",
    prica_naslov: "Naša priča",
    prica_tekst: "StayFit je otvoren 2018. godine u Novom Bečeju, u prostoru od svega 120 m². Danas imamo modernu salu sa slobodnim tegovima, kardio zonom i prostorom za grupne časove - ali osnovna ideja je ostala ista: trening dostupan svima.",
    prica_dugme: "Zakaži obilazak",
    video_naslov: "Video <span class=\"isticanje\">obilazak</span>",
    tim_naslov: "Upoznajte <span class=\"isticanje\">tim</span>",
    clan1_uloga: "Trener snage",
    clan2_uloga: "Instruktorka grupnih časova",
    clan3_uloga: "Kondicioni trener",

    kontakt_naslov: "Stupi u <span class=\"isticanje\">kontakt</span>",
    forma_ime: "Ime i prezime",
    forma_ime_placeholder: "Npr. Ana Anić",
    forma_email: "E-mail adresa",
    forma_poruka: "Poruka",
    forma_poruka_placeholder: "Napišite nam kako možemo da pomognemo...",
    forma_dugme: "Pošalji poruku",
    info_adresa: "<strong>Adresa:</strong> Novi Bečej, Srbija",
    info_radno: "<strong>Radno vreme:</strong> Pon-Pet 07-22h, Subota 09-20h, Nedelja 09-14h",
    info_telefon: "<strong>Telefon:</strong> <a href=\"tel:+381600000000\">+381 60 000 0000</a>",
    info_email: "<strong>E-mail:</strong> <a href=\"mailto:info@stayfit-primer.rs\">info@stayfit-primer.rs</a>",
    preuzmi_pdf: "Preuzmi mapu lokacije (PDF)",
    greska_ime: "Unesite ime i prezime.",
    greska_email: "Unesite ispravnu e-mail adresu.",
    greska_poruka: "Poruka mora imati bar 10 karaktera.",
    poruka_uspeh: "Hvala! Vaša poruka je uspešno poslata.",

    usluge_naslov: "Naše usluge",
    usluge_podnaslov: "Bez ugovorne obaveze na duži rok - jasne cene za sve nivoe.",
    stavka_standard: "Standard",
    stavka_vikend: "Vikend",
    stavka_dnevno: "Dnevno",
    stavka_studentska: "Studentska članarina",
    casovi_naslov: "Raspored grupnih časova",
    tabela_termin: "Termin",
    tabela_ponedeljak: "Ponedeljak",
    tabela_sreda: "Sreda",
    tabela_petak: "Petak",
    tabela_joga: "Joga",
    primer_casa_naslov: "Primer časa",
    cta_naslov: "Spreman/na da probaš?",
    cta_tekst: "Zakaži besplatan probni trening još danas.",
    cta_dugme: "Kontaktiraj nas"
  },
  en: {
    nav_pocetna: "Home",
    nav_onama: "About",
    nav_usluge: "Services",
    nav_cenovnik: "Price list",
    nav_casovi: "Group classes",
    nav_kontakt: "Contact",
    footer_kreirao: "Created by Pavle Stanulov SI 41/23 | All rights reserved",

    baner_naslov: "Training that moves you forward",
    baner_tekst: "StayFit is a gym in Novi Bečej - equipment for all levels, experienced trainers and a team that motivates you to come back next time.",
    baner_dugme: "Book a free training",
    info1_naslov: "Why train with us?",
    info1_tekst: "A gym with free weights, a cardio zone and space for group classes. Whether you're just starting out or have been training for years, you'll find a program that suits you.",
    info1_dugme: "Read more",
    info2_naslov: "A community that motivates you",
    info2_tekst: "Group classes, experienced trainers and members who cheer you on. Your first training session is free - come see the gym and meet the team.",
    info2_dugme: "View services",

    onama_naslov: "About <span class=\"isticanje\">us</span>",
    prica_naslov: "Our story",
    prica_tekst: "StayFit opened in 2018 in Novi Bečej, in a space of just 120 m². Today we have a modern gym with free weights, a cardio zone and space for group classes - but the core idea has stayed the same: training accessible to everyone.",
    prica_dugme: "Book a tour",
    video_naslov: "Video <span class=\"isticanje\">tour</span>",
    tim_naslov: "Meet the <span class=\"isticanje\">team</span>",
    clan1_uloga: "Strength coach",
    clan2_uloga: "Group class instructor",
    clan3_uloga: "Conditioning coach",

    kontakt_naslov: "Get in <span class=\"isticanje\">touch</span>",
    forma_ime: "Full name",
    forma_ime_placeholder: "E.g. Ana Anić",
    forma_email: "E-mail address",
    forma_poruka: "Message",
    forma_poruka_placeholder: "Write to us about how we can help...",
    forma_dugme: "Send message",
    info_adresa: "<strong>Address:</strong> Novi Bečej, Serbia",
    info_radno: "<strong>Opening hours:</strong> Mon-Fri 07-22h, Saturday 09-20h, Sunday 09-14h",
    info_telefon: "<strong>Phone:</strong> <a href=\"tel:+381600000000\">+381 60 000 0000</a>",
    info_email: "<strong>E-mail:</strong> <a href=\"mailto:info@stayfit-primer.rs\">info@stayfit-primer.rs</a>",
    preuzmi_pdf: "Download location map (PDF)",
    greska_ime: "Please enter your full name.",
    greska_email: "Please enter a valid e-mail address.",
    greska_poruka: "Message must be at least 10 characters.",
    poruka_uspeh: "Thank you! Your message has been sent.",

    usluge_naslov: "Our services",
    usluge_podnaslov: "No long-term contract - clear prices for every level.",
    stavka_standard: "Standard",
    stavka_vikend: "Weekend",
    stavka_dnevno: "Daily",
    stavka_studentska: "Student membership",
    casovi_naslov: "Group class schedule",
    tabela_termin: "Time",
    tabela_ponedeljak: "Monday",
    tabela_sreda: "Wednesday",
    tabela_petak: "Friday",
    tabela_joga: "Yoga",
    primer_casa_naslov: "Sample workout",
    cta_naslov: "Ready to try?",
    cta_tekst: "Book a free trial training session today.",
    cta_dugme: "Contact us"
  }
};

function ucitajPodesavanja() {
  let sacuvano = {};
  try {
    sacuvano = JSON.parse(localStorage.getItem("stayfit-podesavanja")) || {};
  } catch (e) {
    sacuvano = {};
  }
  return {
    tema: sacuvano.tema || "dark",
    slova: sacuvano.slova || "srednje",
    jezik: sacuvano.jezik || "sr"
  };
}

function sacuvajPodesavanja(podesavanja) {
  try {
    localStorage.setItem("stayfit-podesavanja", JSON.stringify(podesavanja));
  } catch (e) {
    // localStorage nije dostupan - ništa se ne dešava, podešavanja rade samo do osvežavanja
  }
}

let podesavanja = ucitajPodesavanja();

function primeniTemu() {
  document.documentElement.setAttribute("data-tema", podesavanja.tema);
  document.documentElement.setAttribute("data-bs-theme", podesavanja.tema);
}

function primeniVelicinuSlova() {
  const velicine = { malo: "87.5%", srednje: "100%", veliko: "112.5%" };
  document.documentElement.style.fontSize = velicine[podesavanja.slova];

  document.querySelectorAll("[data-velicina]").forEach(function (dugme) {
    const aktivan = dugme.dataset.velicina === podesavanja.slova;
    dugme.classList.toggle("dugme-slovo-aktivan", aktivan);
    dugme.classList.toggle("active", aktivan);
  });
}

function primeniJezik() {
  document.documentElement.lang = podesavanja.jezik;

  document.querySelectorAll("[data-prevod]").forEach(function (el) {
    const kljuc = el.dataset.prevod;
    if (recnik[podesavanja.jezik][kljuc]) {
      el.innerHTML = recnik[podesavanja.jezik][kljuc];
    }
  });

  document.querySelectorAll("[data-prevod-placeholder]").forEach(function (el) {
    const kljuc = el.dataset.prevodPlaceholder;
    if (recnik[podesavanja.jezik][kljuc]) {
      el.placeholder = recnik[podesavanja.jezik][kljuc];
    }
  });

  const dugmeJezik = document.querySelector("#dugmeJezik");
  if (dugmeJezik) {
    dugmeJezik.textContent = podesavanja.jezik === "sr" ? "EN" : "SR";
  }
}

primeniTemu();
primeniVelicinuSlova();
primeniJezik();

const dugmeTema = document.querySelector("#dugmeTema");
if (dugmeTema) {
  dugmeTema.addEventListener("click", function () {
    podesavanja.tema = podesavanja.tema === "dark" ? "light" : "dark";
    primeniTemu();
    sacuvajPodesavanja(podesavanja);
  });
}

document.querySelectorAll("[data-velicina]").forEach(function (dugme) {
  dugme.addEventListener("click", function () {
    podesavanja.slova = dugme.dataset.velicina;
    primeniVelicinuSlova();
    sacuvajPodesavanja(podesavanja);
  });
});

const dugmeJezikStart = document.querySelector("#dugmeJezik");
if (dugmeJezikStart) {
  dugmeJezikStart.addEventListener("click", function () {
    podesavanja.jezik = podesavanja.jezik === "sr" ? "en" : "sr";
    primeniJezik();
    sacuvajPodesavanja(podesavanja);
  });
}
