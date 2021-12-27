import fs from 'fs';
const routeFolder = fs.readdirSync('./server/routes');


async function handleHTTPRoutes(req, res) {
    let exists;
    for (const routes of routeFolder) {
        const routeMeta = (await import(`./routes/${routes}`)).default;
        const { route, callback } = routeMeta;
        if (req.url == route) {
            callback(req, res);
            exists = true;
            return;
        } else exists = false;
    }
    if (!exists) res.end('invalid route');
}

export default handleHTTPRoutes;
