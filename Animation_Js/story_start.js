//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart ={"left":"900px"};
let lightningEnd ={"left":"290px"};
let option={"duration":1000};

let hitThevillain=() =>{

let villainstart ={
transform: 'rotate(0deg)',
opacity:100
}; 

let villainEnd ={
    transform: 'rotate(1000deg)',
    opacity:0
}; 
let option={"duration":1500};
villain.animate([villainstart,villainEnd],Option);
}
//Run animation code here
lightning.animate([lightningStart,lightningEnd],option);


