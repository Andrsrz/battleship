import { Ship } from '../src/classes/ship';
import { Gameboard } from '../src/classes/gameboard';

describe("Create Gameboard", () => {
	let myGameboard = new Gameboard();
	const AircraftCarrier = new Ship('Aircraft Carrier', 5);

	test("Gameboard has an Aircraft Carrier", () => {
		expect(AircraftCarrier).toMatchObject(myGameboard.ships[0]);
	});
});
