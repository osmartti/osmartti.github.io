<script>
	import Card from "./Card.svelte";
</script>

<div id="personal">
	<div class="topic-container fade-in delay-1">
		<div>
			<h2 class="padded-title">Personal projects</h2>
			<Card
				title="Coming soon..."
				imageSrc="images/coming_soon.png"
				imageAlt="coming_soon"
				imageHref=""
				imageAriaLabel=""
				paragraph="A metroidvania game currently in development. More details coming soon."
				additionalText=""
				link=""
				linkText=""
			/>
			<Card
				title="Afloat"
				imageSrc="images/afloat_capsule.png"
				imageAlt="afloat_capsule"
				imageHref="https://store.steampowered.com/app/4232810/Afloat/"
				imageAriaLabel="View Afloat on Steam"
				paragraph="Afloat is a game about a penguin determined to travel to warmer climates. Once our heroic penguin hops 
                onto his trusty ice float and sets off toward the sunrise, all kinds of obstacles arise. You'll jump across shifting ice, dodge dangerous enemies, 
                shop for useful items, and meet quirky new friends along the way."
				additionalText="I created the game from scratch, including all the art, music, and sound effects. The game was built using the Godot engine. 
				This was a passion project of mine for several years. I learned a lot from it and I'm proud that I met met my own goal of releasing it on Steam."
				link="https://store.steampowered.com/app/4232810/Afloat/"
				linkText="Afloat Steam page"
			/>
			<Card
				title="KanjiStack"
				imageHref="https://osmartti.github.io/kanjistack/"
				imageSrc="images/kanjistack.png"
				imageAlt="KanjiStack project screenshot"
				imageAriaLabel="View KanjiStack project"
				paragraph="I created this application to support my own Japanese studies, focusing on kanji and vocabulary learning. It features around 2,200 of the 
				most common kanji, 7,000+ vocabulary entries, progress tracking, offline support, and more. Designed primarily for mobile use, it has become a tool I 
				regularly use throughout my Japanese studies."
				additionalText=""
				link="https://osmartti.github.io/kanjistack/"
				linkText="Start learning now!"
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
	<div class="topic-container fade-in delay-1">
		<div>
			<a
				href="https://buymeacoffee.com/oussdev"
				target="_blank"
				class="link"
			>
				<div class="social-link-container">
					<img src="images/bmc-logo.svg" alt="BuyMeACoffee logo" />
					<p>Want to support? Buy me a coffee!</p>
				</div>
			</a>
		</div>
	</div>
</div>
