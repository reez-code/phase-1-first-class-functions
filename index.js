function receivesAFunction(random) {
  random();
}
function callback() {
  console.log("random word");
}
console.log(receivesAFunction(callback));

function returnsANamedFunction() {
  return function random() {
    console.log("lol");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("xyz");
  };
}
