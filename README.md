#Welcome to CSS Diner
This is a quick game to learn and refresh your knowledge of CSS selectors.

To play, visit [flukeout.github.io](http://flukeout.github.io/)

###Filing issues and PRs
Please file issues and PRs in the [css-diner repo](https://github.com/flukeout/css-diner/).

###Repo structure
Here's the repo structure, it's a bit confusing...

* Currently, all of the working code (including issues, PRs and in-progress branches) is hosted in the [css-diner repo](https://github.com/flukeout/css-diner/)
  * The lastest version of the code is on the ``develop`` branch
* The live version is published from the [flukeout.github.io repo](https://github.com/flukeout/flukeout.github.io/issues)
  * Live version lives on the ``master`` branch

###Deploying

This is more of a note to myself in case I forget, to deploy the latest version, I'll have to push to the ``master`` branch on the ``flukeout.github.io`` repo from the latest ``develop`` branch.

#Roadmap and Status
Updated August 2, 2016

My main goal in the coming weeks is to review all of the outstanding issues and Pull Requests, improve analytics & add a few features.

**Next up**

* [ ] Review all opened PRs
* [ ] Review all opened issues
* [ ] Add better analytics
  * Improve prove Google Analytics by adding events for each questions
  * Add more robust tracking to see where people get stuck and how many of the levels they complete

**Features & Improvements**

Some of these are accounted for in Pull Requests already, which I'll review, but here are some ideas...

* [ ] Create levels for attribute selectors
  * Will probably add attributes like ``customer='bob'`` and place a little nametag by those dishes
* [ ] Figure out how to tackle the ``.table`` element
  * Including it in the selector string makes the selectors invalid, but it shouldn't
* [ ] Investigate the order of stacked oranges in the markup, some users think it's counter intuitive
* [ ] Block attempts to use comma between selectors
* [ ] Only pass each level if that level's selector is used
* [ ] Make it easier to navigate between levels
* [ ] Number all of the levels in the menu
* [ ] Keep track per user (via localstorage) which levels they've completed and show a completion percentage
* [ ] Add UI to Tweet about finishing all of the levels
* [ ] Add additional challenges per Selector
  * Some repetition per level would be good
