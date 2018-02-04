/**
 * Created by patrick conroy on 2/2/18.
 */
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
//require("firebase-messaging");

import config from '../config/config';


export default async () => {
    try {
        firebase.initializeApp(config.firebaseConfig);
    }
    catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack)
        }
    }

    return firebase.database().ref('v1')
};
