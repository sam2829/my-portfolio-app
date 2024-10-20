# Sam Scarisbrick Portfolio API Testing

## Testing Overview

During and post development of this project numerous testing was carried out by myself.

## Contents

- [Sam Scarisbrick Portfolio API Testing](#sam-scarisbrick-portfolio-api-testing)
  - [Testing Overview](#testing-overview)
  - [Contents](#contents)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
  - [Validators](#validators)
    - [CI Python Linter](#ci-python-linter)
  - [Bugs and Fixes](#bugs-and-fixes)

## Manual Testing

Manual testing was carried out throughout the project, making sure the site was functioning correctly.

Full test table:

| Feature | Expected Outcome| Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
| Admin login | When accessing the admin page, the login form appears and when filled out correctly I can then access the admin pages. | Tried logging in with and without the correct admin details. | Unable to sign in with wrong admin details adn was able to sign in with the correct details. | Pass |
| Admin add technology | When logged in as admin, I am able to create new technologies. | Logged in as admin, filled out the add technology form correctly. | Was succesffully able to add a technology which then also appeared in the projects form. | Pass |
| Delete technology | When logged in as admin, I am able to delete technologies. | Logged in as admin, then selected numerous technologies and clicked delete. | The technologies were deleted. | Pass |
| Edit technology | When logged in as admin, I am able to edit technologies. | Logged in as admin, then selected numerous technologies at different times which then loaded the pre filled out technology form. I was then able to edit any of this existing fields and click save. The new data was then saved successfully. | The technologies were edited. | Pass |
| Admin add project | When logged in as admin, I am able to create new projects. | Logged in as admin, filled out the add project form correctly. | Was succesffully able to add a technology which then also appeared in the projects form. | Pass |
| Uable to add an image to large to projects | When logged in as admin, I am unable to add an image to the projects form which file is to large. | Logged in as admin and tried loading and image to the projects form that was to large. | Image was not uploaded and an error message was on display informing me the file was to large. | Pass |
| Uable to add an image to high to projects | When logged in as admin, I am unable to add an image to the projects form which dimensions are to high. | Logged in as admin and tried loading and image to the projects form that was to high. | Image was not uploaded and an error message was on display informing me the image dimensions were to high. | Pass |
| Uable to add an image to wide to projects | When logged in as admin, I am unable to add an image to the projects form which dimensions are to wide. | Logged in as admin and tried loading and image to the projects form that was to wide. | Image was not uploaded and an error message was on display informing me the image dimensions were to wide. | Pass |
| Uable to add an image with wrong file enxtension to projects | When logged in as admin, I am unable to add an image to the projects form which has the wrong file extensions. | Logged in as admin and tried loading and image to the projects form with the wrong extension. | Image was not uploaded and an error message was on display informing me the image has invalid extension. | Pass |
| Uable to add to github or live_site fields unless URL to projects | When logged in as admin, I am unable to add to the github or URL fields on the projects form unless it is a url address. | Logged in as admin and tried entering non URL addresses in to the projects form. | Data was not accepted and an error message was on display informing me url needed. | Pass |
| Able to select multiple technologies | When logged in as admin, I am able to fill out the projects form and can select multiple technologies. | Logged in as admin, filled out the projects form and attempted to select multiple technologies. | I was able to select multiple technologies. | Pass |
| All fields are required and cannot accept whitespace | When logged in as admin, I am unable to add a project if any of the input fields are left blank or only have whitespace. | Logged in as admin and tried uploading projects with fields left blank and or only containing whitespace. | Was unable to upload projects and errors appeared on screen for the required fields. | Pass |
| Retrieve list of projects | When going to the correct url, I am able to retrieve and see the list of projects. | Went to the correct url. | List of all projects are on display. | Pass |
| Retrieve project by id | When going to the correct url which contains the id of the project, I am able to retrieve the individual project with that id. | Went to the correct url. | Correct individual project was displayed. | Pass |
| Search for technologies by name | When logged in as admin, I am able to search for technologies by namnames. | Succesffully able to search and find technologies by their descriptions. | Pass |
| Search for projects by title | When logged in as admin, I am able to search for projects by title. | Logged in as admin, then tried searching for projects by their title. | Succesffully able to search and find projects by their title. | Pass |
| Search for projects by github | When logged in as admin, I am able to search for projects by github. | Logged in as admin, then tried searching for projects by their github. | Succesffully able to search and find projects by their github. | Pass |
| Search for projects by live_site | When logged in as admin, I am able to search for projects by live_site. | Logged in as admin, then tried searching for projects by their live_site. | Succesffully able to search and find projects by their live_site. | Pass |
| Search for projects by technologies | When logged in as admin, I am able to search for projects by technologies. | Logged in as admin, then tried searching for projects by their technologies. | Succesffully able to search and find projects by their technologies. | Pass |
| Filter technologies by name | When logged in as admin, I am able to filter technologies by name. | Logged in as admin, then tried filtering technologies by their name. | Succesffully able to filter technologies by their name. | Pass |
| Filter projects by technologies | When logged in as admin, I am able to filter projects by if they are technologies. | Logged in as admin, then tried filtering projects by technologies. | Succesffully able to filter projects by technologies. | Pass |

[back to top](#sam-scarisbrick-portfolio-api-testing)

## Automated Testing

In this project I also done automated python testing. In this I done some basic testing on the apps, but in future look to carry out more thorough automated testing. These tests were created to test the functionality of the apps. These can be found in the test.py files in the respective apps.

***projects***

![Automated Testing Projects](/docs/testing_backend_screenshots/testing-projects.png)

***Emailapp***

![Automated Testing Emailapp](/docs/testing_backend_screenshots/testing-emailapp.png)

## Validators

***CI Python Linter***

The CI Python Linter was used to validate the python code used throughout the project. All results are in the table below:


| Files | Expected Result | Result | Pass / Fail |
| --- | --- | --- | --- |
|`my_portfolio`|
| asgi.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| settings.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | ...| 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| wsgi.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`projects`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| filters.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| serializers.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`emailapp`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| forms.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
|`technologies`|
| admin.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| apps.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |  
| models.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |
| serializers.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| tests.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| urls.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass | 
| views.py | CI Python Linter to show no errors. | CI Python Linter returned no errors. | Pass |

[back to top](#sam-scarisbrick-portfolio-api-testing)

## Bugs and Fixes

| Bugs | Issue | Resolution |
| --- | --- | --- |
| Cloudinary full URL for image in project. | When retrieving the data for a project, the image field was populated but it didn't have the full URL for the image in Cloudinary. | To solve this, I used serializers in the serializers.py file and called a function which made sure the full URL was retrieved. |
| Porject technologies were listed by id. | When retrieveing the data for a project, the technologies used were listed in seperate objects containing the id number for that technology. | To resolve this, I used serializers in the serializers.py file and called a function which would then return a list of each technology but this time listing them by the name field. |

[back to top](#sam-scarisbrick-portfolio-api-testing)