## Learning Neovim

<img src="/images/nvim-learning/nvim-1.png" alt="nvim-1" class="md-image" />

### The start
I finally left VS Code for Neovim - but it has not been easy. I have been interested in learning to use these kind of text editors for quite some time. They have certain appeal to them: high customizability, lua plugin support and promises of productivity boost & incredible skill ceiling. I have been putting off learning nvim for a long time due to all kinds of other interests taking my time, but no longer.

Finally I had some inspiration, so I decided to refactor my portfolio website to use [Svelte](https://svelte.dev/) instead of plain HTML + CSS. For this task I challenged myself to switch from my cozy all-so-familiar VS Code to this new, scary and uncharted territory that is nvim.

In the following post I will describe how I started using nvim. I will tell what nvim version I decided to use, what plugins I installed and how I made the editor feel more cozy and tailored to my liking. At the end of this post I will conclude what were the pain points, what went well and what didn't.

### Installation & Configuration
Installation was rather straight forward. I am using Windows, so I opted to use chocolatey to install nvim:

```sh
    choco install nvim
```

#### The Lazy way
I didn't want to start from a blank slate, so I researched what kind of "pre-built" packages can I utilize. I decided on using [LazyVim](https://www.lazyvim.org/).

Lazy comes with numerous of useful tools, main ones being:
- Lazy.nvim
- Telescope
- Treesitter
- Mason

##### Lazy.nvim
[Lazy.nvim](https://github.com/folke/lazy.nvim) is the plugin manager for neovim. It provides poverful UI for managing, updating and configuring plugins.

##### Telescope
[Telescope](https://github.com/nvim-telescope/telescope.nvim) is a highly customizable, Lua-based fuzzy finder plugin for Neovim that allows you to efficiently find, filter, preview, and pick files, buffers, Git commits, LSP references, and more. It makes navigating the code base so much easier and searching files faster.
<img loading="lazy" src="/images/nvim-learning/telescope.png" alt="nvim-3" class="md-image" />

##### Treesitter
[Treesitter](https://github.com/nvim-treesitter/nvim-treesitter) is a plugin for enabling fast, syntax-aware code highlighting, folding and indentation.

##### Mason
[Mason](https://github.com/mason-org/mason.nvim) is Portable package manager for Neovim that allows users to easily install and manage external editor tooling—specifically LSP servers, DAP servers, linters, and formatters—directly within Neovim. I used mason for example to install svelte and eslint LSP servers.

#### Installing the thing
LazyVim was easy to install. All I needed to do was to go to their [installation site](https://www.lazyvim.org/installation) and clone the starter package:
```bash
  git clone https://github.com/LazyVim/starter ~/.config/nvim
```
Then afterwards I just removed the `.git` folder, so that I could add it to my own repository in the future.

After those steps I just used command `nvim` to open the editor and Voila!
<img loading="lazy" src="/images/nvim-learning/nvim-2.png" alt="nvim-2" class="md-image" />

### Applying themes
Of course themes are mandatory thing for enjoying the job. One of the first things I did after installing the editor was downloading new themes. I searched [this site](https://github.com/topics/neovim-colorscheme) for some themes. Once I found a theme that was to my liking (catppuccin in my case) I followed the instructions that was available in their github site.

Adding themes was easy. I created new file called `theme.lua` in my `nvim/lua/config` folder and pasted my themes code there:
<img loading="lazy" src="/images/nvim-learning/nvim-theming.png" alt="nvim-2" class="md-image" />

### Coding with nvim - the starter experience
Starting to code with nvim takes a lot of time to get used to and it is continuous learning. Here is a couple of differences that I think separates these two editors.

#### Modes
In nvim when editing a file you are in one of the four mode. The modes are `NORMAL`, `COMMAND`, `INSERT` or `VISUAL` mode. The editor behaves differently depending on what mode is enabled.

##### NORMAL
In normal mode you have ability to navigate around the code, delete, change, copy, paste and search. In this mode how ever you are not writing anything to the file. You are just moving around the code, navigating and manipulating it (delete, change, paste).

##### COMMAND
Command mode is used for, well as the name suggests, running commands. For example saving the file you are working on requires you to enter command mode. Also things like quitting the editor, replacing words in the file and running all other commands are done with this mode.

##### INSERT
In this mode you can normally write in the file that is active in the editor. VS Code feels like its constantly in this mode, and thats why it feels more user friendly. Basically the idea is to only be in insert mode when it is necessary to add text to the code and then switch back to normal mode.

##### VISUAL
Then there is visual mode where you can for example select a part of the code and copy it. After selecting the code you can for example delete, copy, change or cut it.

I think this was the biggest difference for me. It takes some time to get used to the different modes and learn their hotkeys, but learning as you go I think is the way to go here.

#### UI
In VS Code there is sidebars, clickable tabs, file trees showing, problems panel, etc. all ready for you to interact with mouse. In nvim there is none of that. You have to learn what command is used for what purpose. For example `:copen` opens a quickfix window which displays a list of errors and warnings, and `:buffers` shows you a list of active buffers (you could think of this as active files you have opened in your editor).

Learning the commands definitely takes some time to learn, but in my opinion it is fun to figure out what commands I need to solve the task at hand.

#### LSP + Plugins
In VS Code this is super simple: you just install ESLint extension for example and it is done. In neovim, you have to remember what is your package manager that handles your LSP plugins (in Lazys case it is Mason) and then run commands like `:Mason` and `:MasonInstall`.

Also in VS Code you can basically just download what ever extension you like in the extension tab. You click install and bam, it works. In neovim its a bit different. You choose a plugin you want to use, you go edit/create the lua files to add the plugin and then you can configure it. Sometimes you need to add some keymappings to access the plugins features.

This may sound cumbersome at first, but it becomes really intuitive later. There is also the benefits of customizability and configuration that VS Code does not offer. Also if you have hooked your lazy to git repository, you are actively storing your editor config on a repo that you can pull out on any machine any time.

#### Macros
In neovim you can use powerful macros that are just not available in VS Code. For example `d` stands for delete and with `$` you navigate to the end of the line. By combining these two `d$` you will delete text to the end of the line. Some more examples: `ci(` changes inside the parentheses, `2ciw` changes 2 next words and `5dd` deletes next 5 lines. These are just some really simple examples but you can understand how powerful these kind of macros are.

#### Coding example
Let's do a really simple coding example of some simple markdown file. Here is a simple editing flow inside nvim.

1. Open a file. I am in `NORMAL` mode.
2. By pressing `i` I will shift to `ÌNSERT` mode and type some text.
3. After I am done with the typing I press `ESC` to enter `NORMAL` mode again. But now I want to copy the some part of the row I have just added. I will enter `VISUAL` mode with `v` and select the part I want to edit.
So I have my empty file here and I am in `NORMAL` mode.
4. After highlighting the text I press `y` for yank (copy). After copying the editor shifts to `NORMAL` mode automatically. Then I just navigate to the place I want the new next to be and press `p` for paste.
5. Then by pressing `:` I enter `COMMAND` mode. I write the command `w` for write, efficiently saving the file.

<img loading="lazy" src="/images/nvim-learning/nvim-coding-example-1.png" alt="nvim-2" class="md-image" />

<img loading="lazy" src="/images/nvim-learning/nvim-coding-example-2.png" alt="nvim-2" class="md-image" />

<img loading="lazy" src="/images/nvim-learning/nvim-coding-example-3.png" alt="nvim-2" class="md-image" />

<img loading="lazy" src="/images/nvim-learning/nvim-coding-example-4.png" alt="nvim-2" class="md-image" />

<img loading="lazy" src="/images/nvim-learning/nvim-coding-example-5.png" alt="nvim-2" class="md-image" />

That was really simple example of editing a file in nvim. Its really about switching between the modes, using hotkeys and macros efficiently and constantly learning to be more efficient with the editor.

### Helpful commands for beginners

```
h, j, k, l <- left, down, up, down (arrow keys are also working)

i <- Insert mode
v <- visual mode
ESC <- back to normal mode
: <- command mode

w <- jump to next word
b <- jump back a word
e <- end of word

0 <- jump to beginning of line
$ <- jump to end of line
{ <- previous paragraph
( <- next paragraph

gg <- top of file
G <- bottom of file
50G <- go to line 50

d <- delete
dd <- delete line
y <- yank (copy)
yy <- yank line
p <- paste
c <- change (delete + insert mode)
u <- undo
Ctrl+r <- redo

dw <- delete word
d$ <- delete to end of line
d0 <- delete beginning of line

/text <- search forward
?text <- search backward
n <- next match
N <- previous match

:w <- write to file (save)
:q <- quit
:wq <- save and quit
:%s/text/text2/g <- replace text with text2 in file
```

You can always use command `:h` to open help.txt file. It contains really extensive user manuals for using and configuring nvim. Here I have listed some commands I have found useful for a beginner like me:
 
### Pushing the config to github
After all this I decided to push my config to github, so that I can easily pull it from any machine. I created new repository and pushed my configurations there. Now when I want to use nvim on another machine I just do folllowing steps:
```bash
choco install neovim
choco install tree-sitter

<cd to nvim config folder, for example: cd ~/.config or C:\Users\myUser\AppData\Local>
git clone https://github.com/osmartti/nvim-config.git nvim
```

### Conclusion
After one week, I can already feel small improvements. I rely less on the mouse and use hotkeys that are relevant. Still having a bit trouble using hjkl for navigation, but I am getting there. I have also learned to use some of the macros and they are really powerful.

Editing with Neovim requires muscle memory, and that only comes with repetition. My plan is to use Neovim exclusively for a few months and see whether it truly transforms my workflow. I will probably do another post afterwards about my experience.

Will it replace VS Code permanently? Too early to say. But now I start to understand why people fall in love with it.
