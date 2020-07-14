import { Ship } from '../../src/classes/ship';
import { Gameboard } from '../../src/classes/gameboard';

describe("Create Gameboard", () => {
	let myGameboard = new Gameboard();
	const AircraftCarrier = new Ship('Aircraft Carrier', 5);
	const Battleship = new Ship('Battleship', 4);
	const Cruiser = new Ship('Cruiser', 3);
	const Destroyer = new Ship('Destroyer', 2);
	const Submarine = new Ship('Submarine', 1);

	test("Gameboard has an Aircraft Carrier", () => {
		expect(AircraftCarrier).toMatchObject(myGameboard.ships[0]);
	});

	test("Gameboard has a Battleship", () => {
		expect(Battleship).toMatchObject(myGameboard.ships[1]);
	});

	test("Gameboard has a Cruiser", () => {
		expect(Cruiser).toMatchObject(myGameboard.ships[2]);
	});

	test("Gameboard has two Destroyers", () => {
		expect(Destroyer).toMatchObject(myGameboard.ships[3]);
		expect(Destroyer).toMatchObject(myGameboard.ships[4]);
	});

	test("Gameboard has two Submarines", () => {
		expect(Submarine).toMatchObject(myGameboard.ships[5]);
		expect(Submarine).toMatchObject(myGameboard.ships[6]);
	});
});

describe("allSunk()", () => {
	let myGameboard = new Gameboard();

	test("All ships are not sunk", () => {
		expect(myGameboard.allSunk()).toBeFalsy();
	});

	/* Hit every ship's position to check the expected
	 * output. */
	test("All ships are sunk", () => {
		for(let i = 0; i < myGameboard.ships.length; i++){
			for(let j = 0; j < myGameboard.ships[i].size; j++){
				myGameboard.ships[i].hit(j);
			}
		}
		expect(myGameboard.allSunk()).toBeTruthy();
	});
});

describe("receiveAttack()", () => {
	let myGameboard = new Gameboard();

	test("Attack missed (Ships without stablished position)", () => {
		expect(myGameboard.receiveAttack('G5')).toMatch('/');
	});

	test("Attack (Ships with horizontal position)", () => {
		myGameboard.aircraft.fillPosition('A3', 'A7');
		expect(myGameboard.receiveAttack('A5')).toMatch('X');
	});

	test("Attack (Ships with vertical position)", () => {
		myGameboard.cruiser.fillPosition('C3', 'E3');
		expect(myGameboard.receiveAttack('D3')).toMatch('X');
	});
});

describe("getBoradList()", () => {
	let myGameboard = new Gameboard();

	test("Generate board list", () => {
		expect(myGameboard._getBoardList()).toStrictEqual(["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10"]);
	});
});
