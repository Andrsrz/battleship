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
				this.message = 'Please enter your ships first!';
			}else if(this.who === 'player'){
				this.message = "You shouldn't shoot your own ships!";
			}else{
				event.target.innerText = this.gameboard.receiveAttack(event.target.id);
				this.message = coord;
			}
			console.log(event.target);
		},
		renderShips(){
			this.isDisabled = false;
			/* We loop through the ships and add a class to
			/* set the background color of the cell where the ship
			/* was placed. */
			this.gameboard.ships.forEach(ship => {
				ship.position.forEach(coordinate => {
					this.$refs[coordinate][0].className += " shipCell";
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
				this.shipsCoords = this.gameboard.shipsCoordinates;
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

.shipCell {
	background-color: #6B5B95;
	color: #FFF;
}
</style>
