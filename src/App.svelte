<script>
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import HomeSection from "./components/HomeSection.svelte";
  import WorkProjectsSection from "./components/WorkProjectsSection.svelte";
  import PersonalProjectsSection from "./components/PersonalProjectsSection.svelte";
  import Blog from "./components/Blog.svelte";
  import BlogPost from "./components/BlogPost.svelte";
  import Footer from "./components/Footer.svelte";
  import CookieBanner from "./components/CookieBanner.svelte";

  const routes = {
  	"/": HomeSection,
  	"/work": WorkProjectsSection,
  	"/projects": PersonalProjectsSection,
  	"/posts": Blog,
  	"/blog/:slug": BlogPost
  };

  // If user previously accepted, load GA immediately on page load
  if (localStorage.getItem("cookie_consent") === "accepted") {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QQNTTVYMBC";
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-QQNTTVYMBC");
  }
</script>

<div>
  <div class="container">
    <Header />
    <div class="content">
      <Router {routes} />
    </div>
    <Footer />
  </div>
  <CookieBanner />
</div>
