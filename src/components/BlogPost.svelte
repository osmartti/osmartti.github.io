<script>
	import { marked } from "marked";
	import { params } from "svelte-spa-router";

	let content = "";
	let publish_date = "";
	let read_time = "";
	const posts = {
		nvim_learning: {
			filename: "nvim-learning.md",
			publish_date: "2026/02/26",
			read_time: "5"
		},
		godot_steam_achievements: {
			filename: "godot-steam-achievements.md",
			publish_date: "2026/03/10",
			read_time: "10"
		}
	};

	async function loadPost(slug) {
		const key = slug.replaceAll("-", "_");
		const post = posts[key];
		if (!post?.filename) {
			content = "# Post not found";
			publish_date = "";
			read_time = "";
			return;
		}
		publish_date = post.publish_date;
		read_time = post.read_time;
		try {
			const res = await fetch(`/posts/${slug}/${post.filename}`);
			content = marked.parse(await res.text());
		} catch {
			content = "# Post not found";
		}
	}

	$: slug = $params?.slug;
	$: if (slug) loadPost(slug);
</script>

<div class="fade-in delay-1 blog-post">
	<i>{publish_date} - {read_time} min read</i>
	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html content}
</div>
