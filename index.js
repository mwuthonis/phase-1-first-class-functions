function receivesAFunction(callback) {
    callback();//calls the callback function
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I am a named function!");
    };
}

function returnsAnAnonymousFunction() {
    return () => {
      console.log("I am an anonymous function!");
    };
  }