class Ship{
	constructor(name, size){
		this.name = name ? name : '';
		this.size = size ? size : 0;
		this.sunk = false;
		this.hits = [];
		this.position = [];
	}

	/* To track record of the hits to our ship. */
	hit(pos){
		if(pos > this.size)
			return false;

		/* Success */
		this.hits.push(pos);
		return this.hits;
	}

	/* To track is the ship is no longer in the game. */
	isSunk(){
		if(this.size === this.hits.length)
			return true;
		else
			return false;
	}

	_checkValidDirection(initCoord, finalCoord){
		let initLetter = initCoord.slice(0, 1);
		let initNum = initCoord.slice(1, 2);
		let finalLetter = finalCoord.slice(0, 1);
		let finalNum = finalCoord.slice(1, 2);

		if(initLetter === finalLetter || initNum === finalNum)
			return true;
		else
			return false;
	}

	/*  */
	fillPosition(initCoord, finalCoord){
		if(this._checkValidDirection(initCoord, finalCoord))
			return true;
		else
			return false;
	}
}

export { Ship };
