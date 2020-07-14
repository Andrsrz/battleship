<template>
	<div class="form">
		<div class="field">
			{{ selected }}
			<b-field label="Aircraft">
				<b-select v-model="selected" required>
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
			boardList: this.gameboard.boardList,
			selected: ''
		}
	},
	methods: {

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
