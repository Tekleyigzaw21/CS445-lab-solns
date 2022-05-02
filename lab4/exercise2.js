class User {
  constructor(name) {
    this.name = name;
  }
}
class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.street = street;
    this.name = user.name;
    this.city = city;
  }
  logger() {
    console.log(
      "Decorated User:  " + this.name + ", " + this.street + ", " + this.city
    );
  }
}
const user = new User("Ana");
const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();
