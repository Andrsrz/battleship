<template>
	<div class="grid-container">
		{{ message }}
		<div class="myGrid" >
			<div class="cell"
					v-for="(coord, index) in this.gameboard.boardArray"
					:key="index"
					@click="hit(coord)"
					:id="coord">
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
		isdisabled: Boolean,
		who: String
	},
	data(){
		return{
			message: ''
		}
	},
	methods: {
		hit(coord){
			if(this.isdisabled && (this.who === 'cpu' || this.who === 'player'))
				this.message = 'Please enter your ships first!';
			else if(this.who === 'player')
				this.message = "You shouldn't shoot your own ships!";
			else
				this.message = coord;
		},
		renderShips(){
			this.isdisabled = false;
		}
	},
	watch: {
		gameboard: {
			deep: true,
			handler(){
				this.renderShips();
			}
		}
	}
}
</script>

<style scoped>
.myGrid {
	display: grid;
	grid-template-columns: repeat(10, 40px);
	grid-template-rows: repeat(10, 40px);
}

.cell {
	cursor: pointer;
	border: 1px solid black;
}
</style>
