** QA b4 Launch **
  * Check to make sure all levels work
  * Check that examples are correct

  * QA the reset - it's wiggin out yo

**Possible Level updates?**

* selector: "plate:nth-of-type(2n+3)"
  * Make this level use apples instead of plates? Seems too big..

**Next update**

* Email signup better twitter engagement?
* Visual enhancements


**Ideas & Future**

* Tip jar / buy me a beer
* Riddle of the day / week - that would be cool <- gives people a reason for engagement too,
* Return customers so to speak.
* Could be dope

**Final Attrib Rules**
* has attribute
* attribute value = something
* attribute starts with
* attribute ends with

**Maybes & Neat-o Improvements **

* css line 591 - highlight border to match the element color?
  * Commented out for now, but shoudl add again?
  * I can make them specific to the situation so they always show up nicely

**Attribute types I haven't used**

[attr~=value]
value is a whitespace-separated list of words, one of which is exactly "value".

[attr|=value]
Represents an element with an attribute name of attr. Its value can be exactly “value” or can begin with “value” immediately followed by “-” (U+002D). It can be used for language subcode matches.

[attr~=value]
Represents an element with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly "value".


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
