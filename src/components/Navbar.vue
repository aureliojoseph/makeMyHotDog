<template>
	<div id="nav">
		<RouterLink to="/" id="logo-url">
			<img :src="logo" :alt="alt" id="logo" />
		</RouterLink>
		<RouterLink to="/">Home</RouterLink>
		<hr />
		<RouterLink to="/orders">Orders</RouterLink>
		<hr />
		<RouterLink to="/contact">Contact</RouterLink>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		props: [
			'logo',
			'alt'
		]
	}
</script>

<style scoped>
	#logo {
		width: 40px;
		height: 40px;
	}

	#nav #logo-url {
		margin: auto;
		margin-left: 0;
	}

	#nav {
		background-color: #f1e3d5e6;
		padding: 15px 50px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
	}

	#nav a {
		color: #931009;
		text-decoration: none;
		margin: 12px;
		transition: all 0.3s;
	}

	#nav a:hover {
		color: #d49f9d;
	}

	hr {
		width: 0;
		height: 16px;
		border: 1px solid #931009;
	}
</style>
