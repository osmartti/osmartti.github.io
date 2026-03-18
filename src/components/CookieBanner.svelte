<script>
	const STORAGE_KEY = "cookie_consent";

	let visible = $state(localStorage.getItem(STORAGE_KEY) === null);

	function loadGA() {
		const script = document.createElement("script");
		script.async = true;
		script.src = "https://www.googletagmanager.com/gtag/js?id=G-QQNTTVYMBC";
		document.head.appendChild(script);

		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		window.gtag = gtag;
		gtag("js", new Date());
		gtag("config", "G-QQNTTVYMBC");
	}

	function accept() {
		localStorage.setItem(STORAGE_KEY, "accepted");
		loadGA();
		visible = false;
	}

	function decline() {
		localStorage.setItem(STORAGE_KEY, "declined");
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner">
		<p>
			This site uses Google Analytics to understand visitor traffic. No personal data is sold or
			shared with third parties.
			<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
				>Learn more</a
			>
		</p>
		<div class="cookie-banner-actions">
			<button class="btn-accept" onclick={accept}>Accept</button>
			<button class="btn-decline" onclick={decline}>Decline</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: rgb(35, 0, 35);
		color: rgb(225, 225, 225);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.85rem 2rem;
		z-index: 1000;
		font-family: Georgia, serif;
		font-size: 0.9rem;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.cookie-banner p {
		margin: 0;
		flex: 1;
	}

	.cookie-banner a {
		color: var(--hover-color, rgb(101, 131, 137));
	}

	.cookie-banner-actions {
		display: flex;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.btn-accept,
	.btn-decline {
		padding: 0.4rem 1.2rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-family: Georgia, serif;
		font-size: 0.9rem;
	}

	.btn-accept {
		background-color: var(--hover-color, rgb(101, 131, 137));
		color: white;
	}

	.btn-accept:hover {
		background-color: var(--active-button-color, rgb(91, 121, 127));
	}

	.btn-decline {
		background-color: transparent;
		color: rgb(225, 225, 225);
		border: 1px solid rgb(150, 150, 150);
	}

	.btn-decline:hover {
		border-color: rgb(225, 225, 225);
	}

	@media (max-width: 500px) {
		.cookie-banner {
			flex-direction: column;
			align-items: flex-start;
			padding: 0.85rem 1rem;
			gap: 0.75rem;
		}

		.cookie-banner-actions {
			width: 100%;
		}

		.btn-accept,
		.btn-decline {
			flex: 1;
		}
	}
</style>
