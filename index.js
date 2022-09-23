function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "Menang" : "Kalah";
  if (player == "orang") return comp == "gajah" ? "Kalah" : "Menang";
  if (player == "semut") return comp == "orang" ? "Kalah" : "Menang";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");

    if (i == gambar.length) i = 0;
  }, 100);
}

const pilhanImage = document.querySelectorAll("li img");
let menang = 1;
let kalah = 1;
pilhanImage.forEach((i) => {
  i.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(() => {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const skorComp = document.querySelector(".info-comp");
      const skorPlayer = document.querySelector(".info-player");
      if (hasil == "Kalah") skorComp.innerHTML = kalah++;
      if (hasil == "Menang") skorPlayer.innerHTML = menang++;

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});