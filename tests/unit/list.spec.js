import List from '../../src/classes/list';

describe("append()", () => {
	let myList = new List();

	test("Insert first node", () => {
		expect(myList.append("A1")).toBe(1);
	});

	test("Insert another node", () => {
		expect(myList.append("G5")).toBe(2);
	});
});

describe("removeAt(position)", () => {
	let myList = new List();
	myList.append("A1");
	myList.append("G5");
	myList.append("F4");

	test("Remove item that is not the head", () => {
		expect(myList.removeAt(1)).toMatch("G5");
	});

	test("Try remove at invalid position", () => {
		expect(myList.removeAt(5)).toBeFalsy();
	});

	test("Remove Head", () => {
		expect(myList.removeAt(0)).toMatch("A1");
	});
});

describe("insert(position, item)", () => {
	let myList = new List();
	myList.append("A1");
	myList.append("F4");

	test("Check out of bounds values", () => {
		expect(myList.insert(6, "G5")).toBeFalsy();
	});

	test("Insert in the head", () => {
		expect(myList.insert(0, "G5")).toMatch("G5");
	});

	test("Insert in another position", () => {
		expect(myList.insert(1, "D2")).toMatch("D2");
	});
});
