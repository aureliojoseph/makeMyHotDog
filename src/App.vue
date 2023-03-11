<template>
	<div id="container">
		<Navbar :logo="logo_src" :alt="app_name" />
		<RouterView />
		<Footer :logo="logo_src" :alt="app_name" />
	</div>
</template>

<script>
	import Navbar from './components/Navbar.vue'
	import Footer from './components/Footer.vue'

	export default {
		components: {
			Navbar,
			Footer
		},
		data() {
			return {
				logo_src: '../img/icons/favicon.ico',
				app_name: 'Make your hotdog'
			}
		}
	}
</script>

<style>
	* {
		font-family: Helvetica;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.main-container {
		margin: 50px;
		height: 100vh;
	}

	h1 {
		text-align: center;
		font-size: 42px;
		margin-bottom: 30px;
		color: #333;
	}
</style>
