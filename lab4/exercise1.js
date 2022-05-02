class RegularBulbs {
  constructor() {
    this.range = [50, 100];
    this.age = 1;
  }
}

class EnergySaver {
  constructor(color) {
    this.range = [5, 50];
    this.age = 10;
    this.color = color;
  }
}
class Factory {
  createBulb(type, color) {
    if (type === "regular") {
      return new RegularBulbs();
    } else if (type === "energy") {
      return new EnergySaver(color);
    }
    return null;
  }
}

const bulb = [];
const factory = new Factory();

bulb.push(factory.createBulb("regular"));
bulb.push(factory.createBulb("energy", "red"));

for (let i = 0, len = bulbs.length; i < len; i++) {
  console.log(bulb[i]);
}
