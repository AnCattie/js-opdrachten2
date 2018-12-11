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
  a = b++;
    alert("a:"+a+"\nb:"+b);

  a=0;
  b=2;
  a = ++b;
    alert("a:"+a+"\nb:"+b);

  a=0;
  b=2;
  a = b--;
    alert("a:"+a+"\nb:"+b);
  
  a=0;
  b=2;
  a = --b;
    alert("a:"+a+"\nb:"+b);

  a=0;
  b=2;
  a += b++;
    alert("a:"+a+"\nb:"+b);

  a=1;
  b=2;
  a = 1; a += ++b;
    alert("a:"+a+"\nb:"+b);

  a=1;
  b=2;
  a = 1; a -= b++;
    alert("a:"+a+"\nb:"+b);
  
  a=1;
  b=2;
  a = 1; a -= ++b;
    alert("a:"+a+"\nb:"+b);
  
  a=1;
  b=2;
  a = 1; a += b--;
    alert("a:"+a+"\nb:"+b);

  a=1;
  b=2
  a = 1; a += --b;
    alert("a:"+a+"\nb:"+b);
}
// Opdrachten 2 - Oefening 6 Aanroepen van een functie di eeen waarde terugstuurt
let tabb = [-2, 1, 4];
function substract(x){
  return (x - tabb[0]);
  if (tabb >= 0){
  console.log("Getal positief");
  }
  else {
    console.log("Negatief getal")
  };
  
}
function displayyy(){
  alert(tab[0]);
  alert(tab.length - 1);
}
// Opdrachten 2 - Oefening 7 Maak gebruik van switch
function makeChoice(){
  let keuze = prompt("Geef 1,2 of 3 in:");
  switch (parseInt(keuze)){
  case 1:
    alert("1. Thank you");
  case 2:
    alert("2. Hello");
  case 3:
    alert("3. Goodbye");
  default:
    alert("Excuse me, what do you want?")
  }
}
// Opdrachten 2 - Oefening 8 Gebruik maken van de switch en het datumobject
function weekday(){
  switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  }
  alert(day);
}
// Opdrachten 2 - Oefening 9 Gebruik maken van de while-lus
function testWhile(){
  let string = "";
  let n = false;
while (!n){
  string=prompt("Geef een woord met de letter p in")
  n=string.includes("p");
}
alert(string);
}
// Opdrachten 2 - Oefening 10 Gebruik maken van de for-lus
let som=0;
function sum(){
  for (let i=0 ; i< 3; i++){
    getal = prompt("Geef een getal in:");
    som = parseInt(som) + parseInt(getal);
  }
alert(som);
}

// Opdrachten 2 - Oefening 11 Maak gebruik van lussen
let getallen= [];
let gem= 0;
let totaal = 0;
function calcAverage(){
  let getal = parseInt(prompt("Geef een geheel getal in:"));
  while (getal>=0){
    while (getal%1 !=0){
      alert("Geef een geheel getal in");
      getal = parseInt(prompt("getal:"));
    }
    getallen.push(getal);
    getal = parseInt(prompt("Geef een geheel getal in:"));
  }  
  alert("totaal aantal getallen:"+getallen.length);
  for (let i = 0; i< getallen.length; i++){
    totaal = totaal + getallen[i];
  }
  gem = totaal/getallen.length;
  alert("gemiddelde:" + gem);
}
// Opdrachten 2 - Oefening 12 Celsius, Fahrenheit of Kelvin temperatuurconversie
function TemperatureConversion(){
  let keuze = parseInt(prompt("Welke soort conversie wilt u?"));
  let temperatuur = parseInt(prompt("Wat is de temperatuur?"));
  let temp = 0;
  switch (keuze) {
    case 1:
    temp =(temperatuur*9/5) + 32;
      break;
    case 2:
    temp =(temperatuur + 273.15);
      break;
    case 3:
    temp =(temperatuur - 32) / (9/5);
      break;
    case 4:
    temp =(temperatuur - 32*(5/9)) + 273.15;
      break;
    case 5:
    temp =(temperatuur - 273.15);
      break;
    case 6:
    temp = (temperatuur * 9/5) - 459.67;
  }
  alert(temp);
}
// Opdrachten 2 - Oefening 13 Berekening van de BMI
function calcBMI(){
  let gewicht = prompt("Geef uw gewicht in in kg");
  let hoogte = prompt("Geef uw lengte in in m");
  let bmi = (gewicht/(hoogte*hoogte));
  bmi = bmi.toFixed(2);
  alert("u BMI is: "+bmi);
  
  if (bmi <16.5){
    alert("Ondervoeding of hongersnood")
  }
  else if (bmi >=16.5 && bmi <18.5){
  alert("dunheid")
  }
  else if (bmi >=18.5 && bmi <25){
    alert("normale bouw")
  }
  else if (bmi >=25 && bmi <30){
    alert("overgewicht")
  }
  else if (bmi >=30 && bmi <35){
    alert("matige overgewicht")
  }
  else if (bmi >=35 && bmi <40){
    alert("ernstige overgewicht")
  }
  else (bmi >40);{
    alert("morbide obesitas")
  }
}