/*Отфильтровать элементы массива с нечетным индексом
Реализовать функцию extractOddItems(arr), которая возвращает новый массив, в котором содержатся только те элементы, которые обладали нечетным индексом в массиве, переданном в качестве аргумента. Пример работы:

extractOddItems([0,1,0,1,0,1]); // [1,1,1]
extractOddItems([1,2,3,4,5]); [2, 4]*/

// 1 вариант
/*function extractOddItems(arr) {
	var ResultArray = [];
	for (var i = 0; i < arr.length; i += 1) {
		if (i % 2 !== 0)
			ResultArray.push(arr[i]);
	}
	return ResultArray;
}*/
// 2 вариант
function oddItems(element, i) {
	return i % 2 !==0;
}

function extractOddItems(arr) {
	return arr.filter(oddItems);
}