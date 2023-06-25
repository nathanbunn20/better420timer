# better420timer
A timer built in html css & pure javascript that lets you know how soon it is until 4:20 somewhere in the world.

Only dependency is the minified [luxon package](https://moment.github.io/luxon/api-docs/index.html)

The better420timer is optimized to collect today and tomorrow's 4:20 times all around the world on initial load of the page. Then every 24 hours the better420timer will refresh that list of 4:20 times (for that day and the next). With that information, the better420timer compares "now" with the list of 4:20 times and selects the closest 4:20 time that hasn't occured yet.

### Usage
The better420timer replaces the entire innerHTML of the div elements with the id's "hours", "minutes", and "seconds" **with the numeric value for that time component**, so anything you put in those div's will be overwritten by the program. You'll have to work around those div's to style it how you want to.

*Heads up: The hours div as well as the div that the hours is inside (the parent div) will be hidden if the hours is 0 **AND** the parent div is not the timer (the div with the class="timer"). This is so that the label for hours get's hidden too. If you do not want this behavior, then you'll have to edit the javascript (four-twenty-timer.js):*

Find this
```js
if (hoursEl.parentElement.classList.contains('timer')) {
    hoursEl.style.display = 'none';
} else {
    hoursEl.parentElement.style.display = 'none';
}
```

Delete all of that and replace with this
```js
hoursEl.style.display = 'none';
```
