const PORT = process.env.PORT || 3000;
const handleHTTPRequests = require('./server/handler.js');
const http = require('http');
const httpServer = http.createServer();

httpServer.on('request', handleHTTPRequests);

httpServer.listen(PORT, () => console.log('HTTP server', `running on port ${PORT}`));
