# Sam Scarisbrick Portfolio

## Overview

Welcome to my portfolio website! As an eager junior developer, I've designed this site to showcase the projects I've built throughout my journey in software development. Here, you can explore my work, learn about my skills, and see my passion for creating innovative solutions. Thank you for visiting!

Here is a live version of the project dksjfbnsdjkfbndskf

responsive link goes here ksjbaskjdf

## Content

- [Sam Scarisbrick Portfolio](#sam-scarisbrick-portfolio)
  - [Overview](#overview)
  - [Backend](#backend)
  - [Planning](#planning)
  - [Data Models](#data-models)
    - [API Endpoints](#api-endpoints)
    - [Technologies Used](#technologies-used)
      - [Languages Used](#languages-used)
      - [Frameworks and Tools Used](#frameworks-and-tools-used)
      - [Libraries Used](#libraries-used)
    - [Testing Backend](#testing-backend)
    - [Deployment](#deployment)
  - [Frontend](#frontend)
    - [User Experience](#user-experience)
      - [The strategy Plane](#the-strategy-plane)
        - [Ideal User](#ideal-user)
        - [Site Goals](#site-goals)
      - [Agile Planning](#agile-planning)
        - [User Stories](#user-stories)
      - [Skeleton Plane](#skeleton-plane)
        - [Wireframes](#wireframes)
        - [Database Schema](#database-schema)
        - [Security](#security)
      - [The Scope Plane](#the-scope-plane)
      - [The Structure Plane](#the-structure-plane)
        - [Features](#features)
      - [The Surface Plane](#the-surface-plane)
        - [Design](#design)
    - [Use of Components](#use-of-components)
    - [Custom Hooks](#custom-hooks)
    - [Technologies Used](#technologies-used)
      - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Dependencies](#frameworks-libraries-and-dependencies)
      - [React](#react)
      - [React-Router-DOM](#react-router-dom)
      - [ReactDOM](#reactdom)
      - [Axios](#axios)
      - [React Bootstrap](#react-bootstrap)
      - [Font Awesome](#fontawesome)
      - [Google Fonts](#google-fonts)
      - [Prettier](#prettier)
      - [Framer Motion](#framer-motion)
    - [Testing Frontend](#testing-frontend)
  - [Credits](#credits)

## Planning

Planning started by using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important to the site. The user stories were then used to help create wireframes to see how the user would navigate and use the app. This can all be seen in more details in the frontend section [here](#frontend).
These were then used to help work out the required API endpoints to support the desired functionality of the site.

## Data Models

Data model schema was planned with the API endpoints, using an entity relationship diagram to show how the models were related.

The custom models Sam Scarisbrick Portfolio are:

**_Projects_**

The projects model was created so I could easily add new projects to the site using the admin page. This would make it a lot easier for me to add new projects without having to change any code.

**_Technologies_**

The technologies model was created so I can create new technologies Ive learnt on my journey. This would make things a lot easier to add new technologies to my list rather than trying to define a set list or change code in the future. This is linked to the projects model by a many to many field.

An entity relationship diagram was created using drawSQL to show the schemas for each of the models and how they are related:

![ERD Screenshot](/docs/readme_screenshots/drawsql.png)

## API Endpoints

| URL                      | HTTP Method | CRUD Operation                  | View name |
| ------------------------ | ----------- | ------------------------------- | --------- |
| `Projects Endpoints`     |
| /api/projects            | GET         | List all profiles               | LIST      |
| /api/projects/<int:pk>   | GET         | Get an individual project by id | DETAIL    |
| `Technologies Endpoints` |
| /api/technologies        | GET         | List of all technologies        | LIST      |
| `Email Endpoints`        |
| /api/send-email/         | POST        | Ability for user to post email  | POST      |

[back to top](#sam-scarisbrick-portfolio)

## Technologies Used

### Languages Used

- Python

- Django Rest Framework
  - Django Rest Framework was used as the main python framework in the development of this project.
- Supabase
  - Supabase was used for the production database.
- Cloudinary
  - Cloudinary was used to store the images and videos posted.
- VS Code
  - VS Code was used to write the code.
- GitHub
  - GitHub was used to store the projects code after being pushed from Gitpod.
- Heroku
  - Heroku was used for deployment.
- DrawSQL
  - DrawSQL was used to draw out the entity relationship diagram.

### Libraries Used

- Django - A python package for the django rest framework.
- psychopg2 - Database adapter to enable interaction between Python and PostgreSQL database.
- django cors headers - This Django app adds CORS headers to responses, to enable the API to respond to requests from origins other than its own host.
- Cloudinary - Used to store images and videos.
- Pillow - Used for image processing.
- gunicorn - Used to help run application.
- django filter - Used to help filter requests from frontend for images.

[back to top](#sam-scarisbrick-portfolio)

## Testing Backend

I have included details of my testing during and post development in a separate file called [TESTING_BACKEND.md](TESTING_BACKEND.md).

## Deployment

**_GitHub_**

This project was developed by using a Visual Studio Code. I first created a project in my folders and opened in VS Code.

- Once loaded, I then created a new repository for the project in GitHub.
- In GitHub, on the topleft there is a button labelled "new". Click this.
- Once clicked, I picked my repository name, then clicked the button labelled "Create repository".
- After this you can see the URL you need to set up your workspace to this GitHub repository.
- To then initially set up your workspace to the repository you first need add the repository with the command 'git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git'.
- Next add the changes with the command 'git add .'.
- Next commit the changes with the command 'git commit -m "initial commit"'.
  ' Next push to GitHub with the command 'git push -u origin main'. Once this push has been made, you then only have to use the command 'git push'.

**_Version Control_**

For version control the following steps were made:

- If any changes were made to my VS Code project.
- First files were made ready for commit with command - git add filename or git add . to add all files.
- To commit the changes using the following command - git commit -m "This is my commit" Note the brief description at the end of the command to make you aware of what changes have occurred.
- To then move the changes to GitHub, use the following command - git push

**_Clone Repo_**

Creating a clone allows you to make a copy of the repository at the specific point in time. This lets you run a copy of the project locally. This can be done by:

- Navigate to the repository you choose to clone in your GitHub.
- Clicking on the arrow of the green button named "Code" at the top of the file.
- Then select "Local" then under local select "HTTPS" and then copy that URL.
- Navigate to your code editor and within the terminal change the directory to the location you wish to clone the repository to.
- Type "git clone" and paste the copied HTTPS link from GitHub.
- Press enter and git will clone the repository to your local machine.

**_Forking the GitHub Repository_**

Forking the GitHub repository allows you to make a copy of the original repository on your GitHub account to view and make changes without it effecting the original repository. This can be done by:

- Log in to your GitHub account and locate the repository you wish to fork.
- Near the top of the page, under the "settings" button going across the page, you should see a button saying "Fork".
- Click the "Fork" button and you should now have a copy of the original repository in your GitHub account.

[back to top](#sam-scarisbrick-portfolio)

**_Deployment to Heroku_**

For deployment to Heroku the following steps were made:

- First sign in to your Heroku account.

  - On the top right of the page there is a drop-down menu called "new", click this and click on "create new app".
  - You then need to decide your unique app name using '-' between each word. Then select which region you are working from and then click on the button "create app".
  - Once you have clicked on "create app" you will be taken to a new page. On this page you will see a row of tabs at the top left of the page. You first need to click on the "settings" tab and go to the settings page.
  - Login into your Supabase account and create a new project.
  - Check the options you selected the click create project.
  - Once Aiven project is created, click on the project created and there you will see the URL, which you can copy ready to be placed in the Heroku app.
  - You will also need to log into your Cloudinary account, there you can select the dashboard option. In there you will see your Cloudinary URL, you will also need this for the Heroku app. You can copy this by clicking on the eye symbol next to it.
  - If you have any code that you have kept private which has been prevented from loading to your GitHub, then you must click on the button "Reveal Config Vars". A small table will then appear with columns "key" and "value". Config Vars used:
    - CLOUDINARY_URL: (Enter Cloudinary API URL)
    - DATABASE URL: (Enter the database URL from AIVEN)
    - SECRET_KEY: (Enter your secret key)
    - ALLOWED_HOST: (Enter the deployed Heroku app URL)
    - Also need to add the required envirmoent variables needed to send emails from the contact form.
  - I then went back to the tabs row at the top of the page and clicked on the "Deploy" tab to take me to the deploy page.
  - On the deployment page, I scrolled down to deployment method and confirmed I wanted to deploy through GitHub.
  - When I click on GitHub a search bar will appear underneath which will allow me to search for my GitHub repository. I made sure I spelt the repository I'm searching for exactly as I named it and then clicked the search button.
  - The repository then appeared underneath my search, I checked this was the correct repository and then clicked the "connect" button. This has now linked up my Heroku app and my GitHub repository code.
  - I then scrolled down to the button "Enable Automatic Deploys", this allows my Heroku app to automatically update every time I've pushed a new change to my code to GitHub. This is optional.
  - I then scrolled down and clicked on the button "Deploy Branch" which is now building the app.
  - Once the app is successfully deployed, a message appeared saying "your app was successfully deployed." Then click on the "view" button which will take me to the deployed link.

  [back to top](#sam-scarisbrick-portfolio)

## Frontend

### User Experience

#### The Stratgey Plane

My portfolio website is intended for people who want to see the exciting projects I have built and what skills I've learnt on my journey to becoming a junior software developer.

##### The Ideal User

- Someone who works in software / web development.
- Recruiters.
- Other software developers.

##### Site Goals

- Showcase my skills as a developer.
- Inspire and impress other developers and recruiters with my projects.

[back to top](#sam-scarisbrick-portfolio)

### Agile Planning

This project was developed using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important for the site.

It was carried out this way to try ensuring that all core requirements were completed first to give the project a complete feel and to make sure the most important user stories were implemented. When clicked on and opened the user story, the user story was assigned a label "must have", "should have" or "could have" so I would know the importance of the user story.

The kanban board was created using GitHub projects, this helped me be able to see all my user stories and be able to keep track of which ones had been done, to do or in progress.

![User Stories](/docs/readme_screenshots/user-stories.png)

Each User story was placed into it's own milestone iteration to help schedule the development of the project. These iterations can be set with dates but I did not do this due to fitting in around work and other commitments. In the iteration you can close a user story when finished, this will also keep track of how much is completed.

Milestones:

![GitHub Milestones](/docs/readme_screenshots/milestones.png)

[back to top](#sam-scarisbrick-portfolio)

##### User Stories

**_Themes_**

Themes were developed using the project goals as a starting point. These included:

- User management - This was necessary so that user could have all the necessary functions across the site.

- Admin management - This was necessary so that the admin to have full function of admin data and images on site.

**_Epics_**

Themes were then refined into the following epics:

- User management:

  - Easily navigate across site.

  - Able to contact Sam Scarisbrick.

- Admin management:

  - Sign in to admin page.

  - Add Technologies.

  - Add Projects.

  **_User Stories_**

The following user stories were completed throughout the development:

Homepage:

- As a User I can view homepage so that I can see all about TC Carpentry and images.

Navbar:

- As a User I can navigate the site using the Navbar so that easily navigate across the site.

Footer:

- As a User I can see the footer and able to click on the links so that I can see information about Sam Scarisbrick and follow them on other platforms.

About Page:

- As a User I can access the about page so that I can read all about Sam Scarisbrick.

Portfolio Page:

- As a User I can access the portfolio page so that I can see all the different projects Sam Scarisbrick has worked on.

Portfolio Detail Page:

- As a User I can access the portfolio detail page so that I can view each project individually in more detail.

Contact Page:

- As a User I can access the contact page so that I can see the different options on how to contact Sam Scarisbrick if I wish to do so.

Contact Form:

- As a User I can fill out the contact form so that I can directly contact Sam Scarisbrick through the website.

Admin Add Technologies:

- As Admin I can add new technologies so that users can see all the new and old technologies I've learnt.

Admin Add Projects:

- As Admin I can add new projects so that users can see my old and any new projects I have worked on.

Admin Sign In:

- As a Admin I can sign in to the admin page so that I can see the admin data.

[back to top](#sam-scarisbrick-portfolio)

##### Wireframes

Wireframes were used to create a prototype of the project which may change during its development.

**_Desktop Homepage_**

![Desktop Homepage Wireframe](/docs/readme_screenshots/desktop-homepage-wireframe.png)

**_Desktop About Page_**

![Desktop About Page Wireframe](/docs/readme_screenshots/desktop-about-page-wireframe.png)

**_Desktop Portfolio Page_**

![Desktop Portfolio Page Wireframe](/docs/readme_screenshots/desktop-portfolio-page-wireframe.png)

**_Desktop Portfolio Detail Page_**

![Desktop Portfolio Detail Page Wireframe](/docs/readme_screenshots/desktop-portfolio-detail-page-wireframe.png)

**_Desktop Contact Page_**

![Desktop Contact Page Wireframe](/docs/readme_screenshots/desktop-contact-page-wireframe.png)

**_Mobile Homepage_**

![Mobile Homepage Wireframe](/docs/readme_screenshots/mobile-homepage-wireframe.png)

**_Mobile About Page_**

![Mobile About Page Wireframe](/docs/readme_screenshots/mobile-about-page-wireframe.png)

**_Mobile Portfolio Page_**

![Mobile Portfolio Page Wireframe](/docs/readme_screenshots/mobile-portfolio-page-wireframe.png)

**_Mobile Portfolio Detail Page_**

![Mobile Portfolio Detail Page Wireframe](/docs/readme_screenshots/mobile-portfolio-detail-page-wireframe.png)

**_Mobile Contact Page_**

![Mobile Contact Page Wireframe](/docs/readme_screenshots/mobile-contact-page-wireframe.png)

[back to top](#sam-scarisbrick-portfolio)

##### Database Schema

This is well explained in the backend repository readme [here](#backend)

##### Security

For security Ive made sure that csrf tokens are used for submitting forms. These are created in the backend and connected to the frontend.

Admin is also protected my username and password from Django's built in admin user.

#### The Scope Plane

- Responsive Design - The site should be fully functional on all devices from 320px wide and up.

- Hamburger menu for navbar on mobile devices.

- Homepage welcoming user to the site and links to navigate through the site, see all the projects and skills sam possesses and ability to conatct Sam Scarisbrick.

[back to top](#sam-scarisbrick-portfolio)

#### The Structure Plane

##### Features

**_Navbar_**

As a User I would like to view the site on all my different devices so I can view site wherever I am.

As a user I want to see a clear way of navigating around the site so that I can easily find the relative information I am looking for.

The Navbar contains links for Home, About, Portfolio and Contact. These options are available to all to see.

The navigation menu is displayed on all pages and forms into a hamburger menu on smaller devices. This allows users to view the site from any device and not take up too much space on mobile devices. It's very clear and easy to use.

There is also a hover over effect to inform the user when they are hovering over the specific link and the Navlink for the page the user is currently on will also have a white underline to inform the user which page they are on.

Desktop:

![Desktop Navbar Screenshot](/docs/readme_screenshots/desktop-navbar.png)

Mobile:

![Mobile Navbar Screenshot](/docs/readme_screenshots/mobile-navbar.png)

**_Footer_**

The footer is at the bottom of every page. This gives information about Sam Scarisbrick and ways to contact. It also provides links to Facebook, LinkedIn, to email Sam Scarisbrick and links to the sites other pages.

Desktop:

![Desktop Footer Screenshot](/docs/readme_screenshots/desktop-footer.png)

Mobile:

![Mobile Footer Screenshot](/docs/readme_screenshots/mobile-footer.png)

**_Homepage_**

The homepage welcomes the user to the site with a picture of Sam Scarisbrick and information about him. There is also a button to link them to portfolio page and icons linking them to GitHub, LinkedIn and to email Sam.

Desktop:

![Desktop Homepage Screenshot 1](/docs/readme_screenshots/desktop-homepage-1.png)

![Desktop Homepage Screenshot 2](/docs/readme_screenshots/desktop-homepage-2.png)

Mobile:

![Mobile Homepage Screenshot 1](/docs/readme_screenshots/mobile-homepage-1.png)

![Mobile Homepage Screenshot 2](/docs/readme_screenshots/mobile-homepage-2.png)

**_About Page_**

The About Us page is where the user can read all Sam Scarisbrick in depth and find out information like experience, qualifications, skills and ambitions. This gives the user chance to understand about Sam.

Desktop:

![Desktop About Page Screenshot 1](/docs/readme_screenshots/desktop-about-page-1.png)

![Desktop About Page Screenshot 2](/docs/readme_screenshots/desktop-about-page-2.png)

Mobile:

![Mobile About Page Screenshot 1](/docs/readme_screenshots/mobile-about-page-1.png)

![Mobile About Page Screenshot 2](/docs/readme_screenshots/mobile-about-page-2.png)

**_Portfolio Page_**

The Portfolio page is a chance for the user to see all the different projects Sam Scarisbrick has worked along and what skills he has used.

Desktop:

![Desktop Portfolio Page Screenshot 1](/docs/readme_screenshots/desktop-portfolio-page-1.png)

![Desktop Portfolio Page Screenshot 2](/docs/readme_screenshots/desktop-portfolio-page-2.png)

![Desktop Portfolio Page Screenshot 2](/docs/readme_screenshots/desktop-portfolio-page-3.png)

Mobile:

![Mobile Portfolio Page Screenshot 1](/docs/readme_screenshots/mobile-portfolio-page-1.png)

![Mobile Portfolio Page Screenshot 2](/docs/readme_screenshots/mobile-portfolio-page-2.png)

![Mobile Portfolio Page Screenshot 2](/docs/readme_screenshots/mobile-portfolio-page-3.png)

**_Portfolio Detail Page_**

The Portfolio Detail Page is a chnace for the user to view a certain project in more detail, here they can read a more detailed overview of the project and see what skills were used.

Desktop:

![Desktop Portfolio Detail Page Screenshot 1](/docs/readme_screenshots/desktop-portfolio-detail-page-1.png)

Mobile:

![Mobile Portfolio Detail Page Screenshot 1](/docs/readme_screenshots/mobile-portfolio-detail-page-1.png)

![Mobile Portfolio Detail Page Screenshot 2](/docs/readme_screenshots/mobile-portfolio-detail-page-2.png)

**_Contact Page_**

The Contact Us page is where the user can find out all the different ways in which they can contact Sam Scarisbrick.

Desktop:

![Desktop Contact Page Screenshot 1](/docs/readme_screenshots/desktop-contact-page-1.png)

![Desktop Contact Page Screenshot 2](/docs/readme_screenshots/desktop-contact-page-2.png)

Mobile:

![Mobile Contact Page Screenshot 1](/docs/readme_screenshots/mobile-contact-page-1.png)

![Mobile Contact Page Screenshot 2](/docs/readme_screenshots/mobile-contact-page-2.png)

**_Contact Form Errors_**

The contact form is displayed on the contact page and gives the user a direct access to contacting Sam Scarisbrick. When the form is filled out incorrectly there is error message for each input field to help the user fill this out correctly.

![Contact Form Errors Screenshot](/docs/readme_screenshots/contact-form-errors.png)

**_Error Alert Messages_**

When the user fills out the contact form and tries to submit, the user will see a alert message at the top of the screen either informing them it was a success or whether to check the form for errors.

Success:

![Contact Form Success Screenshot](/docs/readme_screenshots/error-alert-success.png)

Error Fail:

![Contact Form Error Screenshot](/docs/readme_screenshots/error-alert-message.png)

#### The Surface Plane

##### Design

**_Colour Scheme_**

I opted for a very few choices of colours throughout the site. The same colours have been implemented across the site and are included in the button's styles.

This hopefully makes the site easy and clear to read / use.

The colour palette was created using the coolors website.

![Coolors Screenshot](/docs/readme_screenshots/coolors.png)

**_Imagery_**

Font awesome was used to for the sites icons.

Google fonts was used for the font style.

[back to top](#sam-scarisbrick-portfolio)

### Use of Components

A number of reusable React components were created with the intention of reducing code duplication.

**_AlertMessage.js_**

Used to show alert messages to inform user of different actions. This was passed as a prop so each alert when called can display it's own message.

**_CustomButton_**

Used to create a custom button which was passed a text prop, to provide the text for the button.

**_Dropdown Button_**

This component was created so the user could filter the projects by a particular skill type.

**_Error Message_**

This component was created to display error messages on the contact form. This component can be used for each input field which avoids code repitition.

**_Footer_**

Used to display the footer on all pages.

**_Icons_**

This is used to display the social media icons on different pages and in the footer. They are also styled differently if the footer prop is passed to the component.

**_LoadingSpinner_**

Used to display loading spinner for whenever site is loading. Spinner can be different sizes depending on purpose, which is passed as a prop.

**_NavBar_**

Used to display navbar on all pages.

**_NavBarNavLink_**

Used to create numerous nav links for the navbar, which diferent information was passed as props.

**_ScrollToTop_**

Used to make sure each page renders at the top of the page.

**_Skills_**

Used to map over the list of different skills, depending on what skills they are for, whether they are for frontend, backend or tools.

[back to top](#sam-scarisbrick-portfolio)

### Custom Hooks

**_useClickOutsideToggle.js_**

This custom hook is used so that in mobile devices, if the navbar dropdown menu has been toggled open, the user can click anywhere outside the dropdown menu and this will still toggle the dropdown menu closed.

**_useCsrfToken_**

This custom hook is used to fetch the csrf tokens from the backend.

**_useFetchPortfolioProjects_**

This custom hook is used to fetch the portfolio projects and also fetch individual rojects for portfolio detail page.

**_useFetchTechnologies_**

This custom hook is used to fetch the list of technologies Sam has used.

**_useIsSmallScreen_**

This custom hook is used to check if the app is being used on a small screen.

### Languages Used

- HTML5

- JSX

- CSS

- JavaScript

[back to top](#sam-scarisbrick-portfolio)

### Frameworks, Libraries and Dependencies

#### React

React is the frontend framework used to create the frontend of this project.

#### React-Router-Dom

React-Router-Dom is used to enable client side routing for React web applications and is used to implement basic routing across this project.

#### ReactDOM

ReactDOM is used for rendering components to the DOM. It bridges the gap between Reacts Virtual DOM and the actual DOM in the browser.

#### Axios

Axios was used to simplify requests made to the REST API.

#### React Bootstrap

React Bootstrap was used to help with the styling and layout of the entire project.

#### Font Awesome

Font awesome was used for the icons used across the site.

#### Google fonts

Google fonts was used to provide the font for the site.

#### Prettier

Prettier is used as code formatting tool which helped me structure my code in the correct way.

#### Framer Motion

Framer Motion was used to add animation to the app.

[back to top](#sam-scarisbrick-portfolio)

### Testing Frontend

I have included details of my testing during and post development in a separate file called [TESTING_FRONTEND.md](TESTING_FRONTEND.md)

### Credits

- Code Institute - Without the knowledge gained through out doing the course I would not have been able to build this project.

- React Framework - React Framework - For being able to use React Framework to build my project and all the documentation to help build and set up correctly.

- Cloudinary - For storing the data for my posts.

- StackOverflow - For helping give me with ideas on how to overcome issues I encountered.

- Google Fonts - For supplying the fonts used.

- Font Awesome - For Providing the icons used throughout this project.

- Framer Motion - For providing the ability to add animation to the app.

[back to top](#sam-scarisbrick-portfolio)
