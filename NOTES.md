##Where I left off

**TO-DO**

* Figure out CNAME setup for github
  * Would be cool for it to always show up as cssdiner.com
* Figure out next steps to increase reach and use
  * Email signup?
  * Dedicated twitter account?
* Figure out next steps to improve product
  * More selectors
  * More levels per selector

**Questions**

  * How to test completion of twitter actions?
  * How to track where it's being shared already?
    * Sharetally, or something similar?

What kind of new content could I have?

* Special riddle mode?
* Create a challenge mode?
* Sandbox mode
* New levels


####Figuring out hard levels

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
