<template>
	<div class="grid-container">
		{{ message }}
		<div class="myGrid" >
			<div class="cell"
					v-for="(coord, index) in this.gameboard.boardArray"
					:key="index"
					@click="hit(coord, $event)"
					:id="coord" :ref="coord">
				{{ coord }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		gameboard: Object,
		who: String
	},
	data(){
		return{
			message: '',
			isDisabled: true,
			shipsCoords: []
		}
	},
	methods: {
		hit(coord, event){
			if(this.isDisabled && (this.who === 'cpu' || this.who === 'player')){
				alert('Please enter your ships first!');
			}else if(this.who === 'player'){
				alert("You shouldn't shoot your own ships!");
			}else{
				/* We check if all ships are sunk */
				if(this.gameboard.allSunk()){
					alert('Game Over');
					window.location.reload();
				}else{
					event.target.innerText = this.gameboard.receiveAttack(event.target.id);
					event.target.className += " disabled";
					this.message = this.gameboard.hits;
				}
			}
		},
		renderShips(){
			this.isDisabled = false;
			/* We loop through the ships and add a class to
			/* set the background color of the cell where the ship
			/* was placed. */
			this.gameboard.ships.forEach(ship => {
				ship.position.forEach(coordinate => {
					this.$refs[coordinate][0].className += ( this.who === 'player' ? " playerCell" : " enemyCell");
				});
			});
		}
	},
	watch: {
		/* When the user prompt all the coordinates we check that our
		/* gameboard has changed and render the ships. */
		gameboard: {
			deep: true,
			handler(){
				this.shipsCoords = this.gameboard.shipsCoordinates();
				this.renderShips();
			}
		}
	}
}
</script>

<style scoped lang="scss">
.myGrid {
	display: grid;
	grid-template-columns: repeat(10, 40px);
	grid-template-rows: repeat(10, 40px);
}

.cell {
	cursor: pointer;
	border: 1px solid black;
}

.playerCell {
	background-color: #6B5B95;
	color: #FFF;
}

.enemyCell {
	background-color: #FF3F66;
	color: #FFF;
}

.disabled {
	pointer-events: none;
}
</style>
