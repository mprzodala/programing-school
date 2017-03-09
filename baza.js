var baza = {
	klienci: [],
	dodajKlienta: function(klient){
		if(klient){
			this.klienci.push(klient);
		}
	},
	wezElementListy: function(klient){
		return "<div>" + klient.imie + " " + klient.nazwisko + "</div>";
	},
	wyswietl: function(){
		var elementListy = document.getElementById('klienci');
		var listaKlientow = '';
		this.klienci.forEach(function(klient){
			listaKlientow += baza.wezElementListy(klient);
		});
		elementListy.innerHTML = listaKlientow;
	}
};
