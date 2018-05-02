var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames);

//wyfiltrować imiona zaczynającace sie na "K"

var kopiaAllNames = allNames.slice(0);

var namesStartedWithK = kopiaAllNames.filter(function (word) {
    return word[0].toUpperCase() === "K";
});

console.log('Imiona zaczynające się na K:' + namesStartedWithK);

//- imiona dłuższe niż 5 znakow

var kopia2AllNames = allNames.slice(0);

var namesLongerThan5Letters = kopia2AllNames.filter(function (name) {
    return name.length > 5;
});

console.log('Imiona dłuższe niż 5 znakow:' + namesLongerThan5Letters);

//- posortować je alfabetycznie

var kopia3AllNames = allNames.slice(0);

var createArrayAtoZ = kopia3AllNames.sort(function (name1, name2) {
    return name1 > name2;
});

console.log('Imiona alfabetycznie:' + createArrayAtoZ);
