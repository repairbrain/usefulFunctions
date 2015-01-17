/*Преобразовать одномерный массив в двумерный
Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив. Число показывает количество элементов
 в подмассивах, элементы подмассивов беруться из массива data. Оригинальный массив не должен быть изменен.

toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
toMatrix([1,2,3], 5); // [[1,2,3]]
toMatrix([], 3); // []
*/

function toMatrix(data, rowSize) {
	var newArr = [];
	for (var i = 0; i < data.length; i += rowSize) {
		newArr.push(data.slice(i, i + rowSize));
	}
	return newArr;
}

toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
//toMatrix([1, 2, 3], 1);   // [[1], [2], [3]]