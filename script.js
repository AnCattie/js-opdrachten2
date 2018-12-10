// Opdrachten 2 - Oefening 1 een functie schrijven
function surfaceRectagle() {
  let breedtes = prompt("Wat is de breedte?", 30);
  let lengtes = prompt("Wat is de lengte?", 20);
  alert("Het oppervlakte van uw rechthoek is" + " " + breedtes * lengtes)
}

function perimeterRectagle() {
  let breedtep = prompt("Wat is de breedte?", 100);
  let lengtep = prompt("Wat is de lengte?", 70);
  alert("De omtrek is: " + ((parseInt(breedtep) + parseInt(lengtep)) * 2));
}

// Opdrachten 2 - Oefening 2 het schrijven van een functie die en waarde terug geeft
function invoerstraal() {
  let straal = prompt("Gelieve een straal in te voeren", 4);
  alert("Het oppervlakte van de cirkel is " + straal * straal * Math.PI);
}

// Opdrachten 2 - Oefening 3 Het schrijven van een functie met parameters
let a = 3;
let b = 2;

function tripple(x) {
  return (x * 3);
}

function display() {
  alert(tripple(a));
  alert(tripple(b));
}
// Opdrachten 2 - Oefening 4 Gebruik van een arrey
let tab = [-2, 1, 4];

function add(x) {
  return (x + 2)
}

function displayy() {
  alert(tab[0]);
  alert(tab.length - 1);
}

// Opdrachten 2 - Oefening 5 wiskundige operatoren
function operatoren() {
  let b = 2;
  let a = 0;

  a = b++; a = ++b; a = b--; a = --b; a += b++; a = 1; a += ++b; a = 1; a -= b++; a = 1; a -= ++b; a = 1; a += b--; a = 1; a += --b;

  alert(operatoren);
}

// Opdrachten 2 - Oefening 6 Aanroepen van een functie di eeen waarde terugstuurt


// Opdrachten 2 - Oefening 7 Maak gebruik van switch


// Opdrachten 2 - Oefening 8 Gebruik maken van de switch en het datumobject


// Opdrachten 2 - Oefening 9 Gebruik maken van de while-lus


// Opdrachten 2 - Oefening 10 Gebruik maken van de for-lus


// Opdrachten 2 - Oefening 11 Maak gebruik van lussen


// Opdrachten 2 - Oefening 12 Celsius, Fahrenheit of Kelvin temperatuurconversie


// Opdrachten 2 - Oefening 13 Berekening van de BMI
