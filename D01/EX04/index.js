function modulo(a, b) {
  //your code

  if (a > b) {
    console.log(`The number ${a} is bigger than ${b}`);
    if ((a % b) !== 0) {
      console.log(`The modulo of ${a} % ${b} is ${a%b}`);
    }
  } else if (a < b) {
    console.log(`The number ${a} is less than ${b}`);
  } else if (a > b) {
    console.log(`The number ${a} is bigger than ${b}`);
  } else {
    console.log(`The number ${a} is equal to ${b}`);
  }
}

// Do not remove or change this line, or the tests won't work
export {
  modulo
};