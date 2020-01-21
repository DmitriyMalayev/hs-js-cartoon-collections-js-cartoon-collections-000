function dwarfRollCall(dwarves){
  let newArray = []
  for(let i = dwarves.length/2; i<dwarves.length; i++){
  newArray.push(`${i + 1}. ${dwarves[i]} `)
  }
  return newArray.join("")
}


function summonCaptainPlanet(planeteerCalls){
  let superMan = []
  for(let i=0; i<planeteerCalls.length; i++){
    superMan.push((`${planeteerCalls[i]}!`).toUpperCase())
  } 
  return superMan 
}

function longPlaneteerCalls(words){
  for(let i = 0; i<words.length; i++){
    if (words[i].length > 4){
      return true
    } else {
      return false 
    }
  }
}

snacks.push("swiss")

function findTheCheese(cheese){
  for(let i = 0; i<cheese.length; i++){
    if(cheese[i] === "cheddar"){
        return "cheddar"
    } else if(cheese[i] === "gouda"){
        return "gouda"
    } else if(cheese[i] === "camembert"){
        return "camembert"
    } else if(cheese[i] === "swiss"){
        return "swiss"
    } 
  }
     return "no cheese!"   
}

newArray = ["Bob", "Mary", "Billy"]
newArray2 = []

function wordsWithB(newArray){
for(i=0; i<newArray.length; i++){
  if(newArray[i].firstLetter("B")){
    newArray2.push(newArray[i])
}   
}
  return newArray2 
}









/*
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
    return "camembert"
  } } 
return "no cheese!"
}





*/









