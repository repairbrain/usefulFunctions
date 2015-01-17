/*Реализовать функцию every(arr, func), которая принимает аргументами массив arr и функцию func. Возвращает true, если функция func вернет
 для каждого элемента массива true. В функцию func нужно передавать аргументами элемет массива, индекс элемента массива и сам массив.

Пример как должен работать код:

// Проверка на то, что все элементы массива - строки
every(['mama', 'mila', 'ramu'], function (arrayItem) {
    return typeof arrayItem === 'string';
}); // true

// Проверка на то, что все элементы массива больше своих индексов
every([4, 8, 1], function (arrayItem, itemIndex) {
    return arrayItem > itemIndex
}); // false*/

function every(arr, func) {
	var array = [];
	for (var i = 0; i < arr.length; i += 1) {
		var funcResult = func(arr[i], i, arr);
		if (funcResult === true) {
			array.push(true);
		} else {
			array.push(false);
		}
	}
	if (array.indexOf(false) >= 0) {
		return false;
	} else {
		return true;
	}
}

every(['mama', 'mila', 'ramu', 1], function (arrayItem) {
    return typeof arrayItem === 'string';
}); 
every([4, 8, 1], function (arrayItem, itemIndex) {
    return arrayItem > itemIndex;
});