<script>
	const SITE_URL = "https://osmartti.github.io";
	const SITE_NAME = "Ossi Marttinen";

	export let title = "";
	export let description = "";
	export let publishDate = "";
	export let image = "";
	export let tags = [];
	export let slug = "";

	$: pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Portfolio`;
	$: canonicalUrl = slug ? `${SITE_URL}/#/blog/${slug}` : SITE_URL;

	$: jsonLd = title
		? JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: title,
				description: description,
				image: image,
				author: {
					"@type": "Person",
					name: SITE_NAME,
					url: SITE_URL
				},
				publisher: {
					"@type": "Person",
					name: SITE_NAME,
					url: SITE_URL
				},
				datePublished: publishDate,
				url: canonicalUrl,
				keywords: tags.join(", ")
			})
		: null;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description || "Ossi Marttinen's portfolio - Software developer and technology enthusiast showcasing projects, skills, and experience in web development and programming."} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content={title ? "article" : "website"} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content={title} />
	{/if}
	{#if publishDate}
		<meta property="article:published_time" content={publishDate} />
	{/if}
	{#each tags as tag(tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}

</svelte:head>
