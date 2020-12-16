var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    var newStatue = new Statue(person.name);

    if (this.statues.length === 3) {
      var rePerson = new Person(this.statues.shift().name);
      rePerson.mood = 'relieved';
    }

    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    }

    return rePerson;
  }
}

module.exports = Medusa;
