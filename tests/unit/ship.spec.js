import Ship from '../../src/classes/ship';

describe("hit()", () => {
	let myShip = new Ship('Aircraft Carrier', 5);

	/* We want to know if the position hitted is actually
	 * tracked in our Ship object. */

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

	/* We want to know wether or not our ship is no longer in
	 * the game. */

	test("Ship without hits is not sunk", () => {
		expect(myShip.isSunk()).toBeFalsy();
	});

	test("Ship with hits is not sunk", () => {
		myShip.hit(0);
		expect(myShip.isSunk()).toBeFalsy();
	});

	test("Ship with all positions hitted is sunk", () => {
		myShip.hit(1);
		myShip.hit(2);
		expect(myShip.isSunk()).toBeTruthy();
	});
});

describe("fillPosition", () => {
	let Aircraft = new Ship('Aircraft Carrier', 5);
	let Cruiser = new Ship('Cruiser', 3);
	let Battleship = new Ship('Battleship', 4);

	test("Position filled correctly Horizontal (checking valid ship size and direction)", () => {
		expect(Aircraft.fillPosition('F3', 'F7')).toStrictEqual(['F3', 'F4', 'F5', 'F6', 'F7']);
	});

	test("Position filled correctly Vertical (checking valid ship size and direction)", () => {
		expect(Cruiser.fillPosition('C3', 'E3')).toStrictEqual(['C3', 'D3', 'E3']);
	});

	test("Position not filled correctly (checking valid ship size and direction)", () => {
		expect(Battleship.fillPosition('C3', 'E3')).toBeFalsy();
	});
});
