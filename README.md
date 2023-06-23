# Wordle Clone with Added Timer

- Go play the real Wordle [here](https://www.powerlanguage.co.uk/wordle/)
- Read the story behind it [here](https://www.nytimes.com/2022/01/03/technology/wordle-word-game-creator.html)
- Try a demo of this clone project [here](https://wordle.hannahmariepark.com)

EDITS:

-App.tsx: Added a timer function

-index.css: Styled the timer container at the top of the page

-StatsModal.tsx: Added a Time div to display the total gameplay time in the final Stats pop-up

ADDED:

-File "CalculateTimer.tsx": Calculates the elapsed time in seconds, minutes, and hours. Exports as an Array


_To Run Locally:_
Clone the repository and perform the following command line actions:
```bash
$ cd wordle
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t notwordle .
$ docker run -d -p 3000:3000 notwordle
```
open http://localhost:3000 in browser.

