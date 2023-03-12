<template>
	<div id="hotdog-table">
		<Message :msg="msg" v-show="msg" />

		<div>
			<div id="hotdog-table-heading">
				<div class="order-id">#:</div>
				<div>Client:</div>
				<div>Bread:</div>
				<div>Sausage:</div>
				<div>Sauce:</div>
				<div>Toppings:</div>
				<div>Actions:</div>
			</div>
		</div>

		<div id="hotdog-table-rows">
			<div
				v-for="hotdog in hotdogs"
				:key="hotdog.id"
				class="hotdog-table-row"
			>
				<div class="order-number">{{ hotdog.id }}</div>
				<div>{{ hotdog.name }}</div>
				<div>{{ hotdog.bread }}</div>
				<div>{{ hotdog.sausage }}</div>
				<div>{{ hotdog.sauce }}</div>

				<div>
					<ul class="toppings-li">
						<li
							v-for="(toppings, index) in hotdog.toppings"
							:key="index"
						>
							{{ toppings }}
						</li>
					</ul>
				</div>

				<div>
					<select
						name="status"
						id="status"
						@change="updateHotdog($event, hotdog.id)"
					>
						<option value="">Select</option>

						<option
							v-for="s in status"
							:key="s.id"
							:value="s.type"
							:selected="hotdog.status == s.type"
						>
							{{ s.type }}
						</option>
					</select>
				</div>

				<button
					class="delete-btn"
					@click="deleteHotdog(hotdog.id)"
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Message from './Message.vue'

	export default {
		name: 'Dashboard',
		components: { Message },
		data() {
			return {
				hotdogs: [
					{
						name: "Aurelio Joseph",
						bread: "White Traditional",
						sausage: "Turkey and Chicken",
						sauce: "Chipotle",
						toppings: ["Caramelised Onions", "Spicy Chilli Cream", "Melted Cheese"],
						status: "Requested",
						id: 1
					},
					{
						name: "Robert de Niro",
						bread: "White with Sesame",
						sausage: "Traditional",
						sauce: "Barbecue",
						toppings: ["Crispy Onions", "Spicy Chilli Cream"],
						status: "Requested",
						id: 2
					},
					{
						name: "Thais Cintra",
						bread: "Australian",
						sausage: "Viena",
						sauce: "Homemade Ketchup with Fresh Tomatoes",
						toppings: ["Crispy Bacon", "Cucumber and Spring Onion"],
						status: "In Production",
						id: 3
					},
					{
						name: "Pedro Pedreira",
						bread: "Brioche",
						sausage: "Vegan",
						sauce: "Dijon Mustard",
						toppings: ["Guacamole", "Crispy Onions"],
						status: "Completed",
						id: 4
					}
				],
				hotdogs_id: null,
				status: [],
				msg: null
			}
		},
		// methods: {
		// 	async getOrders() {
		// 		const req = await fetch('http://localhost:3000/hotdogs');
		// 		const data = await req.json();
		// 		this.hotdogs = data;

		// 		// fetch status
		// 		this.getStatus();
		// 	},

		// 	async getStatus() {
		// 		const req = await fetch('http://localhost:3000/status');
		// 		const data = await req.json();
		// 		this.status = data;
		// 	},

		// 	async deleteHotdog(id) {
		// 		const req = await fetch(`http://localhost:3000/hotdogs/${id}`, {
		// 			method: 'DELETE',
		// 		});

		// 		const res = await req.json();

		// 		// insert system message
		// 		this.msg = `Order canceled successfully!`;

		// 		// clear system message
		// 		setTimeout(() => (this.msg = ''), 3000);

		// 		this.getOrders();
		// 	},

		// 	async updateHotdog(event, id) {
		// 		const option = event.target.value;

		// 		const dataJson = JSON.stringify({ status: option });

		// 		const req = await fetch(`http://localhost:3000/hotdogs/${id}`, {
		// 			method: 'PATCH',
		// 			headers: { 'Content-Type': 'application/json' },
		// 			body: dataJson,
		// 		});

		// 		const res = await req.json();

		// 		// insert system message
		// 		this.msg = `Order #${res.id} successfully updated to ${res.status}!`;

		// 		// clear system message
		// 		setTimeout(() => (this.msg = ''), 5000);
		// 	},
		// },
		// mounted() {
		// 	this.getOrders();
		// 	this.getStatus();
		// }
	}
</script>

<style scoped>
	#hotdog-table {
		max-width: 1250px;
		margin: 0 auto;
	}

	#hotdog-table-heading,
	#hotdog-table-rows,
	.hotdog-table-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	#hotdog-table-heading {
		font-weight: bold;
		padding: 12px;
		border-bottom: 3px solid #333;
	}

	#hotdog-table-heading div,
	.hotdog-table-row div {
		width: 14%;
	}

	.hotdog-table-row {
		font-size: 14px;
		width: 100%;
		padding: 12px;
		border-bottom: 1px solid #d9cdc1;
	}

	#hotdog-table-heading .order-id,
	.hotdog-table-row .order-number {
		width: 5%;
	}

	.toppings-li {
		margin-left: 20px;
	}

	select {
		padding: 12px 20px;
		font-family: inherit;
		border: none;
		color: #333;
		background-color: #f1e3d5e6;
		border-radius: 9px;
		box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
	}

	.delete-btn {
		display: inline-block;
		text-decoration: none;
		font-size: 12px;
		border-radius: 6px;
		border: none;
		font-family: inherit;
		padding: 6px 10px;
		cursor: pointer;
		transition: all 0.3s;
		background-color: #e67700;
		color: #4a0805;
		/* width: 10%; */
	}

	.delete-btn:hover {
		background-color: #931009;
		color: #fff;
	}
</style>