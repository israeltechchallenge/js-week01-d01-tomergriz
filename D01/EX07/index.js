function getRandomInt() {
  //your code
  return Math.floor(Math.random() * 100) + 1;
  
}

function moduloEx7(number, comparer) {
  //your code

  let str = "";
  if (number > comparer) {
    str = `The number ${number} is bigger than ${comparer}`;
    if ((number % comparer) !== 0) {
      str += `. But the modulo of ${number} % ${comparer} is ${number % comparer}`;
    }
  } else if (number < number) {
    str += `The number ${number} is less than ${comparer}`;
  } else {
    str += `The number ${number} is equal to ${comparer}`;
  }
  return(str);
}

const num1 = getRandomInt();
const num2 = getRandomInt();

document.getElementById('output').innerText = moduloEx7(num1,num2);


