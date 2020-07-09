import { Ship } from './ship';

class Gameboard{
	constructor(){
		this.aircraft = new Ship('Aircraft Carrier', 5);
		this.battleship = new Ship('Battleship', 4);
		this.ships = [];
		this.ships.push(this.aircraft);
		this.ships.push(this.battleship);
	}
}

export { Gameboard };
