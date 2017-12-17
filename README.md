# Portfolio


## Synopsis


This website is an **online portfolio** about me; Mark Winkler.
It contains information on my past and current experiences,
as well as my motivation for the future. All built with
pure `HTML5`, `CSS3` and `JavaScript ES6`.
Please enjoy!


## Development

Original idea with simple wireframes.

For Mobile:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Wireframe.jpg" align="center" width="572"></a>



For Desktop:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Desktop-wireframe.jpg" align="center" width="572"></a>


This idea was then taken on, and development begun. I started development by ensuring HTML5 semantics are used throughout. My aim was to minimise additional divs and aim to stick to semantics as much as possible.

Responsiveness was the key. Throughout the development, whenever a new style was created, it was tested across large variety of resolutions from 2k down to mobile sizes. This ensured that breakpoints are applied to any new styles as required.

Validation was run against the HTML multiple times, with only a single time highlighting a warning, which was a missing header tag from a section.

The rest of the process was an incremental development. Make a few changes, then use live preview or refresh the page to ensure it worked as intended.

### Branching 

What I used branching for was the attempt to add the escape key to close the popup windows. I decided to use branching, as this development required a lot of changes to the JavaScript and I was not sure if I can make it work. Luckily, I managed to, after working through a few possible solutions and have merged it with my `master` branch. 

I have kept in the old branch for clarity.


### Javascript Development

Javascript was rather difficult, as I do not have much experience in using it. Luckily, using the lab example (which I have implemented for the menu), I was able to use the same principle to create popup windows. This included the highly encouraged eventlisteners, adding classes to the classlist to display the window and the variety of ways in which the window can be closed (including accessibility for keyboard controls).

## Tests

### Markdown testing
One challenge was making the images work in the markdown.
First I used normal markdown syntax:
`![Mobile Wireframe](https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Wireframe.jpg)`
This seemed to do the trick, only it was making the images larger despite my commits, where I specifically made 
the images smaller.

To overcome this, I have looked online and found forum posts stating that HTML works within GiTHub's Readme file.
So I went ahead and changed the syntax to the following:
`<img src="(https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Wireframe.jpg" width="572">`
The width directly corresponds to the actual width of the image.

Turned out that this was not the solution and people on forums should not be trusted. The actual solution is as follows:
`<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Wireframe.jpg" align="center" width="572"></a>`

### HTML and CSS testing

One of the ideas, I have tested was highlighting each section in separate colours. This could have looked nice, but I have had issues with trying to get section background to go full width because of restrictions (navbar, set page width etc).

There was a workaround, that I came up with, which required a lot of excess html tags and was not necessarily good practice. I have now realised, that this could have been the perfect opportunity to make use of GitHub branching again, but unfortunately, I did not think of it at the time.



### JavaScript testing

For the testing of Javascript, I used the online example of W3C, which presented inline scripts, onClicks and separate snippets. 
I implemented this with eventlisteners and linked it to relevant sections.
I knew I needed to have a separate id for `popup` and `openPopup`, as each popup window would be different.
`span` was a `getElementsByClassName` and I thought I can include this once and make use of it for all 3 popup windows. This did not work and unfortunately, I had to use `close1`, `close2` and `close3` (along with the duplication of CSS style). This was not ideal, and I am sure there are better solutions, however, I was glad that I made it work nonetheless.

The other testing was to do with the branching section. Where users could press "escape" on their keyboards to close the popup window. There were various solutions tested and eventually I came up with the solution by following spans javascript code.

I had to ensure that these windows were sufficiently tested, so I ensured all combinations are exhausted. Some of this included:

- Closing popup by clicking outside of it.
- Closing popup by clicking on the span.
- Closing popup by escape.

These were then repeated in all the possible combinations (Opening employer 2 first, closing with escape first.)

Additionally:

- Pressing escape prior of opening the popup.
- Testing across different browsers.
- Testing across different devices including Android and IOS.
- Passing completed website over to family and friends to see if it works on their device(s) also.

Overall, I covered a lot of different scenarios and they have worked just as intended.


### User testing

I have passed my website along to family members. They tested on laptop and phones. The feedback received was positive. They really liked the simplicity of the website. There was no problem with navigation or opening any of the additional windows. 

One of the highlighted elements that they really liked was how much the website changed on larger devices and even on phones if it was tiled 90 degrees.

A negative point highlighted, which I have missed was the main title of the page, was misspelt. Instead of Portfolio it was Portolio. Good thing that this was spotted, as somehow, I have missed that completely.

## References

Most are highlighted in relevant comments.

- [1] Source used to select the breakpoints for development: https://medium.com/@uiuxlab/the-most-used-responsive-breakpoints-in-2017-of-mine-9588e9bd3a8a

- [2] All fonts defined to be used on the website come from: https://fonts.google.com

- [3] SVG used for the mobile "menu" icon: https://www.iconfinder.com/icons/134216/hamburger_lines_menu_icon

- [4] Modal/popup window taken from w3school and reworked to fit the needs of my portfolio: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

- [5] Sitemap generated with XML-Sitemaps:
https://www.xml-sitemaps.com

- [6] Accessiblity quick references:
https://webaim.org/resources/quickref/

- [7] keycode Deprecated:
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode


## License

Google fonts are license under Sil Open Font License (OFL), which makes them available for use even commercially:
http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL