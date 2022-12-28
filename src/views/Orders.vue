<template>
	<div class="main-container">
		<h1 class="heading">Manage Orders:</h1>
		<Dashboard />
	</div>
</template>

<script>
	import Dashboard from '../components/Dashboard.vue'

	export default {
		name: 'Orders',
		components: { Dashboard }
	}
</script>

<style scoped>
	.heading {
		margin-top: 120px;
	}
</style>
