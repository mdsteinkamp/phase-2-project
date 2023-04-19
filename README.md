# Song Learning Tracker App
This application allows the user to display a list of songs to learn on their instrument of choice - the folowing info is listed in a card for each song:

* Track Name
* Artist Name
* Album Cover
* Musical Key
* Techniques used
* User rated difficulty

As a beginner with React I wanted to get some practice building a basic react app with some CSS styling. I used ```styled-components``` for CSS and ```react-switch``` for a light/dark mode switch. 

The db.json file is intialized with some track info for example purposes

## Installation
In node, run ```npm run server``` and in a second terminal tab run ```npm start``` to open the app in the browser

## Usage

So far the following are implemented:

* Navigation Bar with links to pages

* Landing page

* Tracks List Page: List of all the uncompleted/learned tracks for the user. Each entry is clickable and redirects to specific page. Can search name, artist, & two input fields. Can sort by difficulty. 

* Completed Tracks List Page: List of the completed track cards

* Add Track Form: Form to add a track to the Track List
