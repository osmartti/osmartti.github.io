<script>
	import BlogCard from "./BlogCard.svelte";

	const posts = [
		{
			title: "Learning neovim while refactoring my website",
			folder: "nvim-learning",
			slug: "nvim-learning",
			imageSrc: "images/nvim-2.png",
			imageAlt: "learning neovim",
			date: "2026/02/26"
		},
		{
			title: "Adding Steam Achievements to my Godot Game",
			folder: "godot-steam-achievements",
			slug: "godot-steam-achievements",
			imageSrc: "images/godot_plus_steam.png",
			imageAlt: "Adding Steam Achievements to my Godot Game",
			date: "2026/03/10"
		}
	];
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<div id="blog" class="blog fade-in delay-1">
	<h2>Posts</h2>
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
