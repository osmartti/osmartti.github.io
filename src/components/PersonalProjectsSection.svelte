<script>
	import Card from "./Card.svelte";
</script>

<div id="personal">
	<div class="topic-container fade-in delay-1">
		<div>
			<h2 class="padded-title">Personal projects</h2>
			<Card
				title="afloat"
				imageSrc="images/afloat_capsule_3.png"
				imageAlt="afloat_capsule"
				imageHref=""
				imageAriaLabel=""
				paragraph="Afloat is a game about a penguin determined to travel to warmer climates. Once our heroic penguin hops 
                onto his trusty ice float and sets off toward the sunrise, all kinds of obstacles arise. You'll jump across shifting ice, dodge dangerous enemies, 
                shop for useful items, and meet quirky new friends along the way."
				additionalText="I created all the art, music, and most of the sound effects myself, as well as did all the coding. 
                Afloat is built using the Godot engine. This has been my passion project for several years, and I’ve poured my heart into every part of it."
				link=""
				linkText=""
			/>
			<Card
				title="pomodoro"
				imageHref="https://github.com/osmartti/pomodoro"
				imageSrc="images/pomodoro.png"
				imageAlt="Pomodoro project screenshot"
				imageAriaLabel="View pomodoro project on GitHub"
				paragraph="Stay focused and level up your productivity — right from your terminal! Track your Pomodoro sessions with ease, monitor daily and weekly progress, and earn XP as you study or work. 
                    It’s more than just a timer — it's a full productivity companion."
				additionalText=""
				link="https://github.com/osmartti/pomodoro"
				linkText="Get the tool from here!"
			/>
			<Card
				title="gitdiff"
				imageHref="https://github.com/osmartti/gitdiff"
				imageSrc="images/gitdiff.png"
				imageAlt="Gitdiff project screenshot"
				imageAriaLabel="View gitdiff project on GitHub"
				paragraph="Bored of reading news from the news sites like a normal person? Now you can read any news source with an RSS feed — right from your terminal!
                    The news is cleverly disguised to look like a regular <code>git diff</code> command, so no one will find out that you are actually reading news instead of working!"
				additionalText=""
				link="https://github.com/osmartti/gitdiff"
				linkText="Check it out here!"
			/>
		</div>
	</div>
</div>
