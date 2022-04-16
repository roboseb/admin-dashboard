# admin-dashboard
Admin dashboard project for The Odin Project.

Current Features:

-Scrollable sections, replacing the typical scrollbar with dynamic shadows that let you know if you've reached
 the top or the bottom of a section.

-Responsive columns and rows for the main feed.

-Responsive layout that looks great on any desktop screen ratio

-See more text for overflowing text panels in feed

-Dark mode button

-Animated buttons and input

-Kurippi virtual assistant



---Devlog---

April 14th 2022

	Yeesh, on day three or four of this project, well over ten hours in. Maybe fifteen or so at this point. Just 
wrote out the list of features so far and it includes only three points, which is slightly depressing, although I did spend some time yesterday making black and white icons for the Top Waifus section. I also made a clippy-like mascot that I have since scrapped in favour of a new one I made last night. Probably will add the old one as an easter egg somewhere. As a joke. because it's that ugly.

	The shadow thing I implemented looks nice. Wasn't that hard to get implemented most of the way, but I kept running into fringe cases where they wouldn't work as someone coming to the site might expect. So I kept adding to my abomination of if statements until I decided it looks stupid and still wasn't working anwyway. Eventually I scrapped the three functions I had for a single function that simply takes a variable which section you are scrolling. Easy enough to add more of these if needed, but I can't help the feeling that there are likely far simpler ways to implement this feature with objects or something. Whatever, it works as intended in all cases from what I can see and I might even say I'm proud of it.

	Similar story with the responsive feed panels. TOP goes pretty in depth into using auto-fit and minmax() so the columns were easy to do, but the rows were another story. Auto-fit doesn't work on rows in my case because that section is scrollable and everything else is basically fixed in place. So I spent a handful of hours engineering my own auto-fit. Started with fiddling around in the css, and I'm pretty sure there is a solution there, I'm just not sure what it is. Once I turned to JS it was pretty easy to make it expand properly in all cases.

	The shadows and dynamic panels may not look like much to anyone just peeking at the site, but they're pretty damn responsive to window sizing and scrolling. Shadows are always checking to see if you're at the top or bottom, but in just resizing the window they also either fade in or out if content overflows the section or is able to fit all in without the need to scroll. The feed grid isn't hard-coded in any way, so theoretically you can add as many panels as you like with no issue. May look strange with fewer than four or five depending on your resolution, will have to work on that.

	The two big features work pretty much as intended. Looking at my to-do list there's still work to be done, but what's left should be the easiest. At the start of this I planned to make it work on mobile, but I think I'll have to leave that for another project. After all, I have lots of unnecessary BS to add to this one, like giving Kurippi a mouth that is keyframed from an open to a closed image seperately from the rest of her animations. X[ 
Also I've spent the past few hours of work listening to "You" by Travis Scott and Don Toliver. Really has increased my productivity, highly recommend.

	Man, seeing how I styled all of these panels kinda separately for no reason is really biting me in the ass right now.

April 15th 2022

	Running the site in windows and mobile breaks shadows for some reason. Not sure why. Still looks great in XUbuntu. Added content to all the feed panels, with only one of them being stolen from MDE. Animated a bunch of buttons/links, even if they don't actually lead anywhere. They look pretty alright IMO. Seems like I can't keyframe to inverted colors. Spent the rest of the day adding in Kurippi, which I actually though would be simple for some reason. Lots of nonsense absolute positioning and for some reason JS.

	Kurippi rolls different text prompts now, and I think with that I'm done here. As with the last projects, 
I'm pleased with the result of my work visually, but I feel the code itself is not only sloppy but also inefficient in places. I do feel that it's slowly getting better though. You may notice some items on the list below have not been completed. Might come back to those, might not. Been like a 23 hour project all together now. Seeing the number gives me the sense that eventually these basic things could be implemented faster. Time will tell.

---TO-DO---

DONE-Text is cut off in overflowing panel. Fix this.
DONE-Panels are always half of the feed height. Causes problems at very small window sizing.
-Looks stupid with too few panels?
DONE-Add kurippi
-Add old kurippi easter egg
DONE-Come up with something interesting for the last panel
DONE-Dark mode
DONE-Animated buttons
-See more button expands panel? Might be excessive for this project
DONE-Change filler content on feed panels
-Bottom shadows don't work with Chrome on Windows for some reason. Works on XUbuntu. One out of the two sections with scrolling shadows works on mobile. Not sure how to fix but sorta an issue.
