<script>
  import BlogCard from "./BlogCard.svelte";

  const posts = [
    {
      title: "Learning neovim while refactoring my website",
      folder: "nvim-learning",
      slug: "nvim-learning",
      imageSrc: "images/nvim-2.png",
      imageAlt: "test",
    },
  ];
</script>

<div id="blog" class="blog fade-in delay-1">
  <h2>Posts</h2>
  <div class="topic-container">
    <div class="blog-card-container">
      {#each posts as post}
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
