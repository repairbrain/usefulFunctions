/*Реализуй функцию sum(), которая суммирует все передаваемые ей аргументы. В аргументах могут быть любые данные. Пример работы:

sum(10, 20); // 30*/

function sum() {
	var array = [];
	var summOfNumbers = 0;
	for (var i = 0; i < arguments.length; i += 1) {
		array.push(arguments[i]);
	}
	for (var j=0; j<array.length; j += 1) {
		if (typeof(array[j]) === "string") {
			var arrayToString = array.join('');
			return arrayToString;
		}
		else {
			summOfNumbers += array[j];
		} 
	}
	return summOfNumbers;
}
sum('mama', 'mila');
sum(10, 20);