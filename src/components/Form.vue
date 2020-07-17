<template>
	<form class="form">
		<div class="field">
			<label class="label">Aircraft (5 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Battleship (4 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Cruiser (3 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ xcoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="1">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ ycoords }}</label>
					<div class="control">
						<input class="input" type="number" min="1" max="10" maxlength="2">
					</div>
				</div>
			</div>
		</div>
		<div class="control btn">
			<button class="button is-primary">Submit</button>
		</div>
	</form>
</template>

<script>
export default {
	name: 'Form',
	props: {
		gameboard: Object
	},
	data(){
		return {
			xcoords: 'X (A-J)',
			ycoords: 'Y (1-10)',
			aircraftInitCoord: '',
			aircraftFinalCoord: '',
			battleshipInitCoord: '',
			battleshipFinalCoord: '',
			cruiserInitCoord: '',
			cruiserFinalCoord: '',
			destroyer1InitCoord: '',
			destroyer1FinalCoord: '',
			destroyer2InitCoord: '',
			destroyer2FinalCoord: '',
			submarine1InitCoord: '',
			submarine1FinalCoord: '',
			submarine2InitCoord: '',
			submarine2FinalCoord: ''
		}
	},
	watch: {
	},
	methods: {
	}
}
</script>

<style scoped>
.coord-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
}

.btn {
	text-align: center;
}
</style>
