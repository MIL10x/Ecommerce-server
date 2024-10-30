import express from "express";
import jsonServer from 'json-server';
import cors from 'cors'; // Optional, but recommended

const server = express();
server.use(cors()); // Use the cors middleware

// Middleware to set CORS headers
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// Set up the router
const router = jsonServer.router('./data/db.json');
server.use('/api', router);
server.db = router.db; // Optional, if you need to access the db directly

server.use(router)
// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});