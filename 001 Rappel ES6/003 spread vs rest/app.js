const arr = [1,2,3];
console.log(arr);
//---spread operator
console.log(...arr);
//---spread operator utilisé pour copier le contenu du tableau 1 vers le tableau 2 et rajouter 4
const arr2 = [...arr, 4]

//----ça marche aussi avec les propriété d'un objet !
const myObj = {
    a: 1,
    b: 2,
    c: 3
}
const myObj2 = {
    ...myObj,
    d: 4
}

console.log(myObj2);
//---définition dynamique des argument d'une fonction (rest operator)

function add(...args){

    console.log(args);

    let result = 0;

    for(const arg of args){
        result += arg;
    }

    return result;
    
}
console.log(add(2,2,20,50,900));