<template>
	<div class="form">
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
.field.has-addons * {
	margin-left: 5px;
	margin-right: 5px;
}

.form {
	margin-left: 20px;
}
</style>
