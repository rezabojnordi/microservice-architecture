const express = require("express");

const http = require("http");

const Routes = require("./routes");

class Server {
    constructor(){
        this.app = express();
        this.http = http.Server(this.app);
    }

    /* Including app Routes starts */
    inclueRoutes(){
        new Routes(this.app).routeConfig();
    }

    startTheServer(){
        this.inclueRoutes();
        const port = process.env.NODE_SERVER_POST || 8000;
        const host = process.env.NODE_SERVER_HOST || 'localhost';

        this.http.listen(port, host, () => {
      console.log(`Start Api GateWay  Listening on http://${host}:${port}`);
    });
    }
}

module.exports = new Server();

