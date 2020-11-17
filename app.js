const http = require('http');
//console.log(http)
http.createServer(function(req,res){ //lleva callback
 res.writeHead(200,{
    "Content-Type" : "text/plain; charset=utf-8"//texto plano
 })
 //res.end('Mi primer servidor en Node JS')

 console.log(req.url)

 switch (req.url) {
    case '/':
        res.end('Este es el Home')
    break;
      case '/productos':
        res.end('Estos son nuestros productos')
    break;
    case '/contacto':
        res.end('Dejanos tu mensaje')
    default:
        res.end('Página no disponible, vuelve más tarde')
        break;
 }

}).listen(3030,'localhost',()=>console.log('Servidor funcionando en el puerto 3030'))

