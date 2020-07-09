import { Ship } from './ship';

class Gameboard{
	constructor(){
		this.aircraft = new Ship('Aircraft Carrier', 5);
		this.battleship = new Ship('Battleship', 4);
		this.cruiser = new Ship('Cruiser', 3);
		this.ships = [];
		this.ships.push(this.aircraft);
		this.ships.push(this.battleship);
		this.ships.push(this.cruiser);
	}
}

export { Gameboard };
