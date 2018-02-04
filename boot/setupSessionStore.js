/**
 * Created by patrick conroy on 2/3/18.
 */
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sessionConfig= (require("../credentials/ServerSide")).session;

function setupSessions(server) {
    server.use(session({
        secret: sessionConfig.secret,
        saveUninitialized: true,
        store: new FileStore({path: '/tmp/sessions', secret: sessionConfig.storagePath}),
        resave: false,
        rolling: true,
        httpOnly: true,
        cookie: {maxAge: 604800000} // week
    }))
}
module.exports= setupSessions;