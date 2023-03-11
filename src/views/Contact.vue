<template>
	<div class="main-container">
		<h1 class="orders-heading">Contact us:</h1>
		<div class="contact-info">
			<div class="contact-col">
				<div class="visit-us">
					<RouterLink to="/" id="logo-url">
						<img :src="logo" :alt="alt" id="logo" />
					</RouterLink>
					<p>Make Your Hotdog &trade;</p>
				</div>

				<p class="contact-text">
					<img
						class="contact-icons"
						src="../img/icons/location-icon.svg"
						alt="location icon"
					/>

					<a
						class="link-icon"
						rel="noopener"
						target="_blank"
						href="https://goo.gl/maps/agv6mBb3iK28ynmX7"
						>
						Goiânia-GO, Brazil
					</a>
				</p>
			</div>

			<div class="contact-col">
				<p class="contact-text">
					<img
						class="contact-icons"
						src="../img/icons/phone-icon.svg"
						alt="smartphone icon"
					/>

					<a
						class="link-icon"
						rel="noopener"
						href="tel:55-62-98144-7999"
						>
						+55 62 98144-7999
					</a>
				</p>

				<p class="contact-text">
					<img
						class="contact-icons"
						src="../img/icons/mail-icon.svg"
						alt="mail icon"
					/>

					<a
						class="link-icon"
						rel="noopener"
						href="mailto: aurelioaborges@gmail.com"
						>
						aurelioaborges@gmail.com
					</a>
				</p>

				<p class="contact-text">
					<img
						class="contact-icons"
						src="../img/icons/browser-icon.svg"
						alt="browser icon"
					/>

					<a
						class="link-icon"
						rel="noopener"
						href="https://aureliojoseph.github.io/landing-page-2.0_eng"
						>
						My Portfolio
					</a>
				</p>
			</div>

			<div class="contact-col">
				<p class="social-heading">Social</p>
				<ul class="icon-list">
					<li>
						<a
							class="link-icon"
							rel="noopener"
							href="https://www.linkedin.com/in/aurelioaborges/"
							target="_blank"
							>

							<img
								class="contact-icons"
								src="../img/icons/linkedin-icon.svg"
								alt="linkedin icon"
							/>
						</a>
					</li>

					<li>
						<a
							class="link-icon"
							rel="noopener"
							href="https://github.com/aureliojoseph"
							target="_blank"
							>

							<img
								class="contact-icons"
								src="../img/icons/github-icon.svg"
								alt="github icon"
							/>
						</a>
					</li>

					<li>
						<a
							class="link-icon"
							rel="noopener"
							href="https://www.instagram.com/aureliojoseph/"
							target="_blank"
							>

							<img
								class="contact-icons"
								src="../img/icons/instagram-icon.svg"
								alt="instagram icon"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
		data() {
			return {
				logo: '../img/icons/favicon.ico',
				alt: 'Make your hotdog'
			}
		}
	}
</script>

<style scoped>
	.orders-heading {
		margin-top: 120px;
	}

	.social-heading {
		font-family: inherit;
		font-size: 24px;
		line-height: 18px;
		font-weight: 600;
		color: #333;
		text-align: center;
	}

	.contact-info {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 48px;
		justify-items: center;
		align-items: center;
		max-width: 1000px;
		margin: 70px auto;
	}

	.contact-col {
		display: flex;
		flex-direction: column;
		gap: 32px;
		font-family: inherit;
	}

	.visit-us {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		color: #373737;
	}

	#logo {
		width: 48px;
		height: 48px;
	}

	.icon-list {
		list-style: none;
		display: flex;
		gap: 24px;
	}

	.contact-icons {
		width: 36px;
		height: 36px;
		filter: invert(40%) sepia(84%) saturate(1634%) hue-rotate(14deg)
			brightness(103%) contrast(104%);
	}

	.link-icon:link,
	.link-icon:visited {
		display: inline-block;
		font-size: 16px;
		line-height: 1.8;
		text-decoration: none;
		color: #373737;
		padding-bottom: 2px;
		line-height: 0.9;
		transition: all 0.3s;
		cursor: pointer;
	}

	.link-icon:hover,
	.link-icon:active {
		color: #afafaf;
	}
</style>