require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())

///////////////////
// MONGOOSE CODE

mongoose.connect(process.env.MONGODB_URL)
.then(()=> {
    console.log('MongoDB connection successful !')
}).catch(error => {
    console.log('MongoDB connection refused: ', error.message)
})

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
})

const Blog = new mongoose.model('blog', blogSchema)

/////////////////
////////////////

///////////////
// Express routes

app.get('/api/blogs', (req, res) => {
    Blog.find({}).then(response => {
        res.json(response)
    })
})

app.post('/api/blogs', (req, res)=> {
    const body = req.body

    const blog = new Blog({
        title : body.title,
        author : body.author,
        url: body.url,
        likes: body.likes
    }) 

    blog.save().then(saved => res.json(saved.toJSON()))

    
})


/////////////
// PORT CONFIG
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

