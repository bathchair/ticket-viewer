# Ticket Viewer
This is a submission for the Zendesk Coding Challenge 2021. It creates a Command Line Interface (CLI) that connects to the Zendesk API to view a list of tickets
with a registered account. Written in JavaScript and tests written with Jest.

## Installation
Make sure you have NodeJS installed. My current version of Node is v14.17.3. 
1. Clone the repository in your desired location.
2. Enter the project folder and use `npm install modules` to download the required modules.
3. Use `npm start` to run the project.
4. Use `npm test` to run the tests.

## Usage
When the user starts the program, the CLI prompts the user to enter their desired option. The three options are:
- to view all tickets, press `1`
- to view a single ticket (given a ticket ID), press `2`
- to exit the program, press `3`

If the user chooses the view a ticket(s), the program calls the API given an OAuth access token and the URL to pull the ticket information and stores them
in a list. This list is then either printed in a summary-style presentation if a **single** ticket is returned, or a one-line representation for each ticket if
**multiple** are present. If multiple are present and there exists greater than 25 tickets, the user has the option to page through the tickets in batches of 20.

Please note the token used is the OAuth access token to ensure that my login data/password is not left encrypted in the code.

## Design
These files listed are found in the `src` directory under their respective MVC umbrellas:
- `index.js` - the main file; where the prompting loop resides
- `fetchTicket.js` - used to gather data from the API and converts to a digestible list of `Ticket` objects
- `prompt.js` - used to display and read information to/from the console
- `style.js` - used to style the information created in `prompt.js`
- `Ticket.js` - an object file to define a `Ticket` item

## Credits/Resources
Zendesk API Links:
- [Zendesk Ticket API Documentation](https://developer.zendesk.com/rest_api/docs/core/tickets)
- [Requests to Zendesk API](https://developer.zendesk.com/documentation/developer-tools/working-with-the-zendesk-apis/making-requests-to-the-zendesk-api/#topic_hdt_nfx_3m)
- [OAuth Tokens](https://developer.zendesk.com/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/)
CLI Tools:
- [Chalk - for stylizing and adding color to console](https://github.com/chalk/chalk)
- [Jest](https://jestjs.io/docs/getting-started)
