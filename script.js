let persoon = {
    "Naam" : "Zara",
    "Score" : 36,
    "Begin datum" : "21 januari 2016",
    "Vrienden" : [
        "Mika",
        "Josef",
        "Maria",
        "Sumail",
        "Lotte"
    ],
    "Gekwalificeerd" : true
}
let JSONTest = JSON.stringify(persoon);
console.log(JSONTest);