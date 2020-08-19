/*

let Obj1 = {
    name: "Joe"
}

let Obj2 = {
    name: "Jime"
}

function getName {
    return this.name
}

console.log(getName.apply(Obj2))

*/

function test () {

    console.log(Object.getOwnPropertyNames(test))

}

function Dog (name, breed) {

    this.name = name
    this.breed = breed

}

let myDog = new Dog("Fido", "shitzu")

console.log(myDog)

Dog.prototype.sayName = function () {

    return this.name

}

console.log(myDog.sayName())

let jenJensDog = new Dog("dallas", "pitbull")

console.log(jenJensDog.sayName())

// Classes can inherit from constructor functions because they are the same as classes

class Mutt extends Dog {

    constructor(name, breed) {
        super(name, breed)
    }
}

let myMutt = new Mutt("Jeff", "cartoon")
console.log(myMutt.sayName())