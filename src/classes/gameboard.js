import { Ship } from './ship';

class Gameboard{
	constructor(){
		this.board = [
			['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
			['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
			['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
			['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
			['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
			['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
			['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
			['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
			['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'],
			['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10']
		];
		this.boardList = this._getBoardList();
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
		this.missedHits = [];
		this.hits = [];
	}

	/* We want to know if all the ships are sunk to finish the game. Iterate
	 * through our ships array and check wether or not the ship is sunk. */
	allSunk(){
		for(let i = 0; i < this.ships.length; i++){
			if(this.ships[i].isSunk() === false)
				return false;
		}
		return true;
	}

	/* To receive an attack from the oponent we need to check wheter the
	 * position is empty or has a ship in it. */
	receiveAttack(coordinates){
		/* Check every ship coordinates */
		for(let shipIter = 0; shipIter < this.ships.length; shipIter++){
			for(let coord = 0; coord < this.ships[shipIter].position.length; coord++){
				if(coordinates === this.ships[shipIter].position[coord]){
					/* Track hits */
					this.hits.push(coordinates);
					return 'X';
				}
			}
		}
		/* Track missed hits */
		this.missedHits.push(coordinates);
		return '/';
	}

	_getBoardList(){
		/* This need to bo a linked list for fast inserts and deletion */
		let boardList = [];
		for(let row = 0; row < this.board.length; row++){
			for(let column = 0; column < this.board[row].length; column++){
				boardList.push(this.board[row][column]);
			}
		}

		return boardList;
	}
}

export { Gameboard };
