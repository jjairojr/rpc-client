const axios = require('axios');

var prompt = require('prompt-sync')();
let ipAddress = "";
async function getValue(a, b, operator) {
  const response = await axios.post(`http://172.31.41.9:3333`, {a, b, operator});
  console.log(response.data);
}

function start() {
  ipAddress = prompt('Primeiramente indique o IP do servidor? ');
  const a = prompt('Primeiro valor? ');
  const b = prompt('Segundo valor? ');
  const operator = prompt('Operador (+, -, * ou /)? ');
  getValue(parseInt(a), parseInt(b), operator);
}

start();
