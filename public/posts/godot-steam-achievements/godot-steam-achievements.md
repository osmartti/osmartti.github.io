## Godot Steam Achievements

<img src="/images/godot_splash_screen_original_logo_dark.png" alt="godot-splash" class="md-image" />

### Introduction
I have been developing my game Afloat for a while now, and since the game release is getting closer, I wanted to implement Steam Achievements in the game. I have been using Godot as my game engine for the entirety of the development, and I wanted to share my experience with implementing Steam Achievements in Godot. In this blog post, I will go through the steps I took to implement Steam Achievements.

### Semantics

#### What is Godot
[Godot](https://godotengine.org/) is a free and open-source game engine that provides a comprehensive set of tools for game development. It supports both 2D and 3D game creation, making it a versatile choice for developers. With its user-friendly interface and powerful features, Godot has gained popularity among indie developers and hobbyists alike.

I have been developing my game Afloat with Godot for 2 years now. I have been liking Godot a lot. Open-source aspect is really nice, and the community seems to be really helpful. Also the engine is easy to use and has great documentation. Maybe I will create a blog post about my journey with Godot in the future, but in this post I will focus on the steam integration part.

I have used Godot 4.4.1 for the project, but the implementation should be similar for other versions of Godot as well.

#### What are Steam achievements?
[Steam Achievements](https://partner.steamgames.com/doc/features/achievements) are a feature of the Steam platform that allows game developers to create in-game accomplishments for players to earn. These achievements can be used to enhance player engagement, encourage exploration, and provide a sense of accomplishment. Players can view their earned achievements on their Steam profile, and they can also share them with friends.

For my game I wanted to implement Steam Achievements to provide players a sense of accomplishment. I know that there a some people who are really interested in completing all of the achievements in a game, so I wanted to also provide that opportunity in my game. For my case I first implemented around 10 achievements varying from easy to hard.

Without further ado, let's get into the implementation part.

### GodotSteam plugin
First of all, I needed to find a way to integrate Steamworks API with Godot. After some research, I found the [GodotSteam](https://godotengine.org/asset-library/asset/2445) plugin, which is a wrapper around the Steamworks API for Godot. This plugin provides a set of functions that allow you to interact with the Steamworks API, including functions for managing achievements.

To use the plugin, I simply clicked `AssetLib` tab in the Godot engine and searched for "Godot Steam". Then I downloaded it from the Godot Asset Library and added it to my project.

<img src="/images/godot_steam_integration.png" alt="godot-steam-integration" class="md-image" />

After downloading the plugin usually you need to go to `Project Settings` tab of your editor and add the path to the plugin in the `Plugins` section. However, in this case, the plugin was added to my project without any issues, so I didn't have to do anything else.

### Implementing achievements in Godot
After adding the plugin to my project, I needed to implement the logic for unlocking achievements in my game.

I created a new script called `SteamHandler.gd` in my `autoloads` folder. This script will be responsible for handling all the interactions with the Steamworks API, including unlocking achievements. After creating the script I added it to the `autoloads` section of the project settings, so it will be available globally in my game.

For the script I needed to find out what was my game's `App ID` in order to set the environment variables correctly. I found my game's `App ID` in the `General` section of my game's dashboard in Steamworks.

<img src="/images/steam_app_id.png" alt="app_id" class="md-image" />

In the script I added `_init` and `_ready` functions to initialize some required variables and to initialize the connection to Steamworks API. 

```gdscript
extends Node

var APP_ID = "4232810"

func _init():
	OS.set_environment("SteamAppID", APP_ID)
	OS.set_environment("SteamGameID", APP_ID)

func _ready():
	Steam.steamInit()
	if !_is_steam_running():
		return
	print("Steam is running!")
	print("Username:", Steam.getPersonaName())

func _is_steam_running() -> bool:
	if !Steam.isSteamRunning():
		print("ERROR: Steam not running")
	return Steam.isSteamRunning()
```

Then I created a function called `unlock_steam_achievement` which takes achievement ID as a parameter and unlocks the achievement if it is not already unlocked.

```gdscript
extends Node

var APP_ID = "4232810"

func _init():
	OS.set_environment("SteamAppID", APP_ID)
	OS.set_environment("SteamGameID", APP_ID)

func _ready():
	Steam.steamInit()
	if !_is_steam_running():
		return
	print("Steam is running!")
	print("Username:", Steam.getPersonaName())

func unlock_steam_achievement(id: String):
	if !_is_steam_running():
		return
	var status = Steam.getAchievement(id)
	if status["achieved"]:
		print("Already unlocked")
		return
	Steam.setAchievement(id)
	print("unlocked achievement: ", str(id))
	Steam.storeStats()

func _is_steam_running() -> bool:
	if !Steam.isSteamRunning():
		print("ERROR: Steam not running")
	return Steam.isSteamRunning()
```

### Creating achievements in Steamworks
After implementing the logic for unlocking achievements in my game, I needed to create the achievements in the Steamworks dashboard. I went to the `Achievements` section of my game's dashboard and created achievements with different requirements and descriptions.

Achievements have properties such as `API Name`, `Display Name`, `Description`, and `Hidden`. The `API Name` is the unique identifier for the achievement that I will use in my code to unlock it. The `Display Name` is the name that will be shown to players when they earn the achievement. The `Description` is a brief explanation of what the achievement is for. The `Hidden` property determines whether the achievement is visible to players before they earn it. For now I don't have any hidden achievements in my game, but I might add some in the future.

<img src="/images/achievement_steam.png" alt="achievemenet_steam" class="md-image" />

They also have an icon that is shown to players when they earn the achievement. Those icons I created next.

### Creating achievement sprites
Since my game is a pixel art game, I wanted to create icons that match the art style. For that I used a tool called [Asesprite](https://www.aseprite.org/)
which is a pixel art tool that allows you to create sprites and animations.

I wanted my achievement icons to be 64x64 pixels, so I created a new sprite with size of 128x64, which allowed me to have two versions of each icon; one for the unlocked version and one for the locked version of the achievement.

<img src="/images/achievement_example.png" alt="achievement_example" class="md-image" />

After creating first icons, I added more icons for the rest of the achievement in the same image.

<img src="/images/achievement_whole.png" alt="achievement_whole" class="md-image" />

Then I created a `lua` script for splitting and exporting the icons. This is completely optional step, but I made it so it is easier to export the icons in the future if I need to make some changes to them. The script takes the original sprite and splits it into 64x64 icons and saves them as separate `PNG` files.

```lua
local spr = app.activeSprite
if not spr then
  app.alert("No active sprite!")
  return
end

local width = spr.width
local height = spr.height

if width ~= 128 then
  app.alert("Sprite width must be 128 pixels.")
  return
end

local rows = height / 64
local path = spr.filename

if path == "" then
  app.alert("Please save the sprite first.")
  return
end

local dir = app.fs.filePath(path)
local base = app.fs.fileTitle(path)

for i=0,rows-1 do
  local y = i * 64

  -- unlocked
  local unlocked = Sprite(64,64)
  unlocked.cels[1].image:drawSprite(spr,1,0,-y)

  local unlocked_name = dir.."/"..base.."_"..i.."_unlocked.png"
  unlocked:saveCopyAs(unlocked_name)
  unlocked:close()

  -- locked
  local locked = Sprite(64,64)
  locked.cels[1].image:drawSprite(spr,1,-64,-y)

  local locked_name = dir.."/"..base.."_"..i.."_locked.png"
  locked:saveCopyAs(locked_name)
  locked:close()
end

app.alert("Achievements exported!")
```

After running the script I got the icons for each achievement and I uploaded them to the Steamworks dashboard.

### Publishing achievements
After I had uploaded the icons for each achievement and saved the changes, I still needed to publish the Achievements in order for them to be visible for players. To publish my changes I went to `Publish` tab of Steamworks dashboard and clicked the `Publish` button.

<img src="/images/achievement_steam_2.png" alt="publish_steam" class="md-image" />

### Testing achievements
After all the steps were completed I proceeded to test the achievement in my game. Now that the Steam integration was implemented, I could connect to Steam even when I ran the game from the Godot editor. I ran the game and unlocked some achievements to see if they were working correctly.

<img src="/images/steam_achievement_1.png" alt="steam_achievement_1" class="md-image" />

After unlocking the achievements, I checked my Steam profile to see if they were displayed correctly.

<img src="/images/steam_achievement_2.png" alt="steam_achievement_2" class="md-image" />

### Conclusion
Implementing Steam achievements in my game was a great learning experience. It allowed me to learn how to integrate Steamworks API with Godot and how to create and manage achievements in the Steamworks dashboard. I am happy how this turned out and I hope my achievements are not too difficult to unlock for the players. :)

If you are creating a game with Godot and you want to implement Steam achievements, I highly recommend using the GodotSteam plugin. It provides a simple and easy-to-use interface for interacting with the Steamworks API, and it made the implementation process much smoother for me.

#### Resources
- [Godot Engine](https://godotengine.org/) - official website for the Godot game engine
- [GodotSteam Plugin](https://godotengine.org/asset-library/asset/2445) - plugin for integrating Steamworks API with Godot
- [Steamworks API](https://partner.steamgames.com/doc/features/achievements) - official documentation for Steam achievements
- [Asesprite](https://www.aseprite.org/) - Software for creating pixel art and animations
- [Godot steam integration tutorial](https://www.youtube.com/watch?v=l0b5mh2HjyE) - great video tutorial from Gwizz about Steam integration in Godot
- [Godot steam achievements](https://www.youtube.com/watch?v=dg6fSBe5EEE) - great & short video tutorial from Gwizz about implementing Steam achievements in Godot
