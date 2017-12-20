# Portfolio


## Synopsis


This website is an **online portfolio** about me; Mark Winkler.
It contains information on my past and current experiences,
as well as my motivation for the future. All built with mobile in mind, with
pure `HTML5`, `CSS3` and `JavaScript ES6`.
Enjoy!


## Development

Original idea with simple wireframes.

Mobile general direction:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Wireframe.jpg" align="center" width="572"></a>

Mobile nav open:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Mobile-Nav-Open.jpg" align="center" width="572"></a>


Desktop general direction:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Desktop-wireframe.jpg" align="center" width="572"></a>

Larger display differences, Full HD and up:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Desktop-HD-Wireframe.jpg" align="center" width="572"></a>

Popup window with Javascript or CSS, which will display some sort of additional information:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/master/images/Popup-Wireframe.jpg" align="center" width="572"></a>



This idea was then taken on, and development begun. I started development by ensuring HTML5 semantics are used throughout. My aim was to minimise additional divs and aim to stick to semantics as much as possible. This improves maintainability and results in a clearer code.

Responsiveness was the key. Throughout the development, whenever a new style was created, it was tested across large variety of resolutions from 2k down to mobile sizes. This ensured that breakpoints are applied to any new styles as required.

Validation was run against the HTML multiple times, with only two times highlighting a warning, which were missing header tag from a section and table row and column count not matching.

The rest of the process was an incremental development. Make a few changes, then use live preview or refresh the page to ensure it worked as intended, then commit changes to Git.

### Branching 

#### JavaScript escape key

What I used branching for was the attempt to add the escape key to close the popup windows developed for the employee section. I decided to use branching, as this development required a lot of changes to the JavaScript and I was not sure if I can make it work. Luckily, I managed to, after working through a few possible solutions and have merged it with my `master` branch. 

I have kept in the old branch in for clarity.

#### Brackets - text editor indentation problems.

Looking at my source code through GitHub pages revealed that whilst my source code looked fine in the Brackets text editor, it came out wrong on GitHub pages. After pasting it into several text editors, I realised that this was not GitHub pages issue, but in fact Brackets. 

This is an example snippet of my HTML and how it looked in Brackets:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/indentation-fix/images/indentation-in-brackets.jpg" align="center"></a>

And this is what it looked like in different editor or on GitHub pages:

<a href="url"><img src="https://github.com/MarkWinkler/MarkWinkler.github.io/blob/indentation-fix/images/indentation-in-other.jpg" align="center"></a>

The difference, was that it displayed with a lot more space, destroying my code indentations. So, I decided to use branching in order to try to solve this issue. Branching was appropriate, due to having to change every single file, besides this readme. If it did not work out, then I could always go back to the master branch and delete this one, without affecting the code in any way possible.

The solution, Reference [13], luckily, did not need to be a manual one. I found a tabtospace extension on GitHub, which I have installed and used on my code. Once this has been tested and confirmed that no functionality was affected the branch was merged.
Overall, this change would not have needed to happen if Brackets worked properly.

I have also kept this branch in for clarity.

Usually I would delete both branches, however the marking scheme clearly stated branching as a feature development and I decided to keep these in, just to make it clear during marking. :)

### Javascript Development

Javascript was rather difficult, as I do not have much experience in using it. Luckily, using the lab example (which I have implemented for the menu), I was able to use the same principle to create popup windows. This included the highly encouraged eventlisteners, adding classes to the classlist to display the window and the variety of ways in which the window can be closed (including accessibility for keyboard controls).

## Principles of Design (PARC)
Reference [9]

Proximity - I have made my website layout clear, with separate sections for each menu item. There is sufficient padding between sections and all titled with semantic elements, to ensure these are a clear break-down. I have tested the website without CSS too, and the flow of information would make it simple for a screen reader to process the information too.

Alignment - This is demonstrated by the profile picture at the top which is closely aligned to the header, suggesting Mark Winkler - Portfolio is related to the image. Further down the site Location and the short description is aligned to Google Maps and the same can be found for the Contact and employment sections.

Repetition - The first example of this is the navigation menu on the left which is consistently visible on larger devices. On top of this, other than the introduction section, headers, fonts, logo sizes are all kept the same to ensure the same experience throughout the portfolio.

Contrast - The biggest contrast is between the navigation menu and main section of the website. This is to ensure, the navigation can be found quickly and it stands out. There is also a slight contrast in the introduction section which aims to capture the attention of visitors.

## Accessbility and screen reader video

For accessiblity I ensured, everything is accessible without CSS and mostly I tried to concentrate on keyboard controls. 
I tested through my website many times with keyboard and came up with some solutions.
The final quick recording of navigating throug the website is saved in the "screen reader video" folder. 

One of the obstacles was the Google Maps, as the screen reader would process it and read out "Terms of use", "Report a map error", "button" and so on.. I felt this would be extremely frustrating for screen reader users, so I researched and found `aria-hidden="true"` as the perfect solution. This is demonstrated in my video.

The other difficulty was the Employement section and I was not able to achieve a solution I wanted. The idea was when the popup window opens, a `focus()` property would be set. I was not able to make it work and after reasearch online, unfortunetly I did not find a suitable solution. Luckily as demonstrated in my video, it is still very usable and using the additional `screen-reader-text`, Referemce [16], I could provide clear instructions to the users. This information states that they can close the winow using the escape key, or by clicking on the multiplication symbol (which is read out when highlighted), but the most crucial information is that the information will appear after the logos. 

