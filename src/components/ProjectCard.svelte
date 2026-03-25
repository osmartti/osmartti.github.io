<script>
	let { title, date, description, tags } = $props();
	// svelte-ignore state_referenced_locally
	const tagsArray = tags.split(",");
</script>

<div class="work-project">
	<div class="project-tags-container">
		{#each tagsArray as tag (tag)}
			<p class="project-tag">{tag}</p>
		{/each}
	</div>
	<h3>{title}</h3>
	<h4>{date}</h4>
	<p>{description}</p>
</div>
