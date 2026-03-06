<script>
	let {
		title,
		imageSrc,
		imageHref,
		imageAriaLabel,
		imageAlt,
		paragraph,
		additionalText,
		link,
		linkText
	} = $props();
</script>

<div class="project-container">
	<h3 class="fade-in delay-2">{title}</h3>
	{#if imageHref && imageAriaLabel}
		<a href={imageHref} target="_blank" aria-label={imageAriaLabel}
			><img class="fade-in delay-3" src={imageSrc} alt={imageAlt} /></a
		>
	{:else}
		<img src={imageSrc} alt={imageAlt} />
	{/if}

	<!-- eslint-disable svelte/no-at-html-tags -->
	<p class="fade-in-text delay-3">{@html paragraph}</p>
	{#if additionalText}
		<!-- eslint-disable svelte/no-at-html-tags -->
		<p class="fade-in-text delay-3">{@html additionalText}</p>
	{/if}
	{#if link && linkText}
		<p><br /><a href={link} target="_blank">{linkText}</a></p>
	{/if}
</div>
