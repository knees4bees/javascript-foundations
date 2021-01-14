class Ogre {
  constructor(creature) {
    this.name = creature.name;
    if (creature.abode) {
      this.home = creature.abode;
    } else {
      this.home = 'Swamp';
    }
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    human.noticesOgre();

    if (human.noticesOgre() === true) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
    this.swings++;

    if (this.swings > 0 && this.swings % 2 === 0) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
