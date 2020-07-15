<template>
	<div class="form">
		<div class="field">
			{{ aircraftInitCoord }}
			{{ aircraftFinalCoord  }}
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
		<!--<div class="field">
			<b-field label="Battleship">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div>
			<div class="field">
			<b-field label="Cruiser">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div>
			<div class="field">
			<b-field label="Destroyer">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div>
			<div class="field">
			<b-field label="Destroyer">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div>
			<div class="field">
			<b-field label="Submarine">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div>
			<div class="field">
			<b-field label="Submarine">
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			<b-select required>
			<option v-for="coord in this.gameboard.boardList" :key="coord">
			{{ coord }}
			</option>
			</b-select>
			</b-field>
			</div> -->
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
			boardArray: this.gameboard.boardList,
			aircraftFinalCoords: [],
			aircraftInitCoord: '',
			aircraftFinalCoord: ''
		}
	},
	watch: {
		aircraftInitCoord: function(){
			this.makeAircraftFinalCoordsArray();
		}
	},
	methods: {
		makeAircraftFinalCoordsArray(){
			this.aircraftFinalCoords = [];
			let initCoord = this.aircraftInitCoord;
			let initLetter = initCoord[0];
			let initNum = initCoord[1];
			let code = initLetter.charCodeAt(0) + this.gameboard.aircraft.size - 1;
			let finalLetter = String.fromCharCode(code);
			this.aircraftFinalCoords.push( initLetter + (Number(initNum) + this.gameboard.aircraft.size - 1) );
			this.aircraftFinalCoords.push( finalLetter + initNum );
		}
	}
}
</script>

<style scoped>
.field.has-addons {
	justify-content: space-around !important;
}

.field.is-grouped {
	justify-content: center !important;
}
</style>
