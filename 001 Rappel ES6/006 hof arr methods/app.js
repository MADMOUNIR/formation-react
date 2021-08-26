const arr = [1,2,3,4,5,6];

//---prends les element du tableau et applique une action sur chacu  d'eux
const mapedArr = arr.map(x => x + 10);
console.log(mapedArr);

//----filtre les element d'un tableau
const filteredArr = arr.filter(num => num > 2)
console.log(filteredArr);

//---parcoure un tableau
arr.forEach(val => {
    console.log(val - 90);
})