let billTotal = document.getElementById('bill-total');
let result = document.getElementById('result');
let payText= document.getElementById('pay-text');
let submit = document.getElementById('submit');
let selectMenu = document.getElementById('select-menu');
let numPeople = document.getElementById('num-people');
let calculate = function (total, selected) {
  return billTotal.value * selectMenu.value;
};



submit.addEventListener('click', (e) => {
  e.preventDefault();
  let regExp = /(\d+\.*\d*)/g;
  if(Number(billTotal.value) == '' || Number(billTotal.value) === 0 || regExp.test(billTotal.value) == false) {
    alert('Please enter a valid number');
  } else {
    billTotal.value = billTotal.value.replace(/,/g, '');
    let calculatedTotal = parseFloat((billTotal.value * selectMenu.value) / numPeople.value).toFixed(2);

    payText.innerHTML = `Each person pays: $${calculatedTotal} in tip`;
  }

});
//if they don't enter an actual number
//alert if they don't fill out tip percentage or number of people
