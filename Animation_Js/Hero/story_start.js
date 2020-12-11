//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart ={"left":"290px"};
let lightningEnd ={"left":"900px"};
let option={"duration":1000};
//Run animation code here
lightning.animate([lightningStart,lightningEnd],option);
