const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsList = document.querySelector('#ingredients');

const makeList = function (array) {
  const newList = array.map(element => {
    const ingridientEl = document.createElement('li');

    ingridientEl.textContent = element;
    
    return ingridientEl;
  })
  
  ingridientsList.append(...newList);
}

makeList(ingredients);