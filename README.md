# game

## Planning

- It took me a long time to start on this project. For days I wanted to perfect my first project, the website, or learn  more JavaScript.  Creative block was a big problem too - I wanted to create something original and fun, but wasn't sure where to start. I eventually decided to confront the project and set aside some time to work on it.
- I did what many designers do when they're stuck - I made a mind map (which can be found in the planning folder [here](www.github.com))
  -  Looking at different typography games online, I found that existing games tended to be split into three categories:
    - Multiple choice "What font is this?" game
    - Shoot the font/serif font game
    - Kern/adjust font yourself game
  - I made a basic sketch for a “What font is this?” game where the user types in the name of the font.
    - This could have been good, as the user would have to type in rather than just clicking a choice.
    - Whilst i didn't come across any game identical to this in my research, I wasn't convinced it would be sufficiently interesting so I abandoned the idea.
  - I noticed a theme in many of these games - the recognition of fonts. This is something I pride myself on - I have familiarised myself with Helvetica, Belwe, Johnston, Neue Haas Grotesk, amongst many others, and when I walk around, I like being able to recognise them on signs and logos. This gave me the idea for a Where's Wally style game but with fonts. I could find images with fonts in them and the user would have to click the specified font in said images.
- I initially wanted to use Helvetica for this game, partly due to its ubiquity, but then I remembered [a video](https://www.youtube.com/watch?v=Zu91meda2I8) I watched a few years ago about Cooper Black and it seemed like a better choice - it's about forty years older than Helvetica and the video already includes a lot of examples of the font in street signs: this would save me time in searching for photos for the game, giving me more time to build and debug.

- I decided it would make sense if the game increased in difficulty, going from album covers/book covers with just Cooper Black to street scenes and more complicated graphics.
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
    - I copied the SVG directly from Photoshop (click the layer/group and click "copy SVG"), saved it into a new SVG file and then edited it a little in Illustrator, using image tracing.
      - It was good to be able to make basic edits to the SVG in VSCodium and more complex ones in Illustrator and this is definitely something I want to look at more.
    - In sketching out the site, I made several choices:
      - Base the scoring system on 300 minus the time in seconds since the game begins.  This would keep the UI clean and give a simple scoring system - each photo out of the twenty would take 10 seconds or less for the user to guess, or they'd get a negative score. I eventually decided to set this to 0, based on a friend's advice - since most games start with a score of 0. I set the interval to 10 seconds to give the user more of a chance.
        - Extra minus points (5) for clicking the wrong place.
      - Make all the images square and design for mobile first. Hence the position of the design in the centre of the page. Desktop users could enjoy the negative space and bold colours of my nine colour schemes.  (I got rid of one colour scheme because one lacked contrast).

      - Make text aligned to the horizontal axis for easy button placement. Then make the buttons invisible (I wanted to use border solid to help place them)
      - Use touch/click as user input - since I want this to work on both mobile and desktop, I'd go for clicking over keyboard inputs.

## Building and Debugging

- I decided i wanted the color scheme to randomise on launch between ten options, so i set about building it. I broke this down, starting with the CSS then thinking about the JavaScript with pseudocode.  
  - It took me about forty minutes to get this all working, I had to debug as I went along, writing what I thought was the right JavaScript, then debugging by wrapping it in a comment and changing the CSS until that worked with the standard "colorScheme1" as the class for HTML, then going back and fixing the JS, using Console.log(), the RunJS app and ChatGPT as I went along.
  - I named and separated this code into its function named randomColorScheme() so that I could reuse it when I wanted to, like for the images changing.
  - I got pretty excited when I got this working, so much so that I kept reloading the page.
  - In my testing, I decided to take it down to 9 color schemes because one of the combinations (number 10) wasn't quite readable enough.
- Next, I set up building my HTML and CSS, using my planning wireframe as a guide.
  - It was good to realise that I could minimise the svg code in VSCodium.
  - Adding the image, I wondered what size would make sense as a base px width, so i looked up the smallest mobile width in common active use and it came to be 320px (for iPhone 5), so I set the image width to 300px and set left and right margin with calc() to centre the image.
- I decided i wanted 6 easy images (level 1), 6 more medium (level 2) and 8 hard (level 3) to keep it interesting.
  - I cropped and made them square in Photoshop and named them 1-6, 1-6, 1-8 in each of the folders. Gave them same extension too for easy manipulation with JavaScript.
- At this point I showed my game (and some of the functionality like the random colour scheme) to people at a Founders and Coders Meetup. It was great to get some early user feedback on my game - both a confidence boost and a chance to refine my idea and really focus on what I wanted the purpose of the game to be, for example, I found that I wanted to write out the rules of the game more clearly.  
- I continued writing pseudocode to work out what the JavaScript needed to look like. At this point I realised my random image generator (for level 1, level 2, level 3) was lacking because it would just generate random images including the images that had been generated already.
  -  I decided I needed an array, following on from reading a fellow FAC applicant's code the day before (Sam). This took a lot of time to get right: after a lot of debugging with console.log() in RunJS, I had a usable function. When i got this code right, I made sure I could easily change it for level 2 and 3 by swapping the "One" in variable names for "Two" and "Three".
- Next, I had to work out how to get XY coordinates of clicks on the image to check if they match where Cooper Black is in the images.
  - I tried to get ChatGPT to show me this but, whilst I understood the code it was giving me, I wanted another explanation so I found [this one](https://www.kirupa.com/html5/getting_mouse_click_position.htm#). While only the top of the article is relevant to this example (I am only finding the x y position within the image), it did help explain things clearly.
  - I then built this code into my game, testing it with console.log(hello) at first, and the full XY coordinates of the image (i.e when image clicked, console.logs hello). This helped me test the functionality of the code, making logical choices and writing as little code as possible, while keeping it clear what was happening.
- It took me a long time to debug this properly.
  - Common issues were:
    - Getting functions tangled and not defining variables globally but locally.
    - Using equality operator wrong (= instead of ===).
  - I separated all the bits of what I wanted my code to do and console.logged, as well as using Live Server (along with browser developer tools to view the console)
  - I solved this by giving my functions the most basic functionality. For example, I set click coordinates to anywhere, to test that clicking was triggering what i wanted to happen. This process gave me a lot of confidence and allowed me to write general code which I could dial in for different images and levels.
- I next used some pseudocode to write the "win" and "lose" functions for my game. This was relatively easy as I had already worked out the win and lose behaviour (+5, -5, display relevant text).
  - Because I previously had a lot of ```console.log(hello)``` / ```(goodbye)``` written where I wanted my win and lose functions to be called, I had to go through these and replace them.
    - I tried doing this quickly with chatGPT but it proved unreliable so I learnt about multiple cursors from [here](https://davidamos.dev/vs-code-multi-cursors/)
      - cmd + shift + L did the trick, allowing me to select and replace all occurences of ```console.log("hello")```.
  - I changed the right and wrong answer text display to inline with set attribute. This took awhile to get the right syntax, and displaying right and wrong at different times, but I figured it out with some help from ChatGPT.
- I next realised the images were changing to an undefined image at the end of the level (rather than going straight to the next level) so I fixed this by:
  - Adding a check for the randomOneImage, randomTwoImage, randomThreeImage before setting the image SRC attribute (```if (randomOneImage > 0)``` rather than later on in the code, where it was in the ```checkClickPosition``` function, where the image had already been set.
- Next i wanted to change the colour scheme for each image, so i called randomColorScheme() function within the win() function. This proved a good start, but after a few wins the color scheme wouldn't change (probably too many classes set on top of each other) so I realised the best way of doing this would be to remove the existing color scheme before setting a new one. I did this within the randomColorScheme() function, using a for loop to choose the color scheme class and remove it.
- End of the game: This was relatively easy - I wanted the final image to disappear so I got it to display:none. Then, I wanted any text saying right answer to disappear so I did the same to that, leaving just the score and restart option.
- Chatting to Mohamed at an FAC meetup, I realised a lot of my images were bigger than the 2mb that's generally advised for websites to enable them to load quickly. I fixed this with an Image Optimiser app.
- When I tested the game on another device, I noticed that the font wasn't loading properly, and instead defaulted to sans-serif. This was because the font was activated on my personal computer, rather than loading from the Github repo. I spent a long time attempting to fix this, before using developer tools in the browser to find the error, ChatGPT to decode the jargon from these error messages, and then realising the fonts folder needed to be in the styles folder (it's referenced from the CSS). I realised the html code for this font loading was redundant at this point so i deleted it.
- I started off with clicking anywhere on the image triggering the win function just to get the basic functionality of the game right. This obviously needed fixing. I had already worked out I needed to set coordinates within the image, so my task was to get those coordinates and add them to my JavaScript.  
  - I made all the images 300px x 300px (this is the size they are displayed at so makes sense) to enable me to choose the coordinates properly and uniformly for each. I used [this method](https://www.idownloadblog.com/2013/10/19/how-to-resize-multiple-images-mac/) in Preview. Looking on the Live Server site, I noticed that I'd made the images too grainy for users who might want to zoom in so I reverted the changes and used 1200 x 1200px instead. I knew this would complicate things slightly but I only needed to divide by 4 to get to 300px by 300px.
  - I drew a rectangle on the images in photoshop, then wrote down the x and y positions of those rectangles by:
    - finding the coordinates of the rectangles top-left corner from the properties bar.
    - getting the max x y value by adding the width to the x value and adding the height to the y value.
  - I plugged these values into my JS (after dividing by 4) and it was great to see the game working as it should.
    - One of the images didn't work so I had to debug, and realised the image was at the wrong size (900px x 900px) so I had to times the coordinates by 4 (to get to 900) and divide by 3 (to get to 300px) to get the right value.
- I set the restart button to only show after the first image (after a win/lose basically) using the same setAttribute method as with the wrong answer and right answer text.
- During user testing, the idea for some background music came up.  My partner suggested music from the albums that use Cooper Black. I wanted fast tempo ones so I went through them and found ten tracks that I thought would work. I chose the instrumentals so it wouldn't interfere with the user's experience of the game, but serve as a backing track.
  - I wrote pseudocode and made the random song selector in a similar way to the random color scheme.
  - I got ChatGPT to teach me the basics of playing music and setting audio volume.
  - I realised two of the songs were pretty offputting (On the Corner by Miles Davis and Black Unity by Pharoah Sanders), so i removed them. I also noticed some of the songs did not start "on beat", rather with a bit of a pause so i trimmed them to launch the game with a sound.
- During user testing, watching users play my game i realised it would be much more intuitive to have a start scren with the rules and any info on it rather than images and a lot of information.
  - I wrote pseudocode and set about changing the existing code to make this work.
  - I added a let's play button and styled it with CSS and currentColor.
  - This also allowed me to change when the score countdown (-1 point for 10 seconds) starts - when the user clicks the let's play button.
- There was a bug with the game which meant that the placeholder (Goblin album cover) for the first image of level one flashed - i initially tried to fix this by adding an on load function for displaying the image only on load of the randomly generated one, but this slowed down the game. I realised the solution was far simpler - the placeholder image could be a blank png. 
- Some users complained about the score still decreasing on the game's end point so I made an end screen, to function as a bookend like the start screen.
  - Score doesn't change - by breaking out of interval.
  - I decided i wanted a photo of Cooper Black's designer, Oswald Bruce Cooper, with a speech bubble saying well done on the end screen.
  - I made it stop the music to make it clear the game is over, setting the songAtLocation variable outside of the song function so it could be accessed within the endGame function.
  - I changed the start button only showing at end, as another element that pops up to signify the end. I also changed this to be a button (like the let's play one) rather than just a link, to make it even more clear that it's the end of the game.
- I ran through the game a few times and tested it on various devices.

##  Improvements

If I were to keep going and make this game more complicated, I would:

- Level up announcement to differentiate between levels and introduce next one

- Make a new level (4) where trick fonts are introduced - visually similar fonts to Cooper Black as tricks to test players. There's a folder of such fonts in my images folder, under "tricks"

- Introduce other fonts so it could become a learning tool for budding graphic and web designers. I think it's important for non-designers and people in the street to be able to recognise and deconstruct their surroundings, particularly advertising and its power over our lives. [Everything is architecture, everyone an architect!](https://pbs.twimg.com/media/Dlh_mOmWsAIN9mo.jpg)

- Add sound effects for win/lose to make the game more interactive.
  
- Sound on/off button for those who don't want backing music or sound effects. 

- Setting a high score with save to local storage.
Maybe some kind of ranking system at the end like "type nerd” and "type beginner" based on score.
- Getting 90+ and a maximum score gets two different prizes such as triggering something to happen like an animation.
- Having a place for people to share their own images of Cooper Black

- A link to the album the music came from on the end screen.


## Image Sources

<https://fontsinuse.com/uses/2474/the-beach-boys-pet-sounds-album-cover>

<https://fontsinuse.com/uses/4234/vote-for-pedro-shirt-from-napoleon-dynamite>

<https://fontsinuse.com/uses/31627/little-richards-grooviest-17-original-hits-al>

<https://fontsinuse.com/uses/16586/easyjet>

<https://fontsinuse.com/uses/24856/conways-photosetting-ad>

<https://fontsinuse.com/uses/50047/machine-age-exposition-1927-poster>

<https://fontsinuse.com/uses/49275/schuhexpress-gera>

<https://www.youtube.com/watch?v=Zu91meda2I8>

<https://fontreviewjournal.com/cooper/>

<https://upload.wikimedia.org/wikipedia/commons/8/87/Cooper_Black_Type_Specimen_%2829488904886%29.jpg>

Music sources:

- Black Unity by Pharaoh Sanders: <https://www.youtube.com/watch?v=mNn78K8D7NU>
- If You Really Love me by Stevie Wonder: <https://www.youtube.com/watch?v=CqrNN2naapU>
- Blues and Pants by James Brown: <https://www.youtube.com/watch?v=WuKLL2Qt1_A>
- Keep Talkin' by Lonnie Smith: <https://www.youtube.com/watch?v=BnFeFgR_hu4>
- Lost by Frank Ocean: <https://www.youtube.com/watch?v=Qhavokaear4>
- The Business by De La Soul: <https://www.youtube.com/watch?v=osZq3Ah4LpM>
- Henrietta by The Fratellis: <https://www.youtube.com/watch?v=3g1VmtJR_vE>
- All Day and All of the Night by the Kinks: <https://www.youtube.com/watch?v=GFw5ndIA0Z8>
- Uh Uh by Thundercat: <https://www.youtube.com/watch?v=dk_ud0b4yY4>
- No copyright infringement intended, this game is for educational purposes only.
