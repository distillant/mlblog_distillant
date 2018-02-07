Demo located here:
http://35.153.156.88:3000/
## About the App
This app uses: NextJS, React, Redux,Redux Sagas and Firebase, Firebase
the backend entry point is server.js
pages/index.js is the front end entry point
pages/article is for displaying individual articles but implementation is incomplete.

Server Setup

## Installation
in the command line type:
```
git clone https://github.com/distillant/mlblog_distillant
cd mlblog_distillant
npm install
```

### Set credentials
add your credentials from Firebase to the following two files:
credentials/ServerSide.js
credentials/clientSide.js

## Settings
set the session key secret and session storage path within credentials/ServerSide.js under the session dictionary.

using /settings/settings.json to reconfigure the template. This sets the links on the menu bar, blog title, and such

## Testing:
the code uses jest and enzyme for testing frontend code. to run tests type:
```
npm run test
```

## Debugging
Server Side:
see the information at https://nodejs.org/en/docs/inspector/ to choose a node debugger.
you can would start the server with "npm run debug" and connect chromes debugger
or your tool of choice to with "node --inspect server.js"

## Running the App:
in the command line type:
```
 npm run dev
```

# Deploying to production
to build and use the production version of the server type the follwoing in the command line:
```
npm run build
npm run start
````

## About the App
This app uses: NextJS, React, Redux,Redux Sagas and Firebase, Firebase
the backend entry point is server.js
pages/index.js is the front end entry point
pages/article is for displaying individual articles but implementation is incomplete.