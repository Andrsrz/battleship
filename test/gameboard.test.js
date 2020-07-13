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

	test("Attack (Ships with stablished position)", () => {
		myGameboard.aircraft.fillPosition('A3', 'A7');
		expect(myGameboard.receiveAttack('A5')).toMatch('X');
	});
});
