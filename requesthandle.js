const requesthandler=(req,res)=> {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Welcome to home page</h1>
      <a href="/calculator">Calculator</a>
      `);
    res.end();
  } else if (req.url == "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <form action="/submit-result" method="POST">
      <label>Enter your Name</label>
      <input type="text" name="name">
      <label>Enter your Email</label>
      <input type="email" name="email">
      <button type="submit">Sum</button>
      </form>`);
      res.end();
  }
  else if(req.url=="/submit-result" && req.method=="POST"){
    let body=[];
    req.on("data",(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end",()=>{
      const bodystr=Buffer.concat(body).toString();
      const params=new URLSearchParams(bodystr);
        const name = params.get("name");
      const email = params.get("email");

      const result = name + " " + email;
      console.log(result);
      res.write(`<h1>${result}</h1>`);
        res.end();
    })
  
  }
}

module.exports=requesthandler;