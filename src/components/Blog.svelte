<script>
	import BlogCard from "./BlogCard.svelte";

	const posts = [
		{
			title: "Learning neovim while refactoring my website",
			description:
				"How I challenged myself to switch from VS Code to Neovim while refactoring my portfolio site with Svelte — covering installation, LazyVim, plugins, and lessons learned.",
			folder: "nvim-learning",
			slug: "nvim-learning",
			imageSrc: "images/nvim-learning/nvim-2.png",
			imageAlt: "learning neovim",
			date: "2026/02/26",
			tags: ["neovim", "vim", "svelte", "productivity"]
		},
		{
			title: "Adding Steam achievements to my Godot game",
			description:
				"A step-by-step walkthrough of integrating the Steamworks SDK into a Godot 4 game to unlock Steam achievements, covering the GodotSteam plugin setup and achievement API calls.",
			folder: "godot-steam-achievements",
			slug: "godot-steam-achievements",
			imageSrc: "images/godot-steam-achievements/godot_plus_steam.png",
			imageAlt: "Adding Steam achievements to my Godot game",
			date: "2026/03/10",
			tags: ["godot", "steam", "game-development", "gdscript"]
		}
	];
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<div id="blog" class="blog fade-in delay-1">
	<h2 class="padded-title">Posts</h2>
	<div class="topic-container">
		<div class="blog-card-container">
			{#each posts as post (post.title)}
				<BlogCard
					title={post.title}
					imageSrc={post.imageSrc}
					imageAlt={post.imageAlt}
					path={`#/blog/${post.slug}`}
				/>
			{/each}
		</div>
	</div>
</div>
