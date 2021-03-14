# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Kevin Bates**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/abrupt-mercury-grip?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough

Here's a walkthrough of implemented user stories:(note that in the video the buttons don't always appear to light up when clicked since I had to reduce the frame count to 5 frames per second to convert it to a gif)
![](https://imgur.com/n3yl6y3.gif)
[Imgur](https://imgur.com/n3yl6y3)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push to figure out arrays in JavaScript
   - https://www.w3schools.com/js/js_random.asp since I could not figure out setting a float to an int since typecasting wasn't working
   - https://www.w3schools.com/jsref/met_win_setinterval.asp to learn the setInterval and clearInterval functions

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

  The hardest part for me was creating a randomized array of integers 1-6. The first reason challenge was figuring out arrays. I could not initialize them with a size, after research I found out they had a dynamic size, and I could create an empty array and push more numbers to them.
  I then was having trouble generating a random number 1-6. My normal attempt (with java) would be to multiply Math.random() by 6 add 1 then typecast it. I then figured I could use Math.floor for this and it would give the same effect as typecasting.
  Finally I got stuck on a more stupid error that I was calling Math.random as if it was a field and not with parenthesese as if it was a function. This issue took me the longest to catch and I had to use the some console logs to test
  and figure out that my issue was in the Math.random and then I quickly caught my syntax error.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After doing this I really do not understand how web developer can make their websites so nice. Have so many cool features like tab bar, dropdown menus and such. How are these cool stylized views even remotely possible with 
these languages. I also am curious how important complex knowledge of web developement is now that there are very well made web developement tools like google sites.
  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
  With a few more hours I would likely clean up and organize my functions. I would have created stylized and cool images to replace the
plain colored squares (maybe something that looks like a real colored button). I would have figured out how to make more stylized and organized texts. Like make the header a lot more clean and defined looking, as well as
making the time remaining field outlined and more stylized. A feature I might have added would have been selecting the length of the challenge (how long the pattern would be). And finally,
 I don't think the alert function is very visually appealing so I would have added a cleaner space to display messages.

## License

    Copyright [Kevin Bates]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
