##Where I left off

To-do

* Figure out how best to track which levels are the hardest
  * Current proposed method is by tracking incorrect guess counts per level

```
  ga('send', {
    hitType: 'event',
    eventCategory: 'guess',
    eventAction: 'incorrect',
    eventLabel: 3,    // Level Number
    eventValue: 10    // Number of incorrect guesses
  });
```

* How will this show up in Analytics?
* Will it be useful?
* Can I look up the average eventValue per eventLabel
* When should we track an incorrect guess..
  * When the selector isn't blank
  * When the attempted selector isn't the exact same one tried before...
    * Don't want to count 10 attempts if someone just hits enter 10 times in a row
  * Could just keep track of atttempted selectors and make sure it's unique