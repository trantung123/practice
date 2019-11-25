var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse('mickey');
var dog = new Dog();
// cat.eat(mouse);
try {
    cat.eat(dog);
} catch(error) {
    console.log('Error while cat eating a dog')
}

console.log(cat);
// var dog = new Dog('PLUTO');
// var tom = new Cat();

// dog.eat(tom);
// console.log(dog);