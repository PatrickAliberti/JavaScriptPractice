// Ordinary function declarations
function add1(a, b) {   return a + b;   };

// Arrow function declarations, used especially as arguments of function calls
// const add2 = (a, b) => a + b;
const add2 = (a, b) => {  return a + b; };

document.getElementById("test").innerHTML = add2(1, 4);