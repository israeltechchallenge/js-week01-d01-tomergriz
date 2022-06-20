function moduloEx5(a, b) {
  //your code
  let str = "";
  if (a > b) {
    str = `The number ${a} is bigger than ${b}`;
    if ((a % b) !== 0) {
      str += `. But the modulo of ${a} % ${b} is ${a%b}`;
    }
  } else if (a < b) {
    str += `The number ${a} is less than ${b}`;
  } else {
    str += `The number ${a} is equal to ${b}`;
  }
  console.log(str);
}

// Do not remove or change this line, or the tests won't work
export {
  moduloEx5
};