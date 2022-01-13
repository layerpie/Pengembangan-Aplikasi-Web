var http = require('http');

http.createServer ((req,res)=>{
    res.write('<p>Pengembangan Aplikasi Web dengan NodeJS</p>');
    res.end();
}).listen(8000,()=>{
    console.log('server is running on port 8000')
})
