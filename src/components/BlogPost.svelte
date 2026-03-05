<script>
  import { marked } from "marked";
  import { params } from "svelte-spa-router";

  let content = "";
  let publish_date = "";
  let read_time = "";
  const posts = {
    nvim_learning: {
      filename: "nvim-learning.md",
      publish_date: "2026/02/2026",
      read_time: "5",
    },
  };
  // reactive store subscription
  $: slug = $params?.slug;

  // reactive fetch whenever slug changes
  $: if (slug) {
    const filename = posts[slug.replace("-", "_")]["filename"];
    if (!filename) {
      content = "# Post not found";
      publish_date = "";
      read_time = "";
    } else {
      publish_date = posts[slug.replace("-", "_")]["publish_date"];
      read_time = posts[slug.replace("-", "_")]["read_time"];
      fetch(`/posts/${slug}/${filename}`)
        .then((res) => res.text())
        .then((text) => (content = marked.parse(text)))
        .catch(() => (content = "# Post not found"));
    }
  }
</script>

<div class="fade-in delay-1 blog-post">
  <i>{publish_date} - {read_time} min read</i>
  {@html content}
</div>
