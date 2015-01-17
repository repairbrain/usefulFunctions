/*Упростить массив
Реализовать функцию flatten(arr), которая принимает аргументом массив. Элементами массива могут быть как простые типы данных (числа, строки),
 так и массивы. Функция должна вернуть массив, состоящий из всех элементов вложенных массивов. Глубина вложенности массивов может быть любая.
  Примеры:

flatten([1, 2, 3, [1, 2, 3]]); // [1, 2, 3, 1, 2, 3]
flatten(['mama', ['mila'], [], [['ramu']]]); // ['mama', 'mila', 'ramu']*/

function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

function flatten(array) {
	var resultArray = [];
	for (var i = 0; i < array.length; i += 1) {
		if (isArray(array[i])) {
			resultArray = resultArray.concat(flatten(array[i]));
		} else {
			resultArray.push(array[i]);
		}
	}
	return resultArray;
}

//flatten([1, 2, 3, [1, 2, 3]]); // [1, 2, 3, 1, 2, 3]