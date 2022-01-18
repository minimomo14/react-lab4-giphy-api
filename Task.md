REACT LAB 4 - GIPHY API
Task: Create a React application to view GIFs. The information will come from the Giphy API.

Build Specifications:
Built with 5 components:
Header
Main
SearchForm
ResultsList
Result
Header component displays a title for your app, such as "GIF App" and the text "Powered by GIPHY" as required by the attribution terms of the API.
Main component:
Holds the SearchForm component and the ResultsList component. 
Uses the useState hook for both GIFs and search term.
Uses the useEffect hook in order to retrieve either trending GIFs or GIFs based on a search term. 
Has a function that sets the search term state. This function is passed down to the SearchForm component as a prop
Sends the GIFs state down to the ResultsList component as a prop.
SearchForm component:
Has a controlled form.
Accepts the function being sent down from the Main component as a prop. Calls that function when the form is submitted.
ResultsList component:
Has a prop that accepts an array of GIFs.
Display the text “Results”
Under that text, use the map array method to display a Result component for each GIF.
Result component:
Accepts the GIF being sent down from the ResultsList component as a prop.
Uses the information from the gif to display title, image, and link to Giphy.

Be sure to make a model interface for the response from Giphy and for a singular GIF.
Make a service for the functions that call on the API. 
A function that gets trending GIFs
A function that gets GIFs based on a search term
Be sure to hide your API key in your .env.local file



Designs on next page...
Style Guide:

font: any sans-serif font
background color: black
result background: #16191d
light borders: #2f3336
font color: #d9d9d9
anchor tags: #28b39d;
button background: #145a4f
button text: #fff
button hover background: #1a7567

Desktop Design
The main area of the page is centered with a fixed width and a border. The results show in two columns.

REACT LAB 4 (AUTOMATED TESTING ADD-ON)
Task: Add automated tests to React Lab 4 using Jest.

Test Cases:
Test cases for Header component
Test that it renders the title of your app.

Test cases for Result component
Test that it renders the title when passed a GIF object prop.
Test that it renders an image with the correct src attribute when passed a GIF object prop.
Test that it renders a link with the correct href attribute when passed a GIF object prop.

Test cases for ResultList component
Test that it displays the text "Results".
Test that it renders the titles of all GIFs in the array passed into the prop.

Tests cases for SearchForm component
Test that the callback is called with the correct search string after filling out and submitting the form. Use a couple of test cases where different values are provided for the search field.

There are no test cases for the Main component. In this bootcamp we will not cover how to test components that make API calls.

