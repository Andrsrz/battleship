import List from '../../src/classes/list';
import Node from '../../src/classes/node';

describe("insertFirst()", () => {
	let myList = new List();
	let node = new Node("Node1");
	let node2 = new Node("Node2");

	test("Insert first node", () => {
		expect(myList.append(node)).toBe(1);
	});

	test("Insert another node", () => {
		expect(myList.append(node2)).toBe(2);
	});
});
