const path = require('path');
const express = require('express');
const app = express();

const file= path.join(__dirname,'../public')
const viewPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(file))

app.get('', (req, res)=>{
    res.render('index', {
        'name': 'gino',
        'title': 'er'
    })
})

app.get('/about',(req, res)=>{
    res.render('about')
})


app.get('/index', (req, res)=>{
    res.send("hello..");
})

app.get('/weather', (req, res)=>{
    if(!req.query.location){
        return res.send({
            error: 'no location query'
        })
    }
    res.send({
        location: req.query.location,
        temp: 20
    })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'no search query'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/index/*', (req, res)=>{
    res.send('not found')
})


app.get('*', (req, res)=>{
    res.send("404 page")
})




app.listen(3000, ()=>{
    console.log("server running..!")
})