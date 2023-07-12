# game

## Planning

- It took me a long time to start on this project, for days I wanted to perfect my first project or learn just that little bit more Javascript. I eventually decided to confront it and set aside some time to work on it.
- Creative block was a big problem too, I wanted to create something original and fun, but wasn't sure where to start so I did what all designers do when they're stuck - I made a mind map. This can be found in the planning folder [here](www.github.com), if you're interested.
  - Moving between different type games online, I found that existing games tended to be split into three categories:
    - Mutiple choice what font is this game
    - Shoot the font/serif type font
    - Kern/adjust font yourself
  - I made a basic sketch for a what font game where the user types in the name of the font.
    - This could have been good, as the user would have to type in rather than just clicking a choice.
    - Whilst i didn't come across any game identical to this in my research, I wasn't convinced it would be sufficiently interesting so I abandoned the idea.
  - I had an idea to make a Where's Wally/ Waldo style game but with fonts! I would find examples of images with fonts in them and the user would have to click within a certain area.
- I initially wanted to use Helvetica for this game, partly due to its ubiquity, but then I remembered [a video](https://www.youtube.com/watch?v=Zu91meda2I8) I watched a few years ago about Cooper Black and it seemed like a better choice because it's about forty years older than Helvetica and the video already includes a ton of examples of the font in street signs. This would save me time in searching for photos for the game, giving me more time to build and debug.
- I decided it would make sense if the game increased in difficulty, going from album covers/book covers with just cooper black to street scenes and more complicated graphics.
- I gathered a folder of images, categorising them loosely under three difficulties - level 1, 2 and 3.
  - Whilst I initially wanted to get most of the images from the video linked above, I realised that one of my favourite sites, [Fonts In Use](https://fontsinuse.com/) would be a better and more eclectic source.
  - Surfing Fonts in Use and the wider web,  I saved the links to where I found the images at the bottom of this doc under "sources".
  - Side note: I really enjoyed looking for the Cooper Black album covers because albums are where my love of design originally came from.  
  - I crowd-sourced images from friends and family of Cooper Black in the streets and took some of my own too. I also went on Google Street View to find some images but everything was a bit too blurry, and I wanted to avoid my game looking like a Captcha.
- I came across [this video](https://www.youtube.com/watch?v=zf988tNfMx4) while looking for images and really liked the bold colours they use - I thought it would be cool to use them as the background and font colour on my site.
  - I used an app called Sip to save the colour codes, ignoring color pairs that didn't contrast too much (because that would give unreadable type) and limiting myself to 10 combinations:
    - #251B71 and #4296D2
    - #8DC788 and #2D6320
    - #EA3B24 and #F8D5D0
    - #9329D1 and #C9E6F5
    - #251B71 and #E6E195
    - #E4C693 and #000000
    - #4296D2 and #FDF250
    - #51B333 and #FFFFFF
    - #844E20 and #D595B5
    - #75C16C and #D57CA8
  - I also realised that using these colour pairs, on a rotating and random basis, when the page loaded and when images changed would help keep up the visual interest of my game with a selection of 20 images and 10 color schemes.
  - I sketched out a basic design for the site, including a very basic logo using tight custom kerning on "typespotting" and a magnifying glass made out of a "t" and "o" from Cooper Black.
    - I copied the SVG direct from Photoshop (click the layer/group and click "copy SVG"), saved it into a new SVG file and then edited it a little in Illustrator, using image tracing.
      - It was good to be able to make basic edits to the SVG in VSCodium and more complex ones in Illustrator and this is definitely something I want to look at more.
    - In sketching out the site, I made several choices:
      - Base the scoring system on 300 minus the time in seconds since the game begins.  This would keep the UI clean and give a simple scoring system - each photo out of the twenty would take 10 seconds or less for the user to guess, or they'd get a negative score. I eventually decided to set this to 0, based on a friend's advice - since most games start with a score of 0. I set the interval to 10 seconds to give the user more of a chance.
        - Extra minus points (5) for clicking the wrong place.
      - Make all the images square and design for mobile first. Hence the position of the design in the centre of the page. Desktop users could enjoy the negative space and bold colours of my nine colour schemes.
      - Make text aligned to horizontal axis, for easy button placement. Then the buttons invisible (use border solid to help place them maybe)
      - Use touch/click as user input - since I want this to work on both mobile and desktop, i'll go for clicking over keyboard inputs.

## Building and Debugging

- I decided i wanted the color scheme to randomise on launch between ten options, so i set about building it. I broke this down, starting with the css then thinking about the js with pseudocode.  
  - It took me about forty minutes to get this all working, I had to debug as I went along, writing what I thought was the right JS then debugging by wrapping it in a comment and changing the CSS until that worked with the standard "colorScheme1" as the class for html, then going back and fixing the JS, using Console.log(), the RunJS app and ChatGPT as I went along.
  - I named and separated this code into it's function named randomColorScheme() so that I could reuse it when I wanted to, like for the images changing.
  - I got pretty excited when I got this working, so much so that I kept reloading the page.
  - In my testing, I decided to take it down to 9 color schemes because one of the combinations (number 10) wasn't quite readable enough.
- Next up I set up building my html and CSS, using my planning wireframe as a guide.
  - It was good to realise that I could minimise the svg code in VSCodium
  - Adding the image, I wondered what size would make sense as a base px width, so i loooked up the smallest mobile width in common active use and it looks like 320px (iPhone 5), so I set the image width to 300px and set left and right margin with calc() to centre the image.
- Decided i wanted 6 easy images (level 1), 6 more medium (level 2) and 8 hard (level 3) to keep it interesting.
  - I cropped and made them square in Photoshop and named them 1-6, 1-6, 1-8 in each of the folders. Gave them same extension too for each manipulation with Javascript.
- At this point I showed my game (and some of the functionality like the random colour scheme) to people at Founders and Coders Meetup. It was great to get some early user feedback on my game - both a confidence boost and a chance to refine my idea and really focus on what it is I want the purpose of the game to be and how to express this. I decided I wanted to write out the rules of the game more clearly.
- I continued writing pseudocode to work out what the javascript needed to look like. At this point I realised my random image generator (for level 1, level 2, level 3) was lacking because it would just generate random images, not removing the options that have been generated already. I decided I needed an array, following on from reading a fellow FAC applicant's code the day before (Sam). This took a lot of time to get right, after a lot of debugging with console.log() in RunJS I had a usable function. When i got this code right, i made sure i could easily change it for level 2 and 3, by swapping the "One" in variable names for "two", "three".
- I next had to work out how to get x y coordinates of clicks on the image, to check if they match where Cooper Black is in the images.
  - I tried to get ChatGPT to show me this but, whilst I understood the code it was giving me, I wanted another explanation so I found [this one](https://www.kirupa.com/html5/getting_mouse_click_position.htm#). While only the top of the article is relevant to this example (I am only finding the x y position within the image) it did help explain things clearly.
  - I then built this code into my game, testing it with console.log(hello) at first, and the full x y coordinates of the image (i.e when image clicked, console.logs hello). This helped me test the functionality of the code, making logical choices and writing as little code as possible, while keeping it clear what was happening.
- It took me a long time to debug this properly.
  - Common issues were:
    - Getting functions tangled and not defining variables globally but locally.
    - Using equality operator wrong (= instead of ===).
  - I separated all the bits of what I wanted my code to do and console.logged, as well as using live server (along with browser developer tools to view the console)
  - Giving them the most basic functionality. For example, I set click coordinates to anywhere, to test that clicking was triggering what i wanted to happen. This process gave me a lot of confidence and allowed me to write general code which i could dial in for different images and levels.
- I next used some pseudocode to write the win and lose functions for my game. This was relatively easy as I had already worked out the win and lose behaviour (+5, -5, display relevant text).
  - Because I previously had a lot of ```console.log(hello)``` / ```(goodbye)``` written where I wanted my win and lose functions to be called, I had to go through these and replace them.
    - I tried doing this quickly with chatGPT but it proved unreliable so I learnt about multiple cursors from [here](https://davidamos.dev/vs-code-multi-cursors/)
      - cmd + shift + L did the trick, allowing me to select and replace all occurences of ```console.log("hello")```.
  - I changed right and wrong answer text display to inline with set attribute. This took awhile to get the right syntax, and displaying right and wrong at different times but i figured it out with some help from ChatGPT.
- I next realised the images were changing to an undefined image at the end of the level (rather than going straight to the next level) so I fixed this by:
  - Adding a check for the randomOneImage, randomTwoImage, randomThreeImage before setting the image SRC attribute (```if (randomOneImage > 0)``` rather than later on in the code, where it was in the ```checkClickPosition``` function, where the image has already been set.
- Next i wanted to change the color scheme for each image, so i called randomColorScheme() function within the win() function. This proved a good start, but after a few wins the color scheme wouldn't change (probably too many classes set on top of each other) so I realised the best way of doing this would be to remove the existing color scheme before setting a new one. I did this within the randomColorScheme() function, using a for loop to choose the color scheme class and remove it.
- End of the game: This was relatively easy - i wanted the final image to disappear so i got it to display:none, then i wanted any text saying right answer to disappear so i did the same to that, leaving just score and restart option.
- Chatting to Mohammed at FAC meetup, I realised a lot of my images were bigger than the 2mb that's generally advised for websites to enable them to load quickly. I fixed this with an Image Optimiser app.
- When I tested the game on another device, I noticed that the font wasn't loading properly, and instead defaulted to sans-serif. This was because the font was activated on my personal computer, rather than loading from the github repo. I spent a long time attempting to fix this, before using developer tools in the browser to find the error, ChatGPT to decode the jargon from these error messages, and then realising the fonts folder needed to be in the styles folder (it's referenced from the CSS). I realised the html code for this font loading was redundant at this point so i deleted it, too. 
- I started off with clicking anywhere on the image triggering the win function, just to get the basic functionality of the game right. This obviously needed fixing, so I set about trying to fix it. I had already worked out I needed to set coordinates within the image, so my task was to get those coordinates and add them to my JS.  
  - I made all the images 300px x 300px (this is the size they are displayed at so makes sense) to enable me to choose the coordinates properly and uniformly for each. I used [this method](https://www.idownloadblog.com/2013/10/19/how-to-resize-multiple-images-mac/) in Preview. Looking on the live server site, I noticed that I'd made the images too grainy for users who might want to zoom in - so i reverted the changes and used 1200 x 1200px instead. I knew this would complicate things slightly but that I could just divide by 4 in my calculations to get to 300px by 300px. 
  - drew a rectangle on the images in photoshop, then wrote down the x and y positions of those rectangles by: 
    - finding the coordinates of the rectangles top-left corner from the properties bar. 
    - getting the max x y value by adding the width to the x value and adding the height to the y value. 
  - I plugged these values into my JS (after dividing by 4) and it was great to see the game working as it should. 

///// TODO:
- add level 2 and 3 coordinates (finish dividing by 4 first)
- change end of the game bit so score doesn't change at end - basically break out of the interval.
- maybe some kind of ranking system at end like "type nerd", "type beginner" based on score. Or getting 90+ gets a prize, triggers something happening. 100 is highest possible score so this could trigger something too.
- hide restart game until win or lose happened (same as wrong/right text basically but never resets)
- music changes every time start game, random number 1-10 index in array. 
  - see music to download
  - sound on off button (svg icon)
  - see music to download
  - can you change device volume with javascript
  - add to above: "- During user testing, the idea for some background music came up.  my partner suggested music from the albums that use Cooper Black. I wanted fast tempo ones so I went through them and found ten tracks that I thought would work. I chose the instrumentals so it wouldn't interfere with the user's experience of the game, but serve as a backing track."
- Click to start, so timer doesn't start til then. Let's play.... 
- level up announcement and then it goes to next one
- When game done, well done! And picture of Oswald Bruce cooper
- welcome screen instead of first image
- setting high score with save to local storage 
- Make restart game all caps or make it bigger, and same colour
- End screen - Oswald Bruce cooper cut out with speech bubble saying well done
- Link to learn more about cooper black - YouTube video 
- - When game done, end screen with picture of Oswald Bruce cooperOswald Bruce cooper cut out with speech bubble saying well done
- Link to learn more about cooper black - YouTube video. 
- Check image sources below

 /////

If I were to keep going and make this game more complicated, I would:

- Random clicking - take points off when the user randomly clicks, or set some kind of safeguard to stop images changing when user randomly clicks too quickly.
- Make a new level (4) where trick fonts are introduced - visually similar fonts to Cooper Black as tricks to test players. There's a folder of such fonts in my images folder, under "tricks"

- Introduce other fonts so it could become a learning tool for budding graphic and web designers. I also think it's important for non-designers and people in the street to be able to recognise and deconstruct their surroundings, particularly advertising and its power over our lives. [Everything is architecture, everyone an architect!](https://pbs.twimg.com/media/Dlh_mOmWsAIN9mo.jpg)



- Add sound effects for win/lose to make the game more interactive.

## Image Sources

<https://fontsinuse.com/uses/39601/the-beatles-come-together-something-dutch-sin>

<https://fontsinuse.com/uses/37981/thalassa-1976-tv-magazine-logo>

<https://fontsinuse.com/uses/27905/no-deposit-no-return>

<https://fontsinuse.com/uses/2474/the-beach-boys-pet-sounds-album-cover>

<https://fontsinuse.com/uses/4234/vote-for-pedro-shirt-from-napoleon-dynamite>

<https://fontsinuse.com/uses/41141/tudo-que-noiz-tem-e-noiz-t-shirt>

<https://fontsinuse.com/uses/37056/clifford-the-big-red-dog-books>

<https://fontsinuse.com/uses/31627/little-richards-grooviest-17-original-hits-al>

<https://fontsinuse.com/uses/31208/hoch-tief-durch-2019>

<https://fontsinuse.com/uses/29387/whats-arnold-palmer-doing-on-a-bolens-husky-a>

<https://fontsinuse.com/uses/29935/bob-and-carol-and-ted-and-alice-movie-posters>

<https://fontsinuse.com/uses/27844/children-s-jokes-and-riddles-album-art>

<https://fontsinuse.com/uses/25678/little-green-bag-george-baker-selection>

<https://fontsinuse.com/uses/19182/radical-philosophy-issues-26-38>

<https://fontsinuse.com/uses/16586/easyjet>

<https://fontsinuse.com/uses/24856/conways-photosetting-ad>

<https://fontsinuse.com/uses/41747/kes-1969-french-movie-poster>

<https://fontsinuse.com/uses/37816/sea-monkeys-ad-1978>

<https://fontsinuse.com/uses/50047/machine-age-exposition-1927-poster>

<https://fontsinuse.com/uses/49275/schuhexpress-gera>

<https://www.youtube.com/watch?v=Zu91meda2I8>

<https://twitter.com/NickSherman/status/905821528566239232>

<https://fontreviewjournal.com/cooper/>

<https://upload.wikimedia.org/wikipedia/commons/8/87/Cooper_Black_Type_Specimen_%2829488904886%29.jpg>
