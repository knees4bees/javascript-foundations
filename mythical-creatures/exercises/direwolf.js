class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home) {
      this.home = home;
    } else {
      this.home = 'Beyond the Wall';
    }
    if (size) {
      this.size = size;
    } else {
      this.size = 'Massive';
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(person) {
    if (this.home === person.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(person);
      person.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(person) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (person.name === this.starksToProtect[i].name) {
        this.starksToProtect.splice(i, 1);
      }
    }

    person.safe = false;
  }
}

module.exports = Direwolf;
