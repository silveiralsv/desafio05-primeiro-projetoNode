const arr  = [
  {
    "title": "Transação de teste",
    "value": 1500,
    "type": "income"
  },
  {
    "title": "Transação de teste2",
    "value": 2000,
    "type": "income"
  },
  {
    "title": "Transação de teste2",
    "value": 3000,
    "type": "outcome"
  },
  {
    "title": "Transação de teste2",
    "value": 200,
    "type": "outcome"
  }
];


const income = arr.filter(element => element.type === 'income');
const outcome = arr.filter(element => element.type === 'outcome');


console.log("outcome", outcome)
console.log("income", income)

const incSum = income.reduce((currentValue, element) => currentValue + element.value, 0);
const outSum = outcome.reduce((currentValue, element) => currentValue + element.value, 0);


const testeBrunoLindo = arr.reduce((currentValue, element) => element.type === 'income' ? currentValue + element.value : currentValue - element.value, 0);
console.log("testeBrunoLindo", testeBrunoLindo)



console.log('resultado: ' +  (incSum -  outSum));