It is worth noting that the screen reader I have used, was not too highly rated and when I went a bit quicker in the video, you might notice parts of the text "skipping". This is nothing to do with the pharagraphs or the headings, but rather the way this screen reader seem to work.  

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

There was a workaround, that I came up with, which required a lot of excess html tags and was not necessarily good practice (lot of div, positioning and wrapping of sections). I have now realised, that this could have been the perfect opportunity to make use of GitHub branching again, but unfortunately, I did not think of it at the time.

I have run my CSS through csslint.net, Reference [10]. It has produced just over 30 warnings and no errors.
Initially, it produced some additional warnings, where the warning was genuine, like defining `text-align: center` twice for instance. Once these have been addressed, I was left with errors to do with ID's within selectors, which is a controversial topic, Reference [11]. Another warning was not to use width and padding together, as it might make elements larger than expected. This is no problem as I have tested element sizes extensively to ensure smooth breakpoints and sensible sizes across different window sizes. 

Error to do with multiple headings (h1, h2, h3), however these are to do with breakpoints and so are the "Too many font-size declarations." Overall the CSS lint "errors" that are left are, in my opinion, nothing to worry about.

### Animation testing
The animations were tested on a variety of devices and browsers.
Initially, I have implemented them with animation delays. The idea was to allow each animated element to fade in incrementally. The issue was that for this to work without elements appearing, disappearing and appearing again, I had to set the opacity of the element to 0 and let the animation make it appear with `animation fill mode: forwards;`. 

This seemed to work, however, after testing on older browsers I realised that the animations do not run and therefore the elements stay hidden. I then reworked the animation by increasing animation duration and setting the 0% and 50% to be `opacity: 0`. This has achieved the same effect as the animation delay, without having to set elements to be `opacity: 0` initially.

This made me realise how important it is NOT to rely on animations. Now, even if none of the animations run on my website, everything is viewable, accessible and users will have no negative impact if they are using older browsers.

I have removed `border-radius` from profile picture animation, as it caused performance issues on mobiles.

### JavaScript testing

For the testing of Javascript, I used the online example of W3Schools, which presented inline scripts, onClicks and separate snippets. 
I implemented this with eventlisteners and linked it to relevant sections. There had to be a lot of changes, therefore adequate testing was required.

I knew I needed to have a separate id for `popup` and `openPopup`, as each popup window would be different.

`span` was a `getElementsByClassName` and I thought, I can include this once, then make use of it for all 3 popup windows. This did not work and unfortunately, I had to use `close1`, `close2` and `close3` (along with the duplication of CSS style). This was not ideal, and I am sure there are better solutions, however, I was glad that I made it work nonetheless.


The other testing was to do with the branching section. Where users could press "escape" on their keyboards to close the popup window. There were various solutions tested and eventually I came up with the solution by following the already created spans javascript code.

I had to ensure that these windows were sufficiently tested, so my aim was for all combinations to be exhausted. Some of this included:

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

One of the highlighted elements that they really liked was how much the website changed on larger devices and even on phones if it was tiled 90 degrees. The different colours for menu items was praised and the simplicity of layout and amount of information was liked.

A negative point highlighted, which I have missed was the main title of the page, was misspelt. Instead of Portfolio it was Portolio. Good thing that this was spotted, as somehow, I have missed that completely. Another negative point was that the `border-radius` animation seemed to be slow. I then deducted that this type of animation is perhaps a bit too much to include and fading in the elements would be enough.

## References

Most are highlighted in relevant sections.

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

- [8] Google Maps API:
https://developers.google.com/maps/documentation/javascript/tutorial

- [9] The P.A.R.C Principles of Visual Design:
http://www.cs.sfu.ca/~tamaras/design/P_A_R_C_Principles_Visual.html

- [10] CSS Lint:
http://csslint.net/

- [11] Discussion on CSS Lint warnings, specifically ID's as selectors:
https://2002-2012.mattwilcox.net/archive/entry/id/1054/

- [12] Image "alttext" guidlines for accessiblity:
https://webaim.org/techniques/alttext/

- [13] Tabtospace extension to sort Brackets text editor indentation issues:
https://github.com/davidderaedt/tabtospace-extension

- [14] LASA description used from DMU website:
http://www.dmu.ac.uk/research/research-faculties-and-institutes/health-and-life-sciences/leicester-academy-for-the-study-of-ageing/leicester-academy-for-the-study-of-ageing.aspx

- [15] Use `rel="noopener"` when `target="_blank"` is used to open links in a new tab.
https://developers.google.com/web/tools/lighthouse/audits/noopener

- [16] Screen reader text used for employment section
https://www.coolfields.co.uk/2016/05/text-for-screen-readers-only-updated/

- [17] Hide content from keyboard users, useful for screen readers. Used in this instance for Google Maps:
https://www.w3.org/TR/html-aria/

## License Information

Google fonts are license under Sil Open Font License (OFL), which makes them available for use even commercially:
http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL

Google Maps API free to use on websites that are free for anyone to use:
https://developers.google.com/maps/pricing-and-plans/