# README
What do cat's dream about during a cat nap?  A game where a cat goes to a dream land collects fireflies and defeats enemies.  This is Javascript frontend with a Rails backend API project for the web development curriculum of learn.co.

## To Install:
Will probably need to run the following commands:

from project's root directory: 
npm install http-server -g
 -or-
sudo npm install http-server -g

http-server

navigate to localhost:8080/dream-front

from dream-back directory:
bundle install

rails db:seed

rails s

navigate to localhost:3000 for api views



## To Play the game:
Enter an email address, or some name

Click the main Title Screen to Play

Press the arrow keys to move the cat around

Press the space bar to use "magic" on the "green enemies"

Move the cat around into the floating "fireflies" to collect them

For code review, the game is currently set up to end once 10 fireflies are caught and 10 enemies are gone
and return to the title screen, the original settings puts more enemies and fireflies on the map.

Currently, to start a new game, click the button logout or start new game,
plan to modify this in this future with a GameOver scene or see what else



## Credits or Acknowledgements:
The actual game portion of this program was made with the Phaser3 Game engine.  Thanks to it's existence, and a very simple intro tutorial and examples page, I could create a game without losing my mind, or doing something very mundane to mock a user interface for a game for a project. https://phaser.io/phaser3

I decided I wanted to make my own game art and found the use of PixilArt and Krita helpful in making images and spritesheets. https://www.pixilart.com/draw# https://krita.org/en/

I made my tilemap and export files with Tiled, very handy and works well with Phaser, in particular. https://www.mapeditor.org/

I also consulted a multitude of tutorial resources, several from zenva's html5 game development series, https://academy.zenva.com/

And before realizing I could use a game engine to make all of this simpler I learned a great deal about vanilla javascript game making from several tutorial resources, including one on Tiled, which fortunately lead me to phaser3:
 For Tiled: 
 GamesFromScratch https://www.youtube.com/channel/UCr-5TdGkKszdbboXXsFZJTQ
 For building Javascript game engines:
 JavaScript Teacher https://www.youtube.com/channel/UCzQvgRgjjxhzEORvefubDPw
 Technologies4me https://www.youtube.com/channel/UCHpHBzk4fz3oeQ31hmCreGg
 PothOnProgramming https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w









