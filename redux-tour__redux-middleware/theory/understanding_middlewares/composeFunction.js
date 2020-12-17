// given:
// f(x) = x^2 + 3x + 1
// g(x) = 2x
// then:
// (f ∘ g)(x) = f(g(x)) = f(2x) = 4x^2 + 6x + 1 


var greet = function(x) { return `Hello, ${ x }` };
var emote = function(x) { return `${x} :)` };
var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}
var happyGreeting = compose(greet, emote);
console.log(happyGreeting("Mark"))
// happyGreeting(“Mark”) -> Hello, Mark :)

var multiplyB = function(B) { return B}
var multiplyA = function(A) { return A}

var composeValue = function(b){
    return function(A,B){
        return A(B(b));
    }
}

var resultFunction = composePower(2); //passed 2 to composeValue, returns value function
console.log(resultFunction(multiplyA,multiplyB)) //pass two functions as the returned value function is expecting

var curriedAdd = function(a) {
    return function(b) {
        return a + b;
    };
};
var addTen = curriedAdd(10);
console.log(addTen(20)); //20 //b=20, a = 10, result = 30
