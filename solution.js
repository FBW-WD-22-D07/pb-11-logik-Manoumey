//Deklariere zwei Variablen: isDogBetter mit dem Wert true und isCatBetter mit dem Wert false.


let isDogBetter = true;
let isCatBetter = false;

//1. Überprüfe das Ergebnis von:

//a) isDogBetter AND isCatBetter.

console.log(isDogBetter && isCatBetter);

//b) isDogBetter OR isCatBetter.
console.log(isDogBetter || isCatBetter);

//c) NOT (isDogBetter AND isCatBetter).
console.log(!(isDogBetter || isCatBetter));

//2.Deklariere drei weitere Variablen atoms, sandGrains und starsInSky. Gib diesen Variablen Zahlenwerte.

// Weise atoms den Wert 15 zu, sandGrains den Wert 10 und starsInSky den Wert 2.

let atoms = 15;
let sandGrains = 10;
let starsInSky = 2;

// 3 Prüfe ob:
//a) atoms größer ist als starsInSky UND atome größer ist als sandGrains.
console.log(atoms > starsInSky && atoms > sandGrains);

//b) atoms NICHT gleich sandGrains ist.
console.log(!(atoms == sandGrains));


//c) starsInSky kleiner als atoms ist ODER starsInSky größer als atoms ist.
console.log(starsInSky < atoms || starsInSky > atoms);

//d) atoms gleich starsInSky ist ODER atomsNICHT gleich sandGrains ist.
console.log((atoms == starsInSky) || !(atoms == sandGrains));

//e) atoms größer als oder gleich 10 ist UND sandGrains kleiner als oder gleich 10 ist.
console.log(atoms >= 10 && sandGrains <= 10);

//f) atoms multipliziert mit starsInSky kleiner als 100 ist ODER atome multipliziert mit sandGrains größer als 100 ist.
console.log((atoms*starsInSky) < 100 || (atoms*sandGrains) > 100);


