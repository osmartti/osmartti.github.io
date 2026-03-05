<script>
  import { link, location } from "svelte-spa-router";
</script>

<div role="banner" class="header fade-in delay-1">
  <div role="navigation" class="header-button-container">
    <a use:link class:active={$location == "/"} href="/" class="nav-button"
      >Home</a
    >
    <a
      use:link
      class:active={$location == "/work"}
      href="/work"
      class="nav-button">Work & Skills</a
    >
    <a
      use:link
      class:active={$location == "/projects"}
      href="/projects"
      class="nav-button">Personal projects</a
    >
    <a
      use:link
      class:active={$location == "/posts"}
      href="/posts"
      class="nav-button">Posts</a
    >
  </div>
  <div style="margin-bottom: 1em;">
    {#if !$location.includes("/blog")}
      <div class="header-title"></div>
    {/if}
  </div>
</div>
