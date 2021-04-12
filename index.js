const axios = require('axios');

var prompt = require('prompt-sync')();

async function getValue(a, b, operator) {
  const response = await axios.post('http://localhost:3333/', {a, b, operator});
  console.log(response.data);
}

function start() {
  const a = prompt('Primeiro valor? ');
  const b = prompt('Segundo valor? ');
  const operator = prompt('Operador (+, -, * ou /)? ');
  getValue(parseInt(a), parseInt(b), operator);
}

start();
