/**
 * Created by patrick conroy on 2/3/18.
 */

const apiRouter=require('./api/apiRouter');
const setupRoutes= function(server,handle) {
   server.use('/api/',apiRouter);

    server.get('*', (req, res) => {
        return handle(req, res)
    })
}
module.exports=setupRoutes;