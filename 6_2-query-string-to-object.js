/*Преобразовать строку запроса (query string) в объект
Реализуй функцию queryStringToObject(queryString), которая возвращает объект. Распознавать следующие типы данных: числа, строки, булевы.
Помни, что некоторые символы query string могут быть закодированы.

Пример работы:

queryStringToObject("user=true"); // {user: true}
queryStringToObject("user=true&age=29"); // {user: true, age: 29}
queryStringToObject("user=true&age=29&name=Evgen"); // {user: true, age: 29, name: "Evgen"}*/

function queryStringToObject(queryString) {
	var object = {};
	if (queryString === "") {
		return object;
	} else {
    var arrayOnQueryString = queryString.split('&');
		var intermediateArray = [];
		for (var i = 0; i < arrayOnQueryString.length; i += 1) {
			intermediateArray = arrayOnQueryString[i].split('=');
			if (intermediateArray[1] === "true") {
				intermediateArray[1] = true;
			} else if (intermediateArray[1] === "false") {
				intermediateArray[1] = false;	
			} else if (!isNaN(parseInt(intermediateArray[1], 10))) {
				intermediateArray[1] = parseInt(intermediateArray[1], 10);
			} else {
				intermediateArray[1] = decodeURIComponent(intermediateArray[1]);
			}
			object[intermediateArray[0]] = intermediateArray[1];
		}
		return object;
	}
}  