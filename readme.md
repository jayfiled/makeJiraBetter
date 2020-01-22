## Chrome Extension - Convert description fields in Jira to HTML tooltips

## Purpose 🚀

I want to add description fields to my dashboards in Jira to get a glimpse of the issue without opening it. But because the description can be the size of multiple email strings it pushes all the content down and defeats the purpose of the dashboard.

I'll convert this to a Chrome extension eventually as I give the script more functionality.

### Installation instructions 📑

To develop the script I installed the chrome extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

- Create a new user script.
- Replace the `\\Your code here...` text with the contents of index.js.
- Amend the **@matches** value to be the URL of your Jira instance.
- Go to the script, then click on the settings tab.  Add a **user includes** rule if you want to use a wildcard to run on a subset of pages, or a **user matches** rule if you want your script to only run on certain pages.
- Save your script and return to the dashboard.  Make sure your script is enabled and also that the Chrome Extension is set to enabled. 

### Future features 🏹
- [ ] **Add a button to the page to toggle on and off**
- [ ] **Add a text parser to remove junk text from Jira issues that have been created by email**

### Improvements 🏃‍♂️💨
- [ ] **Make functions deterministic**
- [x] **Add z-index to tool tip so it doesn't get hidden behind other elements on the dashboard**
- [x] **Gadget height doesn't resize back after tool tip added**


### Pain points 🤕
- [ ] **HTMLCollections not being iterable**