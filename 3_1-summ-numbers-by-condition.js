/*Просуммировать числа из массива, которые больше 100
Реализовать функцию sumOnly100Plus, которая принимает аргументом массив, и возвращает сумму всех чисел массива, которые больше 100. 
В массиве могут быть не только числовые данные, их никак не учитывать. Пример работы:

sumOnly100Plus([150, "200", " ", 30, 300]); // 450*/

/* Вариант 1
function sumOnly100Plus(arr) {
	var ResultArray = [];
	var summOfNumbersInArray = 0;
	for (var i = 0; i < arr.length; i += 1) {
		if (arr[i] > 100 && typeof arr[i] === "number") {
			ResultArray.push(arr[i]);
		}
	}
	for (var j = 0; j < ResultArray.length; j += 1) {
		summOfNumbersInArray += ResultArray[j];
	}
	return summOfNumbersInArray;
}*/

//Вариант 2

function sumOnly100Plus(arr) {
	return arr.reduce(function (res, value) {
		if (typeof value === 'number' && value > 100) {
			res += value;
		}
		return res;
	}, 0);
}