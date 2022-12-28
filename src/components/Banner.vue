<template>
	<div id="main-banner">
		<h1>Make Your Hotdog</h1>
		<button class="btn-start" href="/hotdogform">Order now &downarrow;</button>
	</div>
</template>

<script>
	import '../assets/button.css'
	export default {
		name: 'Banner'
	}
</script>

<style scoped>
	#main-banner {
		background-image: url('../img/hotdog-landscape.jpg');
		background-position: center;
		background-size: cover;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	#main-banner h1 {
		color: #fff;
		text-align: center;
		font-size: 60px;
		background-color: rgba(34, 34, 34, 0.6);
		padding: 20px 40px;
	}
</style>
