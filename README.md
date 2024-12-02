### This is a simple Playwright project that is intended for use in TeleVet QA interviews. ###

# Documentation
Playwright documentation can be found here: https://playwright.dev/docs/intro
Additional documentation can be accessed by querying the brains of your interviewers :)

# Problem Statement
Your goal is to write a test that goes to "https://google.com/", performs a search for "Team International", and validate that there is a result with a link to "https://www.teaminternational.com/".

There are 3 problems in this project.

1. In pages/google.ts, define a selector for the "Google Search" button
2. In page/google.ts, define a function that searches for a provided search string
3. In tests/googleSearch.spec.ts, write a test that searches for 'TeamInternational' and validates that one of the results is 'https://www.teaminternational.com/'

# Setup
`npm i`
`npx playwright install`

# To Run the Tests
Normal mode: `npx playwright test --headed googleSearch`
Debug mode: `PWDEBUG=1 npx playwright test googleSearch`