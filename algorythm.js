const x = document.getElementById('1'),
      y = document.getElementById('2'),
      text = document.querySelector('.text'),
      btn = document.getElementsByClassName('button')[0];



function solve() {
  const a = parseFloat(x.value);
  const b = parseFloat(y.value);

  if (a !== 0 && b !== 0) {
    const result = 1 / (a * b);
    text.innerText = 'Значение функции Z: ' + result;
  } else {
    text.innerText = 'Делить на ноль нельзя!';
  }
}


btn.addEventListener('click',solve);
