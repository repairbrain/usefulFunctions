/*Реализовать функцию isInArray , проверяющую вхождение элементов в массив. Первый аргумент функции - массив, последующие - элементы, 
вхождение в массив которых проверяется. Функция возвращает true, если все аргументы, кроме первого являются элементами массива.

Пример работы:

isInArray([1], 1); // true
isInArray([1], 1, 2); // false
isInArray([1, 2], 1, 2); // true*/

function isInArray(arr) {
	var array = [];
	for (var i = 1; i < arguments.length; i += 1) {
		if (arguments[0].indexOf(arguments[i]) >= 0) {
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

isInArray([1], 1); // true
isInArray([1], 1, 2); // false
isInArray([1, 2], 1, 2); // true*/