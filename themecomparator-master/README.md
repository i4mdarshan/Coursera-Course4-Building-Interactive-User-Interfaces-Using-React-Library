# Theme Comparator

## Introduction

Color and Fonts are the most powerful tools in website design. The choice of color and font in elements’ styles can make or break the design.​

The color and fonts are used to attract attention, convey meaning, create curiosity and can earn popularity among customers. The combination for colors and fonts help define a theme that can build up a design concept for the website.​

Selecting the right theme refers to selecting the right combination for background color, font color, font family and font weight. The theme selected can create a deep impact in the minds of site visitors and influence their interpretation.​

The team of web developers at Graffitti Designs have created a user friendly app that help the web designers in creating and managing a theme catalog.The themes in the catalog can then be compared before finalizing the choice of desired theme. ​

## ThemeComparator - Phase1​

Following are the user stories for the existing ThemeComparator app.​

- As a User, I should be able to create and add theme to theme catalog by providing the inputs for theme name, background color, foreground color, font and font weight.​
- As a User, I should be able to add theme only with unique theme name.​
- As a User, I should be able to view the existing themes of the catalog.​
- As a User, I should be able to delete the selected theme from the catalog.

## Challenges

The solution for ThemeComparator is ready for production. ​

Currently, the developers are relying on manual testing of the app components for ensuring the correctness and completeness of the functional requirements.​

The defects with manual testing are:​

- It is time consuming and can delay the time to market for the app.
- It requires more human resources to be engaged and hence can lead to increased cost.​
- It is prone to human error which can lead to release of app with defects or bugs.​
- Late identification of defects can lead to poor user experience which can further lead to poor business impacts.

## Problem Statement

The developer team has decided to overcome the challenge by implementing automated testing.​

Automated testing is fast, economical, accurate and helps in early identification of defects.​

You as a developer in Graffitti Designs, is given the responsibility of identifying the test cases and writing the test code to ensure the app meets the requirements completely and correctly.

## Test Cases

### Theme Component

1. Given a name, background-color, foreground-color font-family, font-weight the component must render adhering to the above attributes. 
2. In absence of inputs, the Theme component should be rendered with the default values for background color, color, font-family and font-weight. The name attribute should be blank

### Theme Catalog
1. Theme Catalog should render all the themes in the list.
2. When themes are updated the catalog must also update (addition, removal).
3. Each theme must use the name as the key and should not use idx.

### Theme Creator
1. Should facilitate in creating Themes, collecting inputs from the users. 
2. Should call the callback after creating the Theme, passed using props.
3. Should be able to validate the name using the validator method passed using props.

### App Component
1. Should call POST API to create a new theme, this should also add a new theme to the theme collection. 
2. Should call GET API to check existence of a theme with a given name.
3. Should call DELETE API to delete the theme, this should also delete the theme from the theme collection.

## Instructions

1. Download and unzip the boilerplate code.  
2. Run the command `npm install` to install the dependencies.  
3. Open the boilerplate code in VSCode to develop the assignment solution.  
4. The boilerplate consists of solution code for ThemeComparator app.  
5. The boilerplate also contains the `themes.json` file located within the server folder.  
6. Run the command `json-server --port 3001 themes.json` to run the json-server to access themes data.  
7. Test cases are to be added under the folder `test` inside the `src` folder  
8. Testing should be implemented using Jest.  
9. First, test the solution locally by running the command npm run test.  
10. Refactor the solution to ensure all test cases are passing.  
11. The evaluation of this practice assignment will be done based on the coverage data collected while the test cases run.

    ***Coverage results indicate what amount of solution code under test is executed while the test code runs.***


12. Following is the threshold criteria, required to be met to pass this challenge.
- branches: 50
- functions: 75
- lines: 75
- statements: 75
13. DO NOT MODIFY THE PROVIDED SOLUTION CODE, ELSE THIS MAY IMPACT THE COVERAGE RESULTS AND SET THE STATUS "FAILED" FOR THIS ASSIGNMENT.
14. ip the solution code with the name same as the assignment name.  
15. Upload the zipped solution for submission.