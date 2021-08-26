
//---les fonction standard => this affiche l'objet appelant (myObj) , les fonction fléchés : this affiche l'objet englobant (window)
const myObj = {
    a: "5",
    foo: () => {
        console.log(this);
    }
}
myObj.foo();