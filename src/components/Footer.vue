<template>
	<footer id="footer">
		<RouterLink to="/" id="logo-url">
			<img src="../img/icons/favicon.ico" :alt="alt" id="logo" />
		</RouterLink>

		<p>Copyright &copy; {{ currentYear }} by Aurelio Borges</p>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: [
			'alt'
		],
		computed: {
			currentYear() {
				return new Date().getFullYear()
			}
		}
	}
</script>

<style scoped>
	#logo {
		width: 40px;
		height: 40px;
	}

	#footer {
		padding: 50px 0 50px;
		background-color: #f1e4d6;
		border-top: 1px solid #d9cdc1;
		color: #931009;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		bottom: 0;
		margin-top: 250px;
	}
</style>