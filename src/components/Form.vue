<template>
	<div class="form">
		<div class="field">
			<label class="label">Aircraft (5 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Battleship (4 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Cruiser (3 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">X (1-10)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
				<div class="field">
					<label class="label">Y (A-J)</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input">
					</div>
				</div>
			</div>
		</div>
		<div class="field is-grouped">
			<div class="control">
				<button class="button is-link">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Form',
	props: {
		gameboard: Object
	},
	data(){
		return {
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
</style>
