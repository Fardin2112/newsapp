const data = require("./sampleOut.json")
const express = require("express")
const app = express()

app.get('/getnews',(res,req)=>{
    
})

app.listen(3000, () => {
    console.log(" connected to db and listening on port", 3000);
    console.log(data)
  })

