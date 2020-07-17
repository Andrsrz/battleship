<template>
	<div class="grid-container">
		<div class="myGrid" >
			<div class="cell"
					v-for="(coord, index) in this.gameboard.boardArray"
					:key="index"
					@click="hit(coord)"
					:id="coord">
				{{ coord }}
			</div>
		</div>
		{{ coord }}
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		gameboard: Object,
		isdisabled: Boolean
	},
	data(){
		return{
			coord: ''
		}
	},
	methods: {
		hit(coord){
			if(this.isdisabled)
				this.coord = 'Please enter your ships first!';
			else
				this.coord = coord;
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
