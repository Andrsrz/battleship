<template>
	<div class="form">
		<div class="field">
			<b-field label="Aircraft">
				<b-select v-model="aircraftInitCoord" required>
					<option v-for="coord in this.boardArray" :key="coord">
							{{ coord }}
					</option>
				</b-select>
				<b-select v-model="aircraftFinalCoord" required>
					<option v-for="coord in this.aircraftFinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Battleship">
				<b-select v-model="battleshipInitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="battleshipFinalCoord" required>
					<option v-for="coord in this.battleshipFinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Cruiser">
				<b-select v-model="cruiserInitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="cruiserFinalCoord" required>
					<option v-for="coord in this.cruiserFinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Destroyer">
				<b-select v-model="destroyer1InitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="destroyer1FinalCoord" required>
					<option v-for="coord in this.destroyer1FinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Destroyer">
				<b-select v-model="destroyer2InitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="destroyer2FinalCoord" required>
					<option v-for="coord in this.destroyer2FinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Submarine">
				<b-select v-model="submarine1InitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="submarine1FinalCoord" required>
					<option v-for="coord in this.submarine1FinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="field">
			<b-field label="Submarine">
				<b-select v-model="submarine2InitCoord" required>
					<option v-for="coord in this.gameboard.boardArray" :key="coord">
						{{ coord }}
					</option>
				</b-select>
				<b-select v-model="submarine2FinalCoord" required>
					<option v-for="coord in this.submarine2FinalCoords" :key="coord">
						{{ coord }}
					</option>
				</b-select>
			</b-field>
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
			boardArray: this.gameboard.boardArray,
			aircraftInitCoord: '',
			aircraftFinalCoord: '',
			aircraftFinalCoords: [],
			battleshipInitCoord: '',
			battleshipFinalCoord: '',
			battleshipFinalCoords: [],
			cruiserInitCoord: '',
			cruiserFinalCoord: '',
			cruiserFinalCoords: [],
			destroyer1InitCoord: '',
			destroyer1FinalCoord: '',
			destroyer1FinalCoords: [],
			destroyer2InitCoord: '',
			destroyer2FinalCoord: '',
			destroyer2FinalCoords: [],
			submarine1InitCoord: '',
			submarine1FinalCoord: '',
			submarine1FinalCoords: [],
			submarine2InitCoord: '',
			submarine2FinalCoord: '',
			submarine2FinalCoords: [],
		}
	},
	watch: {
		aircraftInitCoord: function(value){
			this.aircraftFinalCoords = [];
			this.aircraftFinalCoords = this.populateFinalCoords(value, 6, 70);
		},
		battleshipInitCoord: function(value){
			this.battleshipFinalCoords = [];
			this.battleshipFinalCoords = this.populateFinalCoords(value, 5, 69 /* nice */);
		},
		cruiserInitCoord: function(value){
			this.cruiserFinalCoords = [];
			this.cruiserFinalCoords = this.populateFinalCoords(value, 4, 68);
		},
		destroyer1InitCoord: function(value){
			this.destroyer1FinalCoords = [];
			this.destroyer1FinalCoords = this.populateFinalCoords(value, 3, 67);
		},
		destroyer2InitCoord: function(value){
			this.destroyer2FinalCoords = [];
			this.destroyer2FinalCoords = this.populateFinalCoords(value, 3, 67);
		},
		submarine1InitCoord: function(value){
			this.submarine1FinalCoords = [];
			this.submarine1FinalCoords.push(value);
		},
		submarine2InitCoord: function(value){
			this.submarine2FinalCoords = [];
			this.submarine2FinalCoords.push(value);
		}
	},
	methods: {
		/* Populate the final coords for the user to pick from.
		/* @params initCoord : String, maxNum : int, maxCode : int
		/* @returns none : null */
		populateFinalCoords(initCoord, maxNum, maxCode){
			let arr = [];
			let initLetter = initCoord[0];
			let initNum;

			/* Check wether of not the column in the 10 */
			if(initCoord.length === 2){
				initNum = initCoord[1];
			}else{
				initNum = initCoord[1] + initCoord[2];
			}

			let code = initLetter.charCodeAt(0) + maxNum - 2;
			let finalLetter = String.fromCharCode(code);

			/* Validate coordinates */
			if(initNum > maxNum){
				arr.push("Enter valid column");
			}else if(code > maxCode){
				arr.push("Enter valid row");
			}else{
				arr.push( initLetter + (Number(initNum) + maxNum - 2) );
				arr.push( finalLetter + initNum );
			}

			return arr;
		}
	}
}
</script>

<style scoped>
.field.has-addons * {
	margin-left: 5px;
	margin-right: 5px;
}

.form {
	margin-left: 20px;
}
</style>
