## Random Notes

For example, I'd like to keep track of progress, can I update it every time there is an increase?
Otherwise, I have to send a new event that 'overwrites' the old one...

var progress = {
  totalCorrect : 0,
  percentComplete : 0,
  lastPercentEvent : 0,
  guessHistory : {
    // 1 : {
    //   correct: false,
    //   guessesTillCorrect : 0,
    //   correctCount : 0,
    //   incorrectCount: 0,
    //   gaSent: false
    // }
  }
}

**Question for Vojtek**

* Is there a way to track a variable for a user, like 'progress'?
  * So I can just update it as progress increases?
  * Instead of sending a new event every time progress increases by some X percentage

###Analytics Update

Events that I'll send

* Send an event when a level is answered correctly for the first time only
* Send an event every time a percentage is completed, every 10 percent
  * 10,20,30...100

**Samle Google Event**

Idea is to track send out an event when...

* A player gets each of 10%,20%,30%...100% of the questions right
* At each of those intervals keep track of
  * Total correct guesses
  * Total incorrect guesses
* When a question is answered correctly, send...
  * Number of incorrect attempts before success happens


Other interesting questions?
* Which questions are the hardest?
* Can keep track of incorrect guesses per question





**Sample object to track progress**

```
var progress = {
  percentGuessed : 0,
  guessedQuestions: [],   //correctQuestions
  correct : 0,            //correct guesses total
  incorrect : 0           // incorrect guesses total
}
```






```
el
el
#id
el el    plate apple
#id el   #fancy apple
.class
el el.small
el.small
el,el
*
plate *     everything on a plate
plate + apple
bento ~ pickle
plate > apple





el > el  el is direct child

el + el (immediately preceded)
el ~ el (preceded by)

:first-child
:only-child
:last-child




- combine # and . selectors
- combine .className.className selector
- .plate:not(:empty)
```