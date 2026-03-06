<script>
  import { link } from 'svelte-spa-router';
  let { 
  	title,
  	imageSrc,
  	imageAlt,
  	path
  } = $props();
</script>

<div class="blog-card fade-in-text delay-2">
    <a use:link href={path}><img src={imageSrc} alt={imageAlt} /></a>
    <p class="fade-in delay-2">{title}</p>
</div>

