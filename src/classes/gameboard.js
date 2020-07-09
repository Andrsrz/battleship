import { Ship } from './ship';

class Gameboard{
	constructor(){
		this.aircraft = new Ship('Aircraft Carrier', 5);
		this.ships = [];
		this.ships.push(this.aircraft);
	}
}

export { Gameboard };
