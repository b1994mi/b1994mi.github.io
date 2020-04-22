# Ismail's Portfolio

My portfolio web page consisting of my works, skills, and about me. It showcase's my ability to use Vue.js components, data binding, and for-loops. I also use some other technologies to help me build this site. I will showcase more advanced use of Vue.js (routing, etc.) in the projects to come.

## Description

This web is comprised of four section:

* The Header: the inspiration comes from the currently popular dual gradient with waves cutout, it uses SVG element and the color is matched with the bg color using vue binding with var name ```svgColor```;
* My Works: uses the Glider.js to show the projects that I have involved with, the component is ```<works-card></works-card>``` and it accepts ```isDark``` data from vue app as props, it uses the v-for loop to render the data stored inside the component;
* My Skills: same as My Works but shows only 2 cards on large display and 1 card on small display, the component is ```<skills-card></skills-card>```;
* About Me: uses some v-for loop to render contacts and experience data, the component ```<aboutme-content></aboutme-content>``` calls the components ```<summary-card></summary-card> <contacts-card></contacts-card> <exp-card></exp-card>```.

The overall js files is named to mimic an object, thus having the first letter capital such as ```WorksCard.js```. I also edited the ```glider.css``` file as I wanted a custom looking button for the next & previous button on glider cards carousel.

## For You

If you want to use my portfolio as your template, go ahead. :)

## Tech Stacks

I thank you for these authors of their respective technologies that I use for my portfolio web page.

* Vue.js for a dark/light theme toggle button and to shorten some of the html code using Vue Components,
* Glider.js by nickpiscitelli to have sliding cards carousel,
* Font Awesome to have awesome icons,
* W3.css to have simple grid and styling,
* getwaves.io by z creative labs for generating the SVG wave.