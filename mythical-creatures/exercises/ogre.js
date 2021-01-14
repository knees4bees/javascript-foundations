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
  }

  swingAt(human) {
    this.swings++;
  }
}

module.exports = Ogre;
