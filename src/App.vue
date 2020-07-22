<template>
	<div id="app">
		<Form :gameboard="this.player.gameboard" :cpu="this.cpu.gameboard"/>
		<br>
		<div id="grids">
			<h1 class="is-size-4 has-text-primary">Your Grid</h1>
			<Grid :gameboard="this.player.gameboard" :who="'player'"/>
			<br>
			<h1 class="is-size-4 has-text-danger">Enemy Grid</h1>
			<Grid :gameboard="this.cpu.gameboard" :who="'cpu'"/>
		</div>
	</div>
</template>

<script>
/* Components */
import Form from './components/Form.vue';
import Grid from './components/Grid.vue';
/* Classes */
import Player from './classes/player';

export default {
	name: 'App',
	components: {
		Form,
		Grid
	},
	data() {
		return {
			player: new Player(),
			cpu: new Player()
		}
	},
	mounted(){
		this.$root.$on("player just played, it's cpu turn!", () => {
			let coord = this.player.cpuTurn();
			console.log(coord);
			this.$children[1].$refs[coord][0].click();
		});
	}
}
</script>

<style lang="scss">
#app {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#grids {
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #6B5B95;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert),
	"twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
