const http = require ('http');

const server = http.createServer((req, res)=>{

  //console.log(req)......

  if (req.url === '/') {
    res.end('Welcome to home page')    
  }

  else if (req.url === '/about') {
    res.end('Here is our short history')
  }
  else{ 
    const test = 'Error 404: something went wrong call putin'
  
  res.end(`<h1> Oops!</h1>  
   ${test}
   <br>
  <a href="/" > back home </a>`) 
  }
})

server.listen(5000)