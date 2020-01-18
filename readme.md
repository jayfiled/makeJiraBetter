## Chrome Extension - Convert description fields in Jira to HTML tooltips

## Purpose 🚀

I want to add description fields to my dashboards in Jira to get a glimpse of the issue without opening it. But because the description can be the size of multiple email strings it pushes all the content down and defeats the purpose of the dashboard.

I'll convert this to a Chrome extension eventually as I give the script more functionality.

### Installation instructions 📑

To develop the script I used the chrome extension [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

- Create a new user script
- Replace the `\\Your code here...` text with the contents of index.js 
- Amend the @matches value to be your jira instance
- Go

### Future features 🏹
- [] **Add a button to the page to toggle on and off**
- [] **Add a text parser to remove junk text from jira issues that have been created by email**


### Improvements 🏃‍♂️💨
- [] **Make functions deterministic**



### Pain points 🤕
- [] **HTMLCollections not being iterable**