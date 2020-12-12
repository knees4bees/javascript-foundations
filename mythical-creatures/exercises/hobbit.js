class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday() {
    this.age++;

    if (this.age >= 33) {
      this.adult = true;
    }

    if (this.age >= 101) {
      this.old = true;
    }
  }

  getRing() {
    var message = '';

    if (this.name === 'Frodo') {
      this.hasRing = true;
      message = 'Here is the ring!';
    } else {
      this.hasRing = false;
      message = 'You can\'t have it!';
    }

    return message;
  }
}



module.exports = Hobbit;
