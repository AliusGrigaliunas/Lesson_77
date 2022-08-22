/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
// ↓↓↓ Tipai ↓↓↓

type ForEachCallback<T> = (value: T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓

class ListNode<Type> {
  constructor(
    public data: Type,
    public next: ListNode<Type> | null = null,
  ) { }
}

class List<T> {
  private head: ListNode<T> | null;

  private tail: ListNode<T> | null;

  constructor(data?: T) {
    if (data !== undefined) {
      const newNode = new ListNode(data);
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  public unshift(data: T): void {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  public push(data:T) {
    const newNode = new ListNode(data);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.next = null;
      this.tail = newNode;
    }
  }

  public forEach(callback: ForEachCallback<T>): void {
    if (this.head === null) return;

    let currentNode: ListNode<T> = this.head;

    while (true) {
      callback(currentNode.data);
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
  }
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓

// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
  const newNode2 = new List(5);

  console.log(newNode2);
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
  const test = new List();

  test.unshift(5);
  test.unshift(10);

  console.log(test);
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
  const test = new List(5);

  test.push(9);

  console.log(test);
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  const test = new List(5);
  test.push(9);
  test.push(10);
  test.push(69);

  test.forEach((a) => console.log(`${a}a`));

  console.log(test);
}
console.groupEnd();
