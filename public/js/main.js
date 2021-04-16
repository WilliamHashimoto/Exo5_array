//Exo 1
let x = "variable";
let tabExo = ["hello world", x, 3, 7, true];
console.log(tabExo);

//Exo2
console.log(tabExo.length);

//Exo3
tabExo.pop();
console.log(tabExo);

//Exo4
tabExo.shift();
console.log(tabExo);

//Exo5
tabExo.splice(tabExo.length, 0, "sushi", "fin");
console.log(tabExo);

//Exo6
tabExo.unshift("hello", "one", "two");
console.log(tabExo);

//Exo7
tabExo.reverse();
console.log(tabExo);

//Exo8
let luggage = [];
luggage.push("elem1");
luggage.push("elem2");
alert(luggage);
luggage.unshift("elem3");
alert(luggage);
luggage.push("elem4", "elem5", "elem6");
alert(luggage);
luggage.splice(0, 3);
console.log(luggage);
luggage.push("elem7");
alert(luggage.length);
luggage.splice(0, 2);
console.log(luggage);
luggage.splice(0,2);
alert(luggage.length);