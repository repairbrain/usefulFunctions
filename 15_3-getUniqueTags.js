/* Реализовать функцию getUniqueTags, которая возвращает массив названий тегов, присутствуещих на странице. 
В массиве каждого типа тег должен присутствовать в единственном экземпляре.*/

function getUniqueTags () {
	var result = [];
	function processTreeTagInArray(rootNode) {
	    for (var i = 0; i < rootNode.children.length; i += 1) {
	        result.push(rootNode.children[i].tagName);
	        processTreeTagInArray(rootNode.children[i]);
	    }
	}
	processTreeTagInArray(document);

	function getUnique(list) {
		var resultArray = [];
		for (var i=0; i<list.length; i+=1) {
			if (resultArray.indexOf(list[i]) < 0) {
				resultArray.push(list[i]);
			}
		}
		return resultArray;
	}
	result = getUnique(result);

	return result;
}

getUniqueTags();