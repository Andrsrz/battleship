import { Gameboard } from './gameboard';

class Player{
	constructor(){
		this.gameboard = new Gameboard();
		this.max = 9;
	}

	_getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	_getRandomCoord(){
		let x = this._getRandomInt(this.max);
		let y = this._getRandomInt(this.max);
		let coord = this.gameboard.board[x][y];
		return coord;
	}

	cpuTurn(){
		let coord = this._getRandomCoord();
		let allHits = this.gameboard.missedHits.concat(this.gameboard.hits);

		for(let i = 0; i < allHits.length; i++){
			if(coord === allHits[i]){
				this.cpuTurn();
				return false;
			}
		}

		return coord;
	}
}

export { Player };
