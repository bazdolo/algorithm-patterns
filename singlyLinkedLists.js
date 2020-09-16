const util = require('util');
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head.next;
		this.head = temp;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index > this.length) return undefined;
		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, value) {
		let node = this.get(index);
		if (!node) return false;
		node.value = value;
		return true;
	}

	insert(i, val) {
		if (i > this.length || i < 0) return false;
		if (i === this.length) {
			return !!this.push(val);
		}
		if (i === 0) {
			return !!this.unshift(val);
		}
		let newNode = new Node(val);
		let prev = this.get(i - 1);
		let temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;

		this.length++;
		return true;
	}

	remove(i) {
		if (i < 0 || i >= this.length) return undefined;
		if (i === 0) return this.shift();
		if (i === this.length - 1) return this.pop();
		let prev = this.get(i - 1);
		let removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		// [1, 2, 3, 4, 5,]
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

let list = new SinglyLinkedList();
for (let i = 0; i < 9; i++) {
	list.push(i);
}

// console.log(list);

// console.log(list.get(10));
// console.log(list.set(5, 'hello'));
// console.log(list.insert(9, 'inserted'));
// list.remove(5);
list.reverse();
// console.log(util.inspect(list, { showHidden: false, depth: null }));
