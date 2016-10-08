##Left-off

**To-do**
* Highlight the 'syntax' better? It wasn't really that useful for Sarah
  * The A + B stuff, not sure if it's relatable enough
  * The examples are better anyway


##Feature Ideas

**Notes & Thoughts**

* I should present even and odd stuff better
  * Right now it's in nth-of-type, but would work better in nth-child maybe?
  * :nth-child(even) is a thing
* Divide the levels into groups?
  * Is it daunting? Too many levels?

----- ^ Prioritize this stuff later ------------------------------------------------

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

**Branding**

* Pull jquery from CDN
* Figure out CNAME setup for github
  * Would be cool for it to always show up as cssdiner.com

**Questions**

* Is it possible to track where & how the diner is being shared?
  * Sharetally, or something similar?

**Tracking where people have trouble**

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
