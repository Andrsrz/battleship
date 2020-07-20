<template>
	<div class="form" :style="{ display: formDisplay }">
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
					<label class="label">{{ coords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine1Coord">
					</div>
				</div>
			</div>
		</div>
		<div class="field">
			<label class="label">Submarine (1 space)</label>
			<div class="coord-container">
				<div class="field">
					<label class="label">{{ coords }}</label>
					<div class="control">
						<input class="input" type="text" maxlength="3" v-model="submarine2Coord">
					</div>
				</div>
			</div>
		</div>
		<div class="control btn">
			<button class="button is-primary" @click="getCoordinates()">Submit</button>
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
			formDisplay: 'block',
			initCoords: 'Initial Coordinates',
			finalCoords: 'Final Coordinates',
			coords: 'Coordinate',
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
			submarine1Coord: '',
			submarine2Coord: ''
		}
	},
	methods: {
		getCoordinates(){
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
			this.submarine1Coord === "" ||
			this.submarine2Coord === ""){
				alert("Enter all the coordinates");
			}else if(!this.gameboard.aircraft.fillPosition(this.aircraftInitCoord, this.aircraftFinalCoord) ||
				!this.gameboard.battleship.fillPosition(this.battleshipInitCoord, this.battleshipFinalCoord) ||
				!this.gameboard.cruiser.fillPosition(this.cruiserInitCoord, this.cruiserFinalCoord) ||
				!this.gameboard.destroyer1.fillPosition(this.destroyer1InitCoord, this.destroyer1FinalCoord) ||
				!this.gameboard.destroyer2.fillPosition(this.destroyer2InitCoord, this.destroyer2FinalCoord) ||
				!this.gameboard.submarine1.fillPosition(this.submarine1Coord, this.submarine1Coord) ||
				!this.gameboard.submarine2.fillPosition(this.submarine2Coord, this.submarine2Coord)){
				alert("Please check that the coordinates are valid\nonly horizontal and vertical directions");
			}else{
				/* Success. Clear inputs */
				this.aircraftInitCoord = "";
				this.aircraftFinalCoord = "";
				this.battleshipInitCoord = "";
				this.battleshipFinalCoord = "";
				this.cruiserInitCoord = "";
				this.cruiserFinalCoord = "";
				this.destroyer1InitCoord = "";
				this.destroyer1FinalCoord = "";
				this.destroyer2InitCoord = "";
				this.destroyer2FinalCoord = "";
				this.submarine1Coord = "";
				this.submarine2Coord = "";
				this.formDisplay = "none";
			}
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
