/*Создать объект из массивов данных
Реализовать функцию createObject(arrOfKeys, arrOfData), которая принимает аргументами два массива, и возвращает объект, 
в котором названия ключей это строки из массива arrOfKeys, а значения - элементы из массива arrOfData. 
В ключ, стоящий на первом месте массива arrOfKeys должно быть записано значение, стоящее на первом месте arrOfData. 
Если данных меньше, чем ключей, заполняй значения ключей как undefined. Пример работы:

createObject(['foo'], ['bar']); // {foo: 'bar'}
createObject(['foo', 'extra'], ['bar']); // {foo: 'bar', extra: undefined}*/

/* Вариант 1
function createObject(arrOfKeys, arrOfData) {
	var finalObject = {};
	for (var i = 0; i < arrOfKeys.length; i += 1) {
		finalObject[arrOfKeys[i]] = arrOfData[i];
	}
	return finalObject;
}*/

// Вариант 2 
function createObject(arrOfKeys, arrOfData) {
	return arrOfKeys.reduce(function (result, key, keyIndex) {
		result[key] = arrOfData[keyIndex];
		return result;
	}, {});
}