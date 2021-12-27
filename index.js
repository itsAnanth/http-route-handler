import handleHTTPRequests from './server/handler.js';
import http from 'http';
const PORT = process.env.PORT || 3000;
const httpServer = http.createServer();

httpServer.on('request', handleHTTPRequests);

httpServer.listen(PORT, () => console.log('HTTP server', `running on port ${PORT}`));
