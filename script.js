
function Dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numblegs = 4;
    
}

let terrier = new Dog('Dave', 'DAVE', 'Brown');{
console.log(ownersName + "has a" + color + "dog named" + dogsName);


}


let retriever = new Dog('Sam', 'Peep', 'White'); {
    console.log(ownersName + "has a" + color + "dog named" + dogsName);
    
}

function() { return ownersName + "has a" + color + "dog named" + dogsName }