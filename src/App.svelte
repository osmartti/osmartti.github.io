<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import HomeSection from "./components/HomeSection.svelte";
  import WorkProjectsSection from "./components/WorkProjectsSection.svelte";
  import PersonalProjectsSection from "./components/PersonalProjectsSection.svelte";
  import Blog from "./components/Blog.svelte";
  import BlogPost from "./components/BlogPost.svelte";
  import Footer from "./components/Footer.svelte";
  const routes = {
    "/": HomeSection,
    "/work": WorkProjectsSection,
    "/projects": PersonalProjectsSection,
    "/posts": Blog,
    "/blog/:slug": BlogPost,
  };
</script>

<div>
  <div class="container">
    <Header />
    <div class="content">
      <Router {routes} />
    </div>
    <Footer />
  </div>
</div>
