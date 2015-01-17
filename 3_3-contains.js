/*Проверить является ли один массив подмножеством второго
Дописать функцию contains(where, what). Если все элементы массива what содержатся в массиве where, функция должна возвращать true. 
Пустой массив является подмножеством любого массива. Порядок вхождения элементов в массив не имеет значения. Примеры:

contains([1,2,3], [3,2]); // true
contains([1,2,3], [3,2,1,2,3]); // true*/

function contains(where, what) {
	var array = [];
	for (var i = 0; i < what.length; i += 1) {
		if (where.indexOf(what[i]) >= 0) {
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

contains([1, 2, 3], [3, 2]); // true
contains([1,2,3], [3,2,1,2,3]); // true