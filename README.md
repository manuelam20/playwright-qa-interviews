### This is a simple Playwright project that is intended for use in TeleVet QA interviews. ###

# Documentation
Playwright documentation can be found here: https://playwright.dev/docs/intro
Additional documentation can be accessed by querying the brains of your interviewers :)

# Problem Statement
Your goal is to write a test that goes to "https://google.com/", performs a search for "TeleVet", and validate that there is a result with a link to "https://televet.com/"

# Setup
`npm i`
`npx playwright install`

# To Run the Tests
Normal mode: `npx playwright test --headed googleSearch`
Debug mode: `PWDEBUG=1 npx playwright test googleSearch`