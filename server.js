let express = require('express')
let path = require('path')
let morgan = require('morgan')
let PORT = process.env.PORT || 3000

let app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use('/css',express.static(path.join(__dirname,'public/css')))
app.use('/js',express.static(path.join(__dirname,'public/js')))

app.use(morgan('short'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>console.log(`Server running on localhost:${PORT}`))



