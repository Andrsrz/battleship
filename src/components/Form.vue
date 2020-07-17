<template>
	<div class="form">
		<div class="field">
			<label class="label">Aircraft (5 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="aircraftInitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="aircraftFinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Battleship (4 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="battleshipInitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="battleshipFinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Cruiser (3 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="cruiserInitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="cruiserFinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="destroyer1InitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="destroyer1FinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Destroyer (2 spaces)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="destroyer2InitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="destroyer2FinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine1InitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine1FinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ initCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine2InitCoord">
					</div>
				</div>
				<div class="field">
					<label class="label">{{ finalCoords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine2FinalCoord">
					</div>
				</div>
			</div>
		</div>
		<div class="control btn">
			<button class="button is-primary" @click="startGame()">Submit</button>
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
			initCoords: 'Initial Coordinates',
			finalCoords: 'Final Coordinates',
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
	methods: {
		startGame(){
			if(this.aircraftInitCoord === "" ||
			this.aircraftFinalCoord === "" ||
			this.battleshipInitCoord === "" ||
			this.battleshipFinalCoord === "" ||
			this.cruiserInitCoord === "" ||
			this.cruiserFinalCoord === "" ||
			this.destroyer1InitCoord === "" ||
			this.destroyer1FinalCoord === "" ||
			this.destroyer2InitCoord === "" ||
			this.destroyer2FinalCoord === "" ||
			this.submarine1InitCoord === "" ||
			this.submarine1FinalCoord === "" ||
			this.submarine2InitCoord === "" ||
			this.submarine2FinalCoord === "")
				alert("Enter all the coordinates");
			else
				alert("Game Start!");
		}
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
