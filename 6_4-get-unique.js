/*Сформировать список без повторений
Реализовать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив таких элементов,
которые входят в массив аргумента, и встречаются только раз в массиве результата. Аргумент не должен изменяться.
Порядок элементов результирующего массива должен совпадать с порядком, в котором они встречаются в оригинальной структуре.

var a = {};
var b = {};
var u = getUnique([a,b,b,a]);
console.log(u[0] === a); // true
console.log(u[1] === b); // true
console.log(u.length === 2); // true*/

//1 вариант
/*function getUnique(list) {
	var resultArray = [];
	for (var i=0; i<list.length; i+=1) {
		if (resultArray.indexOf(list[i]) < 0) {
			resultArray.push(list[i]);
		}
	}
	return resultArray;
}*/
// 2 вариант
function toArray(arrayLike) {
	return [].slice.call(arrayLike);
}

function getUnique(list) {
	list = toArray(list);
	return list.filter(function(elem, i, list) {
		return list.indexOf(elem) === i;
	}) || [];
}