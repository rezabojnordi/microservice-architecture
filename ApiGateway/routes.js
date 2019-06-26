const httpProxy = require('express-http-proxy');
const server1ServiceProxy = httpProxy('http://localhost:4000');
const server2ServiceProxy = httpProxy('http://localhost:3000');
const server3ServiceProxy = httpProxy('http://localhost:2000');

class Router {
    constructor(app){
        this.app = app;
    }
    appRoutes(){
        this.app.get("/server1/:serverId",(req,res)=>{
            server1ServiceProxy(req,res);
        });
        this.app.get("/server",(req,res)=>{
            server1ServiceProxy(req,res);
        });

        this.app.post("/server",(req,res)=>{
            server1ServiceProxy(req,res);
        });

        this.app.get("/server2",(req,res)=>{
            server2ServiceProxy(req,res);
        });

        this.app.get("/server3",(req,res)=>{
            server3ServiceProxy(req,res);
        });
    }

    routeConfig(){
        this.appRoutes();
    }
}

module.exports = Router;
