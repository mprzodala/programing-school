# programing-school
repository for programing school

##### definiowanie obiektu

```js
var mojObiekt = { // nazwe zmiennej sami wymyslamy tak samo jak nazwy funkcji. wpisanie var oznacza ze cos bedziemy definiowac czyli w tym przypadku obiekt
	toJestAtrybut: 'to jest wartosc atrybutu' //atrybut to nazwa zawartosci
};
```
##### definiowanie zmiennej

```js
var mojaZmiennaKtoraZawieraTekst = 'to jest moj tekst';

var mojaZmiennaKtoraZawieraLiczbe = 1234;
```
##### definiowanie funkcji

```js
function odejmowanie(liczbaA, liczbaB){
	var wynik = liczbaA - liczbaB; // w tym miejscu odejmujemy liczbe B od liczby A i przypisujemy ja do zmiennej o nazwie wynik

	return wynik; // tutaj nasza funkcja zwraca zawartosc zmiennej wynik w tym przypadku jest to liczba
}
```

##### używanie zdefinowaniej wczesniej funkcji

```js
var mojWynik = odejmowanie(10, 5); // W zmiennej wynik znajduje sie teraz liczba 5 jeżeli funkcja by nie miala return to w zmiennej mojWynik by nie bylo nic
```

##### wyświetlanie zawartośći w konsoli

```js
console.log(mojWynik); // wywołanie funkcji console.log() powoduje wyswietlenie zawartosci zmiennej moj wynik
```
