// Реализовать функцию getExternalLinks, которая возвращает массив ссылок, ведущих на внешние ресурсы (то есть не на тот домен, где запускается скрипт)

function getExternalLinks() {
	var result = [];

	function processTreeHrefsInArray(rootNode) {
		for (var i = 0; i < rootNode.children.length; i += 1) {
			if (rootNode.children[i].tagName === 'A') {
				result.push(rootNode.children[i].hostname);
			}
			processTreeHrefsInArray(rootNode.children[i]);
		}
	}
	processTreeHrefsInArray(document);
	result = result.filter(function(element) {
		return element !== window.location.hostname;
	});
	return result;
}

getExternalLinks();