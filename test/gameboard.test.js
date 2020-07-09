import { Ship } from '../src/classes/ship';
import { Gameboard } from '../src/classes/gameboard';

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