import { Ship } from './ship';

class Gameboard{
	constructor(){
		this.aircraft = new Ship('Aircraft Carrier', 5);
		this.battleship = new Ship('Battleship', 4);
		this.cruiser = new Ship('Cruiser', 3);
		this.destroyer1 = new Ship('Destroyer', 2);
		this.destroyer2 = new Ship('Destroyer', 2);
		this.submarine1 = new Ship('Submarine', 1);
		this.submarine2 = new Ship('Submarine', 1);
		this.ships = [];
		this.ships.push(this.aircraft);
		this.ships.push(this.battleship);
		this.ships.push(this.cruiser);
		this.ships.push(this.destroyer1);
		this.ships.push(this.destroyer2);
		this.ships.push(this.submarine1);
		this.ships.push(this.submarine2);
	}
}

export { Gameboard };
