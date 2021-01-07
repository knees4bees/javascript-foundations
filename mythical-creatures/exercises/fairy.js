class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(array) {
    this.clothes.dresses = this.clothes.dresses.concat(array);
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(baby) {
    if (this.disposition === 'Vengeful') {
      baby.disposition = 'Malicious';
      this.humanWards.push(baby);
    }

    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
    
    return baby;
  }
}

module.exports = Fairy;
