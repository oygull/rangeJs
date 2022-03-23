let elInput = document.getElementById('firstInput');
let elInput2 = document.getElementById('seocndInput');
let elVolumeInput = document.getElementById('volumeInput');
let elRange =  document.getElementById('range');
let elRange2 =  document.getElementById('range2');
let elRange3 =  document.getElementById('range3');
let textarea = document.getElementById('textarea')
let value = elInput.getAttribute('max')
console.log(value);

elInput.addEventListener('keyup', getCharMin);
elInput2.addEventListener('keyup', getCharMin);
textarea.addEventListener('keyup', getCharMin);

function getCharMin(e){
  let value = e.target.max;
  let count = elInput.value.length;
  let count2 = elInput2.value.length;
  let count3 = textarea.value.length;
  let p = 100/value;
  elRange.style.width= `${count * p}%`
  elRange2.style.width= `${count2 * p}%`
  elRange3.style.width= `${count3 * p}%`
}

