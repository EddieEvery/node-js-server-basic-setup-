/**
 * requiring the http libary
 * 
 */
const http=require('http')

/**
 * creating a listening port for our server
 */
const port =3000

/**
 * call the http libary
 * then we call the createServer() function on the 'http'
 * createServer() takes a SINGLE function that has two parameters
 * the two parameters  are 'request ' and 'response'
 */
const server =http.createServer(function(req,res){
 res.write('hello world')

 /**
  * res.end()
  * it ends the response process of the server
  */
 res.end()
})

/**
 * setup the server to listen on the PORT you need it to
 *  takes in a single function for error handling
 */
server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        console.log('server is listening on port'+port)
    }
})