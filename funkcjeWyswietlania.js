var wyswietlanie = {
  zastapZawartoscElementu: function (idElementu, zawartosc) {
    var element = document.getElementById(idElementu);
    element.innerHTML = zawartosc;
  },
  dodajZawartoscDoElementu: function (idElementu, zawartosc) {
    var element = document.getElementById(idElementu);
    element.innerHTML += zawartosc;
  }
};
