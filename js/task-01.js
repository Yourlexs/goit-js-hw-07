const categoriesElements = document.querySelectorAll('.item');

const getAmountOfElements = function (elements) {
    console.log(`В списке ${elements.length} категории.`);
}
const getCategoryAndElements = function (elements) {
    elements.forEach(element => {
    const elementTitle = element.firstElementChild.textContent;
    const elementList = element.querySelectorAll('li');
    
    return console.log(`
        Категория: ${elementTitle}
        Количество элементов: ${elementList.length}
    `)
})
}

getAmountOfElements(categoriesElements);
getCategoryAndElements(categoriesElements);