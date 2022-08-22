"use strict";
class ListNode {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
    ;
}
class list {
    head;
    tail;
    constructor(data) {
        if (data !== undefined) {
            const newNode = new ListNode(data);
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
    unshift(data) {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    push(data) {
        const newNode = new ListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.next = null;
            this.tail = newNode;
        }
    }
    forEach(callback) {
        if (this.head === null)
            return;
        let currentNode = this.head;
        while (true) {
            callback(currentNode.data);
            if (currentNode.next === null)
                break;
            currentNode = currentNode.next;
        }
    }
}
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    const newNode2 = new list(5);
    console.log(newNode2);
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
    const test = new list();
    test.unshift(5);
    test.unshift(10);
    console.log(test);
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
    const test = new list(5);
    test.push(9);
    console.log(test);
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
    const test = new list(5);
    test.push(9);
    test.push(10);
    test.push(69);
    test.forEach((a) => console.log(a + 'a'));
    console.log(test);
}
console.groupEnd();
//# sourceMappingURL=main.js.map