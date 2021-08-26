//-------------- Scope : var est function scop let et portion scope

// function foo(){

//     if(true){
//         const x = 5;
//     }
//     console.log(x);

// }

// foo();


// Redeclaration

// var x = 5;
// const x = 10;

// console.log(x);


//-------------- Hoisting : utilisation des fonction avant leur définition


// foo();
// function foo(){
//     console.log("hello");
// }

//--------------Avec les variables ça donne undifined au lieu d'une erreur avec let
// let x = 10;
// console.log(x);


//-------------- Global : la variable déclaré par var est stocket dans l'objet windows

// let maVarX = 10;
// console.log(window);


//--------------  Différence basique : on peut redéfinir l'interieur d"un object declaré avec const

// const x = {a: 5};
// x.a = 10;

// console.log(x);
