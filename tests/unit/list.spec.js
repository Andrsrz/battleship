import List from '../../src/classes/list';
import Node from '../../src/classes/node';

describe("insertFirst()", () => {
	let myList = new List();
	let node = new Node("Node 1");

	test("Insert first node", () => {
		expect(myList.insertFirst(node)).toBe(1);
	});
});
