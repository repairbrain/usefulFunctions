/*Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя. 
Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив. 
listData Может содержать как элементы (текст), так и массивы элементов. Глубина вложенности массивов любая.

Примеры возвращаемых узлов:

createList(['мясо', 'рыба']) /* ->
<ul>
  <li>мясо</li>
  <li>рыба</li>
</ul>


createList(['мясо', ['яблоки', 'бананы']], 'ol') /*->
<ol>
  <li>мясо</li>
  <li>
    <ol>
      <li>яблоки</li>
      <li>бананы</li>
    </ol>
  </li>
</ol>


createList(['мясо', ['яблоки', 'бананы']], 'div', 'div') /*->
<div>
  <div>мясо</div>
  <div>
    <div>
      <div>яблоки</div>
      <div>бананы</div>
    </div>
  </div>
</div>
*/

function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

function createList(listData, listContainer, itemContainer) {
	listContainer = listContainer || "ul";
	itemContainer = itemContainer || "li";
	var res = document.createElement(listContainer);
	var listItemContainer;
	for (var i = 0; i < listData.length; i += 1) {
		listItemContainer = document.createElement(itemContainer);
		if (isArray(listData[i])) {
			listItemContainer.appendChild(createList(listData[i], listContainer, itemContainer));
		} else {
			listItemContainer.innerText = listData[i];
		}
		res.appendChild(listItemContainer);
	}
	return res;
}