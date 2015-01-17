/*Релизовать функцию execFunctions(arrOfFunctions), которая получает аргументом массив функций arrOfFunctions, и возвращает массив, 
где каждый элемент это результат вызова функции стоящей на индексе, что и элемент.

Пример работы:

function return10() {
  return 10;
}

function returnUser() {
  return {name: "Evgen"};
}

function empty() {}

execFunctions([return10, returnUser, empty]); // [10, {name: "Evgen"}, undefined]*/

/* 1 вариант
function execFunctions(arrOfFunctions) {
	var array = [];
	for (var i=0; i<arrOfFunctions.length; i+=1) {
		array.push(arrOfFunctions[i]());
	}
	return array;
}*/

//2 вариант
function execFunctions(arrOfFunctions) {
	var array = [];
	array = arrOfFunctions.map(function(result) {
		return result();
	});
	return array;
}