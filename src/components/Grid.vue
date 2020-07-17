<template>
	<div class="grid-container">
		<div class="myGrid" >
			<div class="cell"
					v-for="(coord, index) in this.gameboard.boardArray"
					:key="index"
					@click="sayCoord(coord)">
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
		gameboard: Object
	},
	data(){
		return{
			coord: ''
		}
	},
	methods: {
		sayCoord(coord){
			this.coord = coord;
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
