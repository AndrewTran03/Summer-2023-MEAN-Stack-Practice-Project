// import express from 'express';
import * as http from 'http';
import { app } from "./backend/app.js";

// const port = process.env.PORT || 3000;
// app.set("port", port);

// const server = http.createServer((req, res) => {
//     res.end("This is my first response");
// });

// const server = http.createServer(app);

// server.listen(port);

const normalizePort = (val) => {
    let currPort = Number.parseInt(val, 10);

    // Passed a Named Pipe
    if(Number.isNaN(currPort)) {
        return val;
    }

    // Passed a A Port Number
    if(currPort >= 0) {
        return currPort;
    }

    return false;
};

const onError = (error) => {
    if(error.syscall !== "listen") {
        throw error;
    }

    const bind = (typeof addr === "string" ? "Pipe- " + addr : "Port- " + number);
    switch(error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    
    // Note the usage of a ternary operator here
    const bind = (typeof addr === "string" ? "Pipe- " + addr : "Port- " + port);
    console.debug("Listening On " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
