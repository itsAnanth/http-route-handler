module.exports = {
    route: '/hello',
    callback: (req, res) => {
        res.end('Hello World');
    }
};