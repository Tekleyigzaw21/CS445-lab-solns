class Subject {
  constructor() {
    this.observers = {};
  }
  on(event, fn) {
    if (this.observers[event]) {
      this.observers[event].push(fn);
    } else {
      this.observers[event] = [fn];
    }
  }
  emit(event, message) {
    if (this.observers[event]) {
      this.observers[event].forEach((fn) => fn(message));
    }
  }
}
const subject = new Subject();
subject.on("eat", console.log); // register an observer
subject.on("study", console.log); // register an observer
//
function foo(msg) {
  console.log("foo: " + msg);
}
subject.on("eat", foo);
subject.on("study", foo);
//
subject.emit("eat", "Corn");
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit("study", "cs445");
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
//
class Subject1 {
  observers = [];
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((ob) => ob != observer);
  }
  next(msg) {
    this.observers.forEach((ob) => {
      ob.next(msg);
    });
  }
}
const subject1 = new Subject1();
let observer1 = {
  next: (msg) => console.log("Observer A " + msg),
};
subject1.subscribe(observer1);
let observer2 = {
  next: (msg) => console.log("Observer B " + msg),
};
subject1.subscribe(observer2);
subject1.next("Hello");
subject1.next("Hi");
subject1.unsubscribe(observer2);
subject1.next("ya");
