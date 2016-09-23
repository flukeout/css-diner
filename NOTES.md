##To-do

**QA b4 Launch**
  * Check to make sure all levels work
  * Check that examples are correct
  * QA the reset - it's wiggin out yo? is it????




##Feature Ideas

**Social & Engagemnt**

* Email signup via mailchimp
* Do more work to figure out who has already been there, treat them a bit differently?
  * "Welcome back et."


**Gameplay**

* Award stars when a level is completed without commas and using the indicated selector
  * This would be in addition to the checkmark we already do
* selector: "plate:nth-of-type(2n+3)"
  * Make this level use apples instead of plates? Seems too big..
* Riddle mode
  * Difficult selector problems
  * Add a new one every week
  * Gives me a reason to bring people back


**Fun sfuff**

* Some kind of bonus level
  * Appears randomly and not very often
  * Can have different food items
  * Or a special riddle that they get two shots on


**Aesthetic Cleanup**

* Color the hover border according to the element hovered and context
  * Apples have a red border...


**Final Attrib Rules**
* has attribute
* attribute value = something
* attribute starts with
* attribute ends with


**TO-DO**

* Pull jquery from CDN?
* Refactor
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


**Attribute selectors**

* has attribute [for]
* has an attribute with exact value
  * ``[for=bob]``
* has an attribute that starts with
  * ``[for^=bob]``
* has an attribute that contains
  * ``[for*=bob]``
* has an attribute that ends with
  * ``[for$=bob]``
* has this value in a list of space-separated attributes ``for="bob mary"``
  * ``[for~=bob]``
* has this value in a list of dash separated attributes ``for="bob-mary"``
  * ``[for~=bob]``


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
