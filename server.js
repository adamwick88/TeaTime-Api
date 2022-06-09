const express = require('express')
const app = express()



const PORT = 8000
const tea={
    'oolong':{
        'waterTemp':200,
        'caffeine Level':true,
        'steepTime':180,
        'origin':'Yo mammas house',
        'flavor':'Delicious',
    }
}
app.get('/', (request,respone) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api', (request,response)=>{
 response.json(tea)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT} `)
})