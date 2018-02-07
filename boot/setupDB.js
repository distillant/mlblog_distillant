/**
 * Created by patrick conroy on 2/3/18.
 */

const admin = require('firebase-admin');
const databaseURL=(require("../credentials/clientSide")).firebaseConfig.databaseURL;

const firebase = admin.initializeApp({
    credential: admin.credential.cert(require('../credentials/ServerSide').firebaseServerAuthCreds),
    databaseURL: databaseURL
}, 'server')


module.exports= firebase;