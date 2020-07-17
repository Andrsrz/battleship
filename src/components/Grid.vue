<template>
	<div class="grid-container">
		<div class="myGrid" >
			<div class="cell" v-for="coord in this.gameboard.boardArray" :key="coord">
				{{ coord }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		gameboard: Object
	},
	data(){
		return{}
	},
	methods: {}
}
</script>

<style scoped>
.myGrid {
	display: grid;
	grid-template-columns: repeat(10, 40px);
	grid-template-rows: repeat(10, 40px);
}

.cell {
	border: 1px solid black;
}
</style>
