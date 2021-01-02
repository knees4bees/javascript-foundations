class Centaur {
  constructor(person) {
    this.name = person.name;
    this.breed = person.type;
    this.cranky = false;
    this.standing = true;
    this.crankCount = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (this.crankCount >= 2 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    } else {
      this.crankCount++;
      return 'Twang!!!';
    }

  }

  run() {
    if (this.crankCount >= 2 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    } else {
      this.crankCount++;
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.crankCount = 0;
      return 'ZZZZ';
    } else {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;
