var Direwolf = require('./direwolf');

class Stark {
  constructor(person) {
    if (person && person.name) {
      this.name = person.name;
    }
    if (person && person.area) {
      this.location = person.area;
    } else {
      this.location = 'Winterfell';
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }

  callDirewolf(name) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this);

    return direwolf;
  }
}

module.exports = Stark;
