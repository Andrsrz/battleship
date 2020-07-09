import { Ship } from '../src/classes/ship';

describe("hit()", () => {
	let myShip = new Ship('Aircraft Carrier', 5);

	test("Contains the position that have been just hitted.", () => {
		expect(myShip.hit(0)).toContain(0);
	});

	test("The position exists within the ship (Size match)", () => {
		expect(myShip.hit(7)).toBeFalsy();
	});

	test("Another hit", () => {
		expect(myShip.hit(4)).toContain(0, 4);
	});
});

describe("isSunk()", () => {
	let myShip = new Ship('Cruiser', 3);

	test("Ship without hits is not sunk", () => {
		expect(myShip.isSunk()).toBeFalsy();
	});
});
