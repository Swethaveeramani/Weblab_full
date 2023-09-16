var http = require('http')
var url = require('url')
var querystring = require('querystring')
var port = 4000;
http.createServer((req, res) => {
    // var path = url.parse(req.url).pathname;
    // console.log('path recieved ' + path)
    var query = url.parse(req.url).query;
    console.log(query);
    var name = querystring.parse(query)["username"];
    var email = querystring.parse(query)["email"];
    var address = querystring.parse(query)["address"];
    res.write('Welcome user '+name+' here is your email '+email+' Address is '+address);
    res.end()
}).listen(port, (error) => {
    if (error) {
        console.log("error")
    }
    else {
        console.log("server running on " + port);
    }
})