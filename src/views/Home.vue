<template>
	<div>
		<Banner />
		<div class="main-container">
			<h1>Customize your Hotdog:</h1>
			<HotdogForm />
		</div>
	</div>
</template>

<script>
	import Banner from '../components/Banner.vue'
	import HotdogForm from '../components/HotdogForm.vue'

	export default {
		name: 'Home',
		components: {
			Banner,
			HotdogForm,
		}
	}
</script>
