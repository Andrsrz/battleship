import { Ship } from '../src/classes/ship';

describe("hit()", () => {
	let myShip = new Ship('Aircraft Carrier', 5);

	test("Contains the position that have been just hitted.", () => {
		expect(myShip.hit(0)).toContain(0);
	});
});
