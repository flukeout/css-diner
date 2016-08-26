##Where I left off

**In Progress**

* Adding email share
  * Sharetally!? - find a system similar to it

Custom scrollbars.. using Malihu..
* http://manos.malihu.gr/jquery-custom-content-scroller/
* Donate him a fiver


**TO-DO**

* Figure out CNAME stuff

**Saving some GA code for link tracking here**

```
  $(".share-facebook").on("click", function(){
    ga('send', {
      hitType: 'social',
      socialNetwork: 'Facebook',
      socialAction: 'share',
      socialTarget: 'http://cssdiner.com'
    });
  })

  $(".share-twitter").on("click", function(){
    ga('send', {
      hitType: 'social',
      socialNetwork: 'Twitter',
      socialAction: 'tweet',
      socialTarget: 'http://cssdiner.com'
    });
  })
```



Twitter share text ideas

* Learn CSS selectors with cssdiner.com
* Learn CSS selectors at the CSS Diner - cssdiner.com #css #webdev
* Learn & practice CSS selectors at the CSS Diner - cssdiner.com
* I just learned some CSS selectors at the CSS Diner, and you can too! cssdiner.com
* Want to learn CSS selectors? Try CSS Diner - cssdiner.com
* Learning CSS? Try CSS Diner, the fun way to practice selectors - cssdiner.com
*

Social media questions?

* Include @flukeout in the share text?
* Should I make a CSS Diner Twitter account?
* Email signup? Email list?

What kind of new content could I have?

* Special riddle mode?
* Create a challenge mode?
* Sandbox mode
* New levels

Hashtags

* #css
* #cssdiner
* #webdev
* See what people are saying and sharing like already and copy that.

Left off

* Working on the two column layout and making the level menu independently scrollable from the main page.
* After that I think i want to add Twitter & FB share buttons
* Trying to add better scrollbar styling to the left and right columns...
  * Will need to look into vendor specific styling here for FF, Chrome & Others
* Rig up the twitter and facebook share actions



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