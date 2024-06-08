const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const heightValue = document.querySelector('#height').value;
  const weightValue = document.querySelector('#weight').value;
  const results = document.querySelector('#results');

  if (heightValue === '' || heightValue < 0 || isNaN(parseInt(heightValue))) {
    results.innerHTML = `Please give a valid height ${heightValue}`;
  } else if (
    weightValue === '' ||
    weightValue < 0 ||
    isNaN(parseInt(weightValue))
  ) {
    results.innerHTML = `Please give a valid weight ${weightValue}`;
  } else {
    const height = parseInt(heightValue);
    const weight = parseInt(weightValue);
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
