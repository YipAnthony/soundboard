# Soundboard
Virtual soundboard triggered by keyboard numberpad keystrokes. Preloaded soundbar allows users to select from various sound types and instruments. 

[Link](https://themddropout.com/projects/soundboard/)

<img src="/images/soundboard1.png" width="400"/> <img src="/images/soundboard2.png" width="400"/>

## Instructions
The soundboard is designed to mimic the layout of a keyboard numberpad. Pressing a number on your keyboard will activate the corresponding box on the soundboard.

##### Navigating the soundbar
The soundbar is located to the left of the soundboard. The main panel allows for four initial selections: drums, instruments, synthesizer, and vocals. Selecting one of these will expand the soundbar to reveal various sound options. The expanded panel contains subcategories, which are located at the top. Selecting the sub-categories will reveal additional sound options. 

##### Loading in sounds from the soundbar
Once you have located a sound, simply drag/drop it onto the soundboard. Try pressing the corresponding keyboard number to activate the sound!

##### Changing volume/speed
Once you have loaded a sound onto the soundboard, you can further customize individual sounds by changing the volume/speed. To access these settings, click on the settings icon located on the bottom left of corresponding sound. This will bring up a local panel where you can adjust the volume or speed. Click the back icon (located at the bottom right of the sound) to close out the settings panel. 

##### Deleting sounds
Delete sounds by clicking the trash icon located at the bottom right of each sound. Alternatively, if you wish to clear out the entire soundboard, simply click on the 'X' clear icon located below the soundboard. 

## Personal Notes
This project was made during my 3rd week of starting The Odin Project. 
##### Skills practiced 
The main purpose of this project was to practice DOM manipulation & using Event Handlers. I also wanted to further practice HTML and CSS (grid, flexbox, animations) skills by making a more visually appealing minimalist UI. Additionally, I implemented 'dark theme' concepts that I learned from "Material Design". 
##### Encountered problems & skills to work on
Largest issue with this project was the spaghetti code. I had an incredibly difficult time navigating the various functions as the script grew larger. After finishing the project, I started to learn about Javascript modular patterns. I plan to implement more structured patterns into future projects. 

Another issue was function redundancy. In the future, I plan to use modular patterns to organize my functions. Also plan to keep functions to one task only. Currently, single functions perform large tasks which then become difficult to read and troubleshoot. 

A minor issue I initially encountered was adding and removing children from nodes. It turns out that '...remove.LastChild' & '...remove.LastElementChild' are very different. Specifically, '...remove.FirstChild' may occasionally target an unintended text node.

