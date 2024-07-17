// 3 создаём функцию
const addOne = e => {
    // Получаем список заголовков, его первый элемент записываем его в переменную numberElement
    const numberElement = document.getElementsByTagName("h1")[0]

    // Прибавляем к текущему значению 1
    numberElement.textContent = Number(numberElement.textContent) + 1
}

// 1. Получаем список кнопок, его первый элемент записываем его в переменную btn
const btn = document.getElementsByTagName("button")[0]


// 2. В btn добавляем слушатель события "клик", который вызывает функцию addOne
btn.addEventListener("click", addOne)