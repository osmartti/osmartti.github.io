<script>
	import { marked } from "marked";
	import { params } from "svelte-spa-router";
	import SEO from "./SEO.svelte";

	let content = "";
	let currentPost = null;
	const posts = {
		nvim_learning: {
			filename: "nvim-learning.md",
			title: "Learning neovim while refactoring my website",
			description: "How I challenged myself to switch from VS Code to Neovim while refactoring my portfolio site with Svelte — covering installation, LazyVim, plugins, and lessons learned.",
			publish_date: "2026-02-26",
			image: "https://osmartti.github.io/images/nvim-learning/nvim-2.png",
			read_time: "5",
			tags: ["neovim", "vim", "svelte", "productivity"]
		},
		godot_steam_achievements: {
			filename: "godot-steam-achievements.md",
			title: "Adding Steam achievements to my Godot game",
			description: "A step-by-step walkthrough of integrating the Steamworks SDK into a Godot 4 game to unlock Steam achievements, covering the GodotSteam plugin setup and achievement API calls.",
			publish_date: "2026-03-10",
			image: "https://osmartti.github.io/images/godot-steam-achievements/godot_plus_steam.png",
			read_time: "10",
			tags: ["godot", "steam", "game-development", "gdscript"]
		},
		sapui5_optimization: {
			filename: "sapui5-optimization.md",
			title: "Performance optimization of a SAPUI5 application",
			description: "Real-world techniques for diagnosing and fixing performance bottlenecks in a SAP Fiori / SAPUI5 application, including lazy loading, OData request tuning, and UI rendering improvements.",
			publish_date: "2026-03-16",
			image: "https://osmartti.github.io/images/sapui5-optimization/sapui5-optimization-card.jpg",
			read_time: "10",
			tags: ["sapui5", "fiori", "performance", "sap"]
		}
	};

	async function loadPost(slug) {
		const key = slug.replaceAll("-", "_");
		const post = posts[key];
		if (!post?.filename) {
			content = "# Post not found";
			currentPost = null;
			return;
		}
		currentPost = post;
		try {
			const res = await fetch(`/posts/${slug}/${post.filename}`);
			content = marked.parse(await res.text());
		} catch {
			content = "# Post not found";
			currentPost = null;
		}
	}

	$: slug = $params?.slug;
	$: if (slug) loadPost(slug);
</script>

{#if currentPost}
	<SEO
		title={currentPost.title}
		description={currentPost.description}
		publishDate={currentPost.publish_date}
		image={currentPost.image}
		tags={currentPost.tags}
		{slug}
	/>
{/if}

<div class="fade-in delay-1 blog-post">
	<i>{currentPost?.publish_date ?? ""} - {currentPost?.read_time ?? ""} min read</i>
	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html content}
</div>
