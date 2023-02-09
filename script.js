// Description: Binary to Decimal Converter

// get the elements
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// verify if the number is less than 8 digits
const isMaxNumber = (bin) => {
  if (bin.length > 8) {
    return false;
  }
  return true;
}

// remove all invalid numbers
const removeInvalidNumber = (bin) => {
  return bin.replace(/[^0-1]/g, '');
}

// verify if the number is only 0 or 1
const isOnlyZeroOrOne = (bin) => {
  if (bin.match(/[^0-1]/g)) {
    return false;
  }
  return true;
}

// converting binary to decimal
const bin2Dec = (bin) => {
  let dec = 0;
  for (let i = 0; i < bin.length; i++) {
    dec += bin[i] * Math.pow(2, bin.length - i - 1);
  }
  return dec;
}

// add event listener
btn.addEventListener('click', () => {
  let bin = document.getElementById('bin').value;
  bin = removeInvalidNumber(bin);
  if (isMaxNumber(bin) && isOnlyZeroOrOne(bin)) {
    result.innerHTML = bin2Dec(bin);
  } else {
    result.innerHTML = 'Invalid binary number';
  }
});
