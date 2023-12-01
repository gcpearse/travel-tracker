# GoMapp

## Overview

GoMapp is a mini app built with React and Vite that allows users to mark the countries they have visited, or add them to their travel wishlist.

The app is optimised for mobile, but also works well on desktop displays.

This is a standalone mini project that may be updated in the future.

## Local Setup Instructions

### Cloning the Repository

Begin by clicking on the **CODE** button above and copying the URL. Then, navigate to the directory into which you would like to clone the repository, and run this command:

```
git clone <URL>
```

To push changes from your cloned local version to a personal repository on GitHub, you will first need to create a new GitHub repository. 

Initialise the repository <u>without</u> a `README`, `gitignore`, or `licence`.

Then, copy the URL of your new repository and run the following commands:

```
git remote set-url origin <NEW_URL>
git branch -M main
git push -u origin main
```

### Prerequisites

Please ensure you have installed Node.js. Certain versions of Node may not be able to run this project, so if you encounter any issues, that may be the cause of the problem. At the time of writing, `v18.17.1` is working well, but `v20.6.0` is not.

### Installing Packages and Running the Project

Once you have cloned the repository on your local machine, please use the `cd` command to navigate to the `travel-tracker` directory of this project.

You may then run the following commands:

```
npm install
```

This will install all required NPM packages..

```
npm run dev
```

This will run the app locally, typically on port 5173. Please check your terminal log for confirmation.