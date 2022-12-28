<template>
	<div class="msg-container">
		{{ msg }}
	</div>
</template>

<script>
	export default {
		name: 'Message',
		props: {
			msg: String
		}
	}
</script>

<style scoped>
	.msg-container {
		color: #2b3f9f;
		background-color: #ebedf9;
		border: 2px solid #d7dcf4;
		border-radius: 5px;
		padding: 10px;
		max-width: 400px;
		margin: 30px auto;
		text-align: center;
	}
</style>
