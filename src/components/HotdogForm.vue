<template>
	<div>
		<div>
			<form
				id="hotdog-form"
				@submit="createHotdog"
				>
				<div class="input-container">
					<label for="name">Full Name</label>
					<input
						type="text"
						id="name"
						v-model="name"
						placeholder="Type your name"
						required
					/>
				</div>
				<div class="input-container">
					<label for="bread">Choose your bread</label>
					<select
						id="bread"
						name
						required
						v-model="bread"
						>
						<option value="">Select your bread:</option>
						<option
							v-for="bread in breads"
							:key="bread.id"
							:value="bread.type"
							>
							{{ bread.type }}
						</option>
					</select>
				</div>
				<div class="input-container">
					<label for="sausage">Choose your sausage</label>
					<select
						id="sausage"
						name
						v-model="sausage"
						required
						>
						<option value="">Select your sausage:</option>
						<option
							v-for="sausage in sausages"
							:key="sausage.id"
							:value="sausage.type"
							>
							{{ sausage.type }}
						</option>
					</select>
				</div>
				<div class="input-container">
					<label for="sauce">Choose your sauce</label>
					<select
						id="sauce"
						name
						required
						v-model="sauce"
						>
						<option value="">Select your sauce:</option>
						<option
							v-for="sauce in sauces"
							:key="sauce.id"
							:value="sauce.type"
							>
							{{ sauce.type }}
						</option>
					</select>
				</div>
				<div id="toppings-container" class="input-container">
					<label
						id="toppings-title"
						for="toppings"
						>
						Choose your toppings:
					</label>
					<div
						v-for="topping in toppingsData"
						:key="topping.id"
						class="checkbox-container"
						>
						<input
							:value="topping.type"
							type="checkbox"
							name="toppings"
							v-model="toppings"
						/>
						<span>{{ topping.type }}</span>
					</div>
				</div>
				<div class="input-container">
					<input
						type="submit"
						class="btn-start"
						id="btn-make"
						value="Create my Hotdog!"
					/>
				</div>
			</form>
		</div>
		<Message :msg="msg" v-show="msg" />
	</div>
</template>

<script>
	import '../assets/button.css'
	import Message from './Message.vue'

	export default {
		name: 'HotdogForm',
		components: {
			Message
		},
		data() {
			return {
				breads: null,
				sausages: null,
				sauces: null,
				toppingsData: null,
				name: null,
				bread: null,
				sausage: null,
				sauce: null,
				toppings: [],
				msg: null
			}
		},
		methods: {
			async getIngredients() {
				const req = await fetch('http://localhost:3000/ingredients');
				// fetch at "db.json" file the 'ingredients' object

				const data = await req.json();
				// fetch inside the object each item according to 'id' and 'type'

				this.breads = data.breads;
				this.sausages = data.sausages;
				this.sauces = data.sauces;
				this.toppingsData = data.toppings;
			},

			// send the form data to the backend
			async createHotdog(e) {
				e.preventDefault();
				const data = {
					name: this.name,
					bread: this.bread,
					sausage: this.sausage,
					sauce: this.sauce,
					toppings: Array.from(this.toppings),
					status: 'Requested',
				};

				// converts the criated object into a Json format text string
				const dataJson = JSON.stringify(data);

				const req = await fetch('http://localhost:3000/hotdogs', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: dataJson,
				});

				const res = await req.json();

				// insert system message
				this.msg = `Order #${res.id} placed successfully!`;

				// clear system message
				setTimeout(() => (this.msg = ''), 3000);

				// clear the form
				this.name = '';
				this.breads = '';
				this.sausages = '';
				this.sauces = '';
				this.toppings = '';
			},
		},
		mounted() {
			this.getIngredients()
		}
	}
</script>

<style scoped>
	#hotdog-form {
		max-width: 400px;
		margin: 0 auto;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	label {
		font-weight: bold;
		margin-bottom: 15px;
		color: #333;
		padding: 5px 10px;
		border-left: 4px solid #931009;
	}

	input,
	select {
		padding: 12px;
		width: 300px;
		font-family: inherit;
		border: none;
		color: inherit;
		background-color: #f1e3d580;
		border-radius: 9px;
		box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
	}

	#toppings-container {
		flex-direction: row;
		flex-wrap: wrap;
	}

	#toppings-title {
		width: 100%;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
		width: 50%;
		margin-bottom: 20px;
	}

	.checkbox-container span,
	.checkbox-container input {
		font-size: 14px;
		width: auto;
	}

	.checkbox-container span {
		margin-left: 6px;
		font-weight: bold;
	}

	#btn-make {
		margin-top: 30px;
		padding: 12px 36px;
	}
</style>
