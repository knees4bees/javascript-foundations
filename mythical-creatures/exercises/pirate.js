class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job === undefined) {
      this.job = 'scallywag';
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.booty = 0;
    this.timesRobbed = 0;
  }

  robShip() {
    var message = '';

    if (this.booty >= 500) {
      this.cursed = true;
      message = 'ARG! I\'ve been cursed!';
    } else {
      this.booty += 100;
      message = 'YAARRR!';
    }

    return message;
  }

  liftCurse() {
    if (this.cursed) {
      this.booty -= 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    } else {
      return 'You don\'t need to lift a curse!';
    }
  }
}

module.exports = Pirate;
