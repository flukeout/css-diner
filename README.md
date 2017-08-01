# Welcome to CSS Diner

It's a fun game to learn and practice CSS selectors.

To play, visit [flukeout.github.io](http://flukeout.github.io/) or [cssdiner.com](http://cssdiner.com/)

### Change Log

**Aug 25,2016**
* Added Twitter, Facebook and Email share actions
  * Tracking clicks with GA Events
* Made the level menu and editor area scroll independently
  * Using custom jQuery scroll library

**Aug 18,2016**
* Started using ``cssdiner.com`` to redirect to ``flukeout.github.io``

**Aug 12,2016**
* Added checkmarks to completed levels in level menu and header

**Aug 4,2016**
* Began tracking progress and correct guesses with GA Events


### Filing issues and PRs

Please file issues and PRs in the [css-diner repo](https://github.com/flukeout/css-diner/).

### Repo structure

Here's the repo structure, it's a bit confusing...

* Currently, all of the working code (including issues, PRs and in-progress branches) is hosted in the [css-diner repo](https://github.com/flukeout/css-diner/)
  * The lastest version of the code is on the ``develop`` branch
* The live version is published from the [flukeout.github.io repo](https://github.com/flukeout/flukeout.github.io/issues)
  * Live version lives on the ``master`` branch

### Deploying

This is more of a note to myself in case I forget, to deploy the latest version, I'll have to push to the ``master`` branch on the ``flukeout.github.io`` repo from the latest ``develop`` branch.

# Roadmap and Status

**Potential Features & Improvements**

* Lots of people have trouble with level 19, how should I address this?
* Create levels for attribute selectors
  * Will probably add attributes like ``customer='bob'`` and place a little nametag by those dishes
  * Also some great ideas in [this issue](https://github.com/flukeout/css-diner/issues/91)
* Figure out how to tackle the ``.table`` element
  * Including it in the selector string makes the selectors invalid, but it shouldn't
* Investigate the order of stacked oranges in the markup, some users think it's counter intuitive
* Block attempts to use comma between selectors
* Only pass each level if that level's selector is used
* Make it easier to navigate between levels
* Number all of the levels in the menu
* Add UI to Tweet about finishing all of the levels
* Add additional challenges per Selector
  * Some repetition per level would be good

### Special Thanks

* [@k88hudson](https://twitter.com/k88hudson)
* [@antlam](http://www.twitter.com/antlam)
* [@smashman2004](https://twitter.com/smashman2004)
