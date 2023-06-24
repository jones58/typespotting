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
  - I also realised using these backgrounds, on a rotating (and random basis), when images changed would help keep up the visual interest of my game with a selection of 20 images and 10 color schemes. 
  - I sketched out a basic design for the site, including a very basic logo using tight custom kerning on "typespotting" and a magnifying glass made out of a "t" and "o" from Cooper Black. 
    - I copied the SVG direct from Photoshop (click the layer/group and click "copy SVG"), saved it into a new SVG file and then edited it a little in Illustrator, using image tracing. 
      - It was good to be able to make basic edits to the SVG in VSCodium and more complex ones in Illustrator and this is definitely something I want to look at more. 
    - In sketching out the site, I made several choices: 
        - Base the scoring system on 300 minus the time in seconds since the game begins.  This would keep the UI clean and give a simple scoring system - each photo out of the twenty would take 10 seconds or less for the user to guess, or they'd get a negative score.
          - Extra minus points (5) for clicking the wrong place. 
        - Make all the images square and design for mobile first. Hence the position of the design in the centre of the page. Desktop users could enjoy the negative space and bold colours of my ten colour schemes. 
        - Make text aligned to horizontal axis, for easy button placement. Then the buttons invisible (use border solid to help place them maybe)
        - Use touch/click as user input - since I want this to work on both mobile and desktop, i'll go for clicking over keyboard inputs. 


 ## Building


[ ] Break a feature into smaller parts
[ ] Write pseudocode for each part of a feature
[] Research Javascript features 
[] Implement Javascript features 


DOM 
[] use Javascript to update user interface 
[] be able to use time intervals in Javascript 
[] Use event listeners to respond to user input 
[] Respond to click events 
[] Respond to key presses 
[] Reference a function within an event listener
[] [ ] Use querySelector() and querySelectorAll() to gather HTML elements

Javascript 
[ ] Understand the syntax of JavaScript functions
[ ] Understand the required and optional parts of a JavaScript function
[] Define a function
[] Call a function 
[] Know how to define arguments in a function and how to pass values in
[] Write functions using traditional and arrow syntax 




 ## Debugging
 []Identify issues and research solutions 
 [] Use Console.log() to debug code 





If I were to keep going and make this game more complicated, I would:
  - Introduce other fonts so it could become a learning tool for budding graphic and web designers. I also think it's important for non-designers and people in the street to be able to recognise and deconstruct their surroundings, particularly advertising and its power over our lives. [Everything is architecture, everyone an architect!](https://twitter.com/archiworkers/status/1033716642990186498)



## Image Sources 

https://fontsinuse.com/uses/39601/the-beatles-come-together-something-dutch-sin

https://fontsinuse.com/uses/37981/thalassa-1976-tv-magazine-logo

https://fontsinuse.com/uses/27905/no-deposit-no-return

https://fontsinuse.com/uses/2474/the-beach-boys-pet-sounds-album-cover

https://fontsinuse.com/uses/4234/vote-for-pedro-shirt-from-napoleon-dynamite

https://fontsinuse.com/uses/41141/tudo-que-noiz-tem-e-noiz-t-shirt

https://fontsinuse.com/uses/37056/clifford-the-big-red-dog-books

https://fontsinuse.com/uses/31627/little-richards-grooviest-17-original-hits-al

https://fontsinuse.com/uses/31208/hoch-tief-durch-2019

https://fontsinuse.com/uses/29387/whats-arnold-palmer-doing-on-a-bolens-husky-a

https://fontsinuse.com/uses/29935/bob-and-carol-and-ted-and-alice-movie-posters 

https://fontsinuse.com/uses/27844/children-s-jokes-and-riddles-album-art

https://fontsinuse.com/uses/25678/little-green-bag-george-baker-selection

https://fontsinuse.com/uses/19182/radical-philosophy-issues-26-38

https://fontsinuse.com/uses/16586/easyjet

https://fontsinuse.com/uses/24856/conways-photosetting-ad

https://fontsinuse.com/uses/41747/kes-1969-french-movie-poster

https://fontsinuse.com/uses/37816/sea-monkeys-ad-1978

https://fontsinuse.com/uses/50047/machine-age-exposition-1927-poster

https://fontsinuse.com/uses/49275/schuhexpress-gera

https://www.youtube.com/watch?v=Zu91meda2I8 

https://twitter.com/NickSherman/status/905821528566239232 

https://fontreviewjournal.com/cooper/

https://upload.wikimedia.org/wikipedia/commons/8/87/Cooper_Black_Type_Specimen_%2829488904886%29.jpg   