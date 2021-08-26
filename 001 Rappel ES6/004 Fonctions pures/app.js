let x = 2;
//---fonction impure : elle dépends d'un environnement extérieur
const add1 = y => x += y;

///---Fonction pure : elle depends pas de l'environnement extérieur
const add2 = (a,b) => a + b;

console.log(add2(2,2))
console.log(add2(2,2))
console.log(add2(2,2))
console.log(add2(2,2))