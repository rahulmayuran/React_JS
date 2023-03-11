# YouTube Clone &copy;
------------

## About Project Configuration

1. Open VSCode terminal and type the below command in CMD for creating a react base code structure. 
```javascript
    npx create-react-app <App-Name>
```   
1. Go to firebase -> console -> Create a project
1. Click web and provide nick name and also set the firebase hosting 
1. Install firebase dependencies.
```javascript
    npm install firebase
```
1. No need to do the deployment now. Skip it for later. 

## Configuration Changes

1. Overview -> Project Settings -> config , and copy it and save in react code base in any file.
1. Remove App.test.js, setupTests.js and logo.svg from base code.
1. Install `material-ui/core` package
1. Download `es7` extension for react for **rfce** shortcut for creating a react function component and couple of other shortcuts.

## Take aways for CSS

1. **Flex** property can be split across 2 components which always equals 1. Mention flex = 0.85 in one component and 0.15 in another
1. For a sticky header, refer the Header.css.
1. VideoCard.css has lineheight and margin-top in negative value which can manipulate height. 
1. sidebarRow.css has all CSS effects for an icon.

## React specific

1. Visit https://v5.reactrouter.com/web/guides/quick-start for react router and do 
    ```bash
    npm i react-router-dom
    ```
1. Used ```<link to> ``` tag to define the route path, The parameters can be passed using ${}. 
1. App.js has the definition of Router by Importing ```javascript {BrowserRouter as Router, Routes, Route}.``` **Route** tag has *exact path* which should match the route path provided in `<link to>` tag and * element* should point to the UI components to be displayed.

## Deployment in Firebase

1. `npm install -g firebase-tools@10.9.2` to make node.js v14.17.3 compatible with firebase
1. `firebase login` to authenticate your google account to allow firebase, Browser based.
1. `firebase init` to initialize firebase repository and choose **Hosting - Configure and Deploy Firebase hosting**. 
1. Press space, select it as existing project and follow the steps, Have set automatic deployments for GitHub by authorizing my firebase to Github.
1. Do `npm run build` for building the react app and `firebase deploy` to deploy the app or `firebase deploy --only hosting:techtube` for choosing the host.
1. You get a success message and can access the app.
 - Project Console: https://console.firebase.google.com/project/clone-1cd51/overview
 - Hosting URL: https://clone-1cd51.web.app |
 https://techtube.web.app


