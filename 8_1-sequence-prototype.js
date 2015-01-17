/*Реализовать класс на прототипах
Реализовать класс Sequence(arr). Конструктор принимает аргументом массив элементов. Имеет методы (описанные в прототипе) go, next, prev. 
Запоминает на каком элементе из массива сейчас находится "указатель".

Метод go(index) возвращает элемент из массива с индексом index, или последний элемент массива, если index больше длины массива. 
Запоминает индекс возвращенного элемента. Метод next() возвращает следующий элемент из массива идущий за запомненным индексом,
 или первый элемент массива, если последний запомненный индекс - индекс последнего элемента. 
 Метод prev() возвращает предыдущий элемент из массива идущий перед запомненным индексом, или последний элемент массива, 
 если последний запомненный индекс - индекс первого элемента.

var s1 = new Sequence(['one', 'two', 'three'])
s1.go(2);  // 'three'
s1.next(); // 'one'
s1.next(); // 'two'

var s2 = new Sequence([{name: 'Manya'}, {name:'Valya'}]);
s2.go(100500); // {name: 'Valya'} последний элемент, так как индекс выходит за границы максимального
s2.prev(); // {name: 'Manya'}
s2.prev(); // {name: 'Valya'}*/

function Sequence(arr) {
	this.array = arr;
	this.currentElement = 0;
}

Sequence.prototype.go = function(index) {
	if (index > this.array.length - 1) {
		this.currentElement = this.array.length - 1;
		return this.array[this.currentElement];
	}
	else {
		this.currentElement = index;
		return this.array[this.currentElement];
	}
};
Sequence.prototype.next = function() {
	if (this.currentElement === this.array.length - 1) {
		this.currentElement = 0;
		return this.array[0];
	}
	else {
		this.currentElement += 1;
		return this.array[this.currentElement];
	}
};
Sequence.prototype.prev = function() {
	if (this.currentElement === 0) {
		this.currentElement = this.array.length - 1;
		return this.array[this.array.length - 1];
	}
	else {
		this.currentElement -= 1;
		return this.array[this.currentElement];
	}
};

