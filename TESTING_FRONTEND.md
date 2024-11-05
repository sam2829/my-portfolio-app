# Sam Scarisbrick Portfolio React Testing

## Testing Overview

During the development of this project, numerous testing was carried out by myself and others.

## Contents

- [Sam Scarisbrick Portfolio React Testing](#sam-scarisbrick-portfolio-react-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Validators](#validators)
    - [Lighthouse](#lighthouse)
    - [ESLint JavaScript](#eslint-javascript)
    - [W3C CSS Validator](#w3c-css-validator)
  - [Responsiveness](#responsiveness)
  - [Bugs & Fixes](#bugs-&-fixes)

## Manual Testing

Manual testing was carried out throughout the project, making sure user stories were working successfully and the site was functioning correctly.

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
|`Homepage`|
| When user first loads site. | When the page first loads, the user is presented with a clear homepage displaying information about Sam Scarisbrick, image of sam, icons to social media and link to portfolio page. | Loaded the homepage. | Homepage loads and I am presented with a clear homepage displaying all different information on Sam Scarisbrick. | Pass |
| Portfolio button re-directs to correct page. | When a user clicks on the view my portfolio button, the user should be re-directed to the portfolio page. | Clicked on both portfolio button numerous times. | Each time I was re-directed to the portfolio page. | Pass |
| Animation works in homepage. | When the homepage loads, the image and the paragraph sections should slowly animate into display from seperate sides. | Loaded the homepage. | When I loaded the homepage, the image and paragraph sections slowly appeared on the screen, coming in from different sides. | Pass |
| Animation delays work different for different screen sizes. | When the home page loads, the animation should work slightly differently depending on the screen size. | Loaded the homepage in different screen sizes. | In each screen size the animation worked as it should and appeared at the correct time. | Pass |
| Homepage social icons work correctly. | When a user clicks on the icon links, the link is opened up in a new tab and to the correct destination. | Clicked on the different social icon links numerous times. | Each time the link opened up in a new tab and was to the correct destination. | Pass |
|`Navbar`|
| Check user can navigate using navbar. | If the user is on any page on the site, the user is able to click on any link on the navbar and re-directed to the correct page. | Whilst on the site, I tried navigating from page to page clicking on all the different links. | Each time I clicked on a navbar link, I was re-directed to the correct page. | Pass |
| Hamburger menu. | When on a mobile device the navbar should now be a drop down hamburger menu. | Loaded the site on several mobile devices. | Each time the navbar was in the form of the hamburger menu. | Pass |
| Active link. | When user is on a certain page, the nav link for that page will have a white underline to show user that they are on that page. | Went to all the pages on the site. | Each nav link when on that respected page, the nav link had the white underline. | Pass |
| Hover over link. | When user hovers over a nav link, the nav link will have a white underline slowly appear to show user that they are hovering over that link. | Hovered over all nav links. | Each nav link when hovered over, their respected nav link slowly showed a white underline appear. | Pass |
| Main logo link to homepage. | If the user clicks on the main logo for the site, they are re-directed back to the homepage. | Clicked on the main logo from different pages on the site. | Each time I was navigated back to the homepage. | Pass |
|`Footer`|
| Footer is present on every page. | If the user is on any page on the site, the footer will be present at the bottom of the page. | Visited every page on the site. | On every page the footer was present in the correct place. | Pass |
| Footer links work correctly. | When a user clicks on the footer links, the link is opened up in a new tab and to the correct destination. | Clicked on the different footer links numerous times. | Each time the link opened up in a new tab and was to the correct destination. | Pass |
| Check user can navigate using footer links. | If the user is on any page on the site, the user is able to click on any link on the footer and re-directed to the correct page. | Whilst on the site, I tried navigating from page to page clicking on all the different links. | Each time I clicked on a footer link, I was re-directed to the correct page. | Pass |
| Hover over link. | When user hovers over a footer link, the link will have a underline slowly appear to show user that they are hovering over that link. | Hovered over all links. | Each link when hovered over, their respected link slowly showed a underline appear. | Pass |
|`About page`|
| About page loads and displays relevant info. | When the user visits the about page, the about page loads and explains all about Sam Scarisbrick along with the list of skills learnt. | Visited the about page. | The about page displayed all the information about Sam Scarisbrick along with the list of skills. | Pass |
| Fetch list of skills. | When user visits the about page, the user can clearly see the list of skills fetched from the api. | Loaded the about page. | List of skills were clearly on display. | Pass |
| Loading Spinner present when fetching skills. | When the user visits the about page, they can clearly see loading spinners informing the user that the site is fetching data from the backend. | Loaded the about page. | Loading spinners where present whilst waiting for data to be fetched, then disapeared when skills were displayed. | Pass |
| Error message appears if failed to fetch skills. | When the user visits the about page if the skills cannot be fetched from he api, a warning message will appear on the screen informing the user of this. | Loaded the about page with a fault to make sure skills could not be fetched. | Error message appears informing user skills could not be fetched. | Pass |
| Animation works in about page. | When the about page loads, the skills sections should slowly animate into display in a staggered effect. | Loaded the about page. | When I loaded the about page, the skills sections slowly appeared on the screen, displaying one after the other. | Pass |
|`Portfolio page`|
| Portfolio page loads and projects display. | When the user visits the portfolio page, the portfolio page loads and displays all the projects Sam Scarisbrick has worked on. | Visited the portfolio page. | The portfolio page displayed all the projects Sam Scarisbrick has worked on. | Pass |
| Fetch list of projects. | When user visits the portfolio page, the user can clearly see the list of all projects fetched from the api. | Loaded the portfolio page. | List of projects were clearly on display. | Pass |
| Loading Spinner present when fetching projects. | When the user visits the portfolio page, they can clearly see loading spinner, informing the user that the site is fetching data from the backend. | Loaded the portfolio page. | Loading spinner was present whilst waiting for data to be fetched, then disapeared when projects were displayed. | Pass |
| Error message appears if failed to fetch projects. | When the user visits the portfolio page if the projects cannot be fetched from he api, a warning message will appear on the screen informing the user of this. | Loaded the portfolio page with a fault to make sure skills could not be fetched. | Error message appears informing user skills could not be fetched. | Pass |
| Dropdown menu displays lists of skills to filter projects. | On the portfolio page, a dropdown menu will appear giving the the uswr a list of skills to filter the projects. If the user selects a certain skill then the projects will re-render with only projects that have used that particular skill. | Loaded portfolio page and tried all the different skills in the dropdown menu. | Each time I selected a skill from the dropdown menu, the project list re-rendered only with the projects with that particular skill. | Pass |
| Animation works in portfolio page. | When the portfolio page loads, the projects section should slowly animate into display in a staggered effect. | Loaded the portfolio page. | When I loaded the portfolio page, the projects slowly appeared on the screen, displaying one after the other. | Pass |
| Overlay present over project icons. | When a user hovers over the icons on the projects in the projects list, an overlay should appear with the correct message over the correct icon. | Loaded the portfolio page and hovered over the GitHub and live site icons. | Each time I hovered over the GitHub icon it displayed the correct message and the same happened when I hovered over the live site icon. | Pass|
| GitHub icon works. | When on the portfolio page, if a user clicks on the GitHub icon, a new tab will open up and take the user to that projects GitHub page. | Loaded portfolio page and clicked on different projects GitHub icons. | Each time a new tab opened and that projects GitHub page was on display. | Pass |
| Live site icon works. | When on the portfolio page, if a user clicks on the live site icon, a new tab will open up and take the user to that projects live site. | Loaded portfolio page and clicked on different projects live site icons. | Each time a new tab opened and that projects live site was on display. | Pass |
|`Portfolio Detail page`|
| Portfolio detail page loads and unique project is displayed. | When the user visits the portfolio detail page, the portfolio detail page loads the particular project that Sam Scarisbrick has worked on. | Visited the portfolio detail page for different projects. | The portfolio page displayed the correct individual project that Sam Scarisbrick has worked on. | Pass |
| Fetch the correct project. | When user visits the portfolio detail page, the user can clearly see the correct project fetched from the api. | Loaded the portfolio detail page for different projects. | The correct individual project was clearly on display. | Pass |
| Loading Spinner present when fetching project. | When the user visits the portfolio detail page, they can clearly see loading spinner, informing the user that the site is fetching data from the backend. | Loaded the portfolio detail page. | Loading spinner was present whilst waiting for data to be fetched, then disapeared when project was displayed. | Pass |
| Error message appears if failed to fetch project. | When the user visits the portfolio detail page if the project cannot be fetched from he api, a warning message will appear on the screen informing the user of this. | Loaded the portfolio detail page with a fault to make sure skills could not be fetched. | Error message appears informing user project could not be fetched. | Pass |
| Animation works in portfolio detail page. | When the portfolio detail page loads, the image and the paragraph sections should slowly animate into display from seperate sides. | Loaded the portfolio detail page. | When I loaded the portfolio detail page, the image and paragraph sections slowly appeared on the screen, coming in from different sides. | Pass |
| Animation delays work different for different screen sizes. | When the portfolio detail page loads, the animation should work slightly differently depending on the screen size. | Loaded the portfolio detail page in different screen sizes. | In each screen size the animation worked as it should and appeared at the correct time. | Pass |
| View Live site button works. | In portfolio detail page, the user can click on the view live site button and should open a new tab, taking the user to the projects live site. | Open portfolio detail page for different projects and clicked view live site button. | Each time, a new tab opened up taking me to the projects live site. | Pass |
| Go back button works. | When in portfolio detail page, if the user clicks the go back button, they are taken back to the main portfolio page. | Loaded portfolio detail page and clicked the go back button. | Each time I was taken to the main portfolio page. | Pass |
|`Contact page`|
| Contact page loads and contact information is displayed. | When the user visits the contact page, the contact page loads a brief paragraph about Sam Scarisbrick, social icons for how to contact and the contact form. | Visited the contact page. | The contact page displayed the correct contact information for Sam Scarisbrick and the contact form. | Pass |
| Animation works in contact page. | When the contact page loads, the contact form and the paragraph sections should slowly animate into display from seperate sides. | Loaded the contact page. | When I loaded the contact page, the contact form and paragraph sections slowly appeared on the screen, coming in from different sides. | Pass |
| Animation delays work different for different screen sizes. | When the contact page loads, the animation should work slightly differently depending on the screen size. | Loaded the contact page in different screen sizes. | In each screen size the animation worked as it should and appeared at the correct time. | Pass |
| Contact page social icons work correctly. | When a user clicks on the icon links, the link is opened up in a new tab and to the correct destination. | Clicked on the different social icon links numerous times. | Each time the link opened up in a new tab and was to the correct destination. | Pass |
|`Contact form`|
| Send when filled out correctly. | If the user fills out the form correctly, they are able to send an email to Sam Scarisbrick. Alert message will also appear informing the user that it has been sent. | Filled out the contact form correctly. | Each time I filled out the form correctly, I successfully sent and email to Sam Scarisbrick and an alert message appeared saying I was successfull. | Pass |
| Form won't send if incorrect. | If the contact form is not filled out correctly, the form will not be sent and error messages under each field that is incorrect will be displayed. An alert message will also be displayed to inform the user they were unsuccessful and to check the contact form. | Filled out the form incorrectly numerous times with different errors. | Each time the input field that had an error, had an error message underneath explaining the error. An alert message was also on the screen informing me that the form was unsuccessful. | Pass |
| Send button disabled and loading icon. | When the user had filled out the form correctly and pressed send, the send button will now be disabled to prevent multiple submits and the button will inform the form is sending and displays a loading icon. | Filled out the form correctly and pressed send. | Each time the send button was disabled, it informed me it was sending and the loading icon was present. | Pass |

[back to top](#sam-scarisbrick-portfolio-react-testing)

## Validators

### Lighthouse

<details>

<summary>Desktop</summary>

Homepage:



About page:



Portfolio page:


Portfolio Detail page:


Contact page:



</details>

<details>

<summary>Mobile</summary>

Homepage:



About page:



Portfolio page:


Portfolio Detail page:


Contact page:



</details>

[back to top](#sam-scarisbrick-portfolio-react-testing)

### ESLint JavaScript

Most of the JavaScript code validation was done through the help of the prettier code formatting extension and ESLint running through the production of the app.

All JavaScript files were then validated using ESLint JavaScript validator, which reported back no issues. 

### W3C CSS Validator

W3C CSS Validator was used to validate the site's CSS code. All style pages return with no errors found:

![W3C CSS Validattion Screenshot](/docs/testing_frontend_screenshots/css-validation.png)

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards. The site was also tested on multiple browsers and devices.

Browser test table:

| Browser Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Chrome | As Expected | Pass |
| Firefox | As Expected | Pass |
| Edge | As Expected | Pass |
|Samsung | As Expected | Pass |

Devices tested and devices using google tools:

| Device Tested | Actual Result | Pass / Fail |
| --- | --- | --- |
| Acer Laptop | As expected | Pass |
| Samsung 22 inch Screen | As expected | Pass |
| i Phone SE | As expected | Pass |
| i Phone XR | As expected | Pass |
| i Phone 12 Pro | As expected | Pass |
| i Phone 14 Pro Max | As expected | Pass |
| Pixel 7 | As expected | Pass |
| Samsung Galaxy S8 | As expected | Pass |
| Samsung S20 Ultra | As expected | Pass |
| iPad Mini | As expected | Pass |
| iPad Air | As expected | Pass |
| iPad Pro | As expected | Pass |
| Surface Pro 7 | As expected | Pass |
| Surface Duo | As expected | Pass |
| Galaxy Fold | As expected | Pass |
| Samsung Galaxy A51/71 | As expected | Pass |
| Nest Hub | As expected | Pass |
| Nest Hub Max | As expected | Pass |

[back to top](#sam-scarisbrick-portfolio-react-testing)
