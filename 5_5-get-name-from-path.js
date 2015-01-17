/*Реализовать функцию getName(path), которая возвращает название папки или файла из строки пути. Разделители сегментов путей - юниксовые ("/"). Примеры путей:

'/users/dmitry/Dropbox/'
'/users/dmitry/Dropbox'
'/users/dmitry/Dropbox/main.js'*/

function getName(path) {
	var array = path.split('/');
	for (var i = array.length; i >= 0; i--) {
		if (!array[i]) array.splice(i, 1);
	}
	return array[array.length - 1];
}

getName('/users/Home////');