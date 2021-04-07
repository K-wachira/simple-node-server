const http = require('http');

// http variable  for creating server 
const server = http.createServer(function(req, res){
    // Headers
    // res.writeHead(200, {'content-type': 'text/html'});
    // Send back response

    // res.end("Hello Zuri world!, <br>I wish there was a simpler way of hot reloading the node server<br> \
    //  without having to restart it every time i make a hot reload <br><br> Oh there is => nodemon  ")

    // res.writeHead(200, {'content-type': 'application/json'});

    // res.end(`
    
    // {
    //     "Name":    "Kelvin",
    //     "Country": "Kenya",
    //     "Hobby":   "Karting",
    // }`);

    res.writeHead(200, {'content-type': 'text/html'});

    res.end(`
    <html>
    
        <body style="background-image: url('https://res.cloudinary.com/zuri-team/image/upload/zuriboard/tenant-logo/ms5faj5pae6nd03wazk1.png');
        text-align: center; color: white;">
            <h1>This is the 'beniging' of the end</h1>
            <p>Node.js is quite fun when you get the hang of it  :) </p>
            <p>Not to point fingers but I think I am awsome.. haha</p>

        </body>
        
    </html>`)

});

//create port 

server.listen( 4000, '127.0.0.1')
console.log("Server is up and running")

