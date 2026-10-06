const http = require("http");
const requesthandler=require("./requesthandle");
const server = http.createServer(requesthandler);
server.listen(2000,()=>{
  console.log("server started");
})
