const fs = require('fs');
const routeFolder = fs.readdirSync('./server/routes');


function handleHTTPRoutes(req, res) {
    let exists;
    for (const routes of routeFolder) {
        const routeMeta = require(`./routes/${routes}`);
        const { route, callback } = routeMeta;
        if (req.url == route) {
            callback(req, res);
            exists = true;
            return;
        } else exists = false;
    }
    if (!exists) res.end('invalid route');
}

module.exports = handleHTTPRoutes;