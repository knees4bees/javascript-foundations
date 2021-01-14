class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    var message = '';

    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i);

        if (this.riddles.length === 0) {
          message = 'How did you know??';
        } else {
          message = 'That wasn\'t that hard, I bet you don\'t get the next one';
        }

        return message;
      }
    }

    this.heroesEaten++;
  }
}

module.exports = Sphinx;
