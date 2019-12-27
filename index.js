function dwarfRollCall(dwarves) {
  var array = []
  for(let i = 0; i <dwarves.length; i++){
  array.push(`${i + 1}. ${dwarves[i]} `)
  }
return array.join("")
  }
  
  
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]


function summonCaptainPlanet(planeteerCalls){
  var earthMan = [] 
  
  for(let i=0; i < planeteerCalls.length; i++){
    earthMan.push((`${planeteerCalls[i]}!`).toUpperCase())
  }
  return earthMan
}

var checkWords = []

function longPlaneteerCalls(calls){
  for(let i=0; i<calls.length; i++){
    if(calls[i].length > 4){
      return true
    } else {
      return false 
    }
  }
}



function findTheCheese(cheese){
for(let i=0; i<cheese.length; i++){
  if(cheese[i] === "cheddar"){
    return "cheddar" 
  } else if (cheese[i] === "gouda"){
    return "gouda" 
  } else if (cheese[i] === "camembert"){
    return "camembert"} 
}
return "no cheese!"
}


  



/*

let cities = ["Ankara", "Istambul", "Antalya", "Bursa", "Trabzon"];
let city = "Bursa";
let chars = 7;


let match1 = cities.find(item => {
 if (city === item) 
  return true  
})
 console.log(`item from cities that was, ${match1}`)
  
       
/*
  
}



function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
*/