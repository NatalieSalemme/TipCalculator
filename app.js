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
  if(Number(billTotal.value) == '') {
    alert('Please enter a valid number');
  } else {
    let calculatedTotal = parseFloat((billTotal.value * selectMenu.value) / numPeople.value).toFixed(2);

    payText.innerHTML = `Each person pays: $${calculatedTotal} in tip`;
  }

});
