/*Реализовать простейший templater
Описать функцию templater(templateString, dataObj). Функция, принимает аргументом строку и объект. Заменяет все вхождения подстрок вида ${STRING} значениями из объекта с ключом STRING. Пример использования:

templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
}); // 'mama mila ramu'*/

function templater(string, data) {
	var subStringToReplace;
	var dataToReplace;
	for (var key in data) {
		 subStringToReplace = '${' + key + '}';
		 dataToReplace = data[key];
		 while (string.indexOf(subStringToReplace) !== -1) {
		 	string = string.replace(subStringToReplace, dataToReplace); 
		 }
	}
	return string;
}
