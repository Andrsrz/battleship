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

	/* The user may put random position so we need to validate them.
	 * checking the initial and final position and subtract them we
	 * can tell if the ship is going to fill in that specific space. */
	_checkValidShipSize(initLetter, initNum, finalLetter, finalNum){
		if(finalNum - initNum === this.size - 1
			|| finalLetter.charCodeAt(0) - initLetter.charCodeAt(0) === this.size - 1){
			return this._checkValidDirection(initLetter, initNum, finalLetter, finalNum);
		}else{
			return false;
		}
	}

	/* The rule goes as follow: The ship needs to be positioned horizontal or
	 * vertical. So we check if the passed coordinates have the same letter or
	 * the same number. */
	_checkValidDirection(initLetter, initNum, finalLetter, finalNum){
		if(initLetter === finalLetter){
			return "Horizontal";
		}else if(initNum === finalNum){
			return "Vertical";
		}else{
			return false;
		}
	}

	/*  */
	fillPosition(initCoord, finalCoord){
		let initLetter = initCoord.slice(0, 1);
		let initNum = initCoord.slice(1, 2);
		let finalLetter = finalCoord.slice(0, 1);
		let finalNum = finalCoord.slice(1, 2);
		let direction = this._checkValidShipSize(initLetter, initNum, finalLetter, finalNum);

		if(direction === "Horizontal"){
			for(let i = 0; i < this.size; i++){
				this.position.push(initLetter + (Number(initNum) + i));
			}
		}else if(direction === "Vertical"){
			for(let i = 0; i < this.size; i++){
				let code = initLetter.charCodeAt(0);
				code += i;
				let letter = String.fromCharCode(code);
				this.position.push(letter + initNum);
			}
		}else{
			return 'Error';
		}

		return this.position;
	}
}

export { Ship };
