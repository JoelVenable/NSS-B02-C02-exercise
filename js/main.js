// const cupcake = {
//     color: ['pink','white','brown'],
//     flavor: "chocolate",
//     size: 'mini',
//     calories: 0,
//     icing: true,
//     eatCupcake : () => {
//       console.log("Yum");
//     } 
// }


class Cupcake {
  constructor(colors, flavor, size, calories, icing) {
    this.colors = colors;
    this.flavor = flavor;
    this.size = size;
    this.calories = calories;
    this.icing = icing;
  }

  eatCupcake() {
    console.log("Yum");
  }
}

var cupcake = new Cupcake(['pink', 'white', 'brown'], 'chocolate', 'mini', 0, true);

cupcake.colors.forEach(color => {
  console.log("what color am i", color);
  console.log('String concatenation is one way to show a' + color + 'today');
  console.log(`backticks with ${color} for the win! `);
})




console.log("cupcake", cupcake);


//  Array vs object to represent a red 2015 Ford Mustang

const car = [{
  color: 'red',
  modelYear: 2015,
  make: 'Ford',
  model: 'Mustang',
  engine: '5.0L V8'
}]


//  Array vs object:  List of animal names in a shelter

const shelterAnimals = [
  'Kippers',
  'Jack',
  'Gypsy',
  'Angus',
  'Seymour Bouts',
  'Sharky'
]

//  Define an object for four family members, each in an array

var familyMembers = [{
    firstName: 'Bobby',
    lastName: 'Smith',
    age: 39,
    title: 'Father'
  },
  {
    firstName: 'Susan',
    lastName: 'Smith',
    age: 33,
    title: 'Mother'
  },
  {
    firstName: 'Billy',
    lastName: 'Smith',
    age: 6,
    title: 'Older Brother'
  }, 
  {
    firstName: 'Carol',
    lastName: 'Smith',
    age: 3,
    title: 'Youngest Daughter'
  }
]

//  How about a class instead?

class Person {
  constructor(first,last,age,title) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.title = title;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}.`);
    console.log(`I'm ${this.age} years old and I'm the ${this.title}.`);
  }
}

var familyMembers2 = [
  new Person("Bobby","Smith",39,"Father"),
  new Person('Susan','Smith',33,'Mother'),
  new Person('Billy','Smith',6,'Older Brother'),
  new Person('Carol','Smith',3,'Younger Sister')
]
