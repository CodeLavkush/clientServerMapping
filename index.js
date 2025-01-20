import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('../views/home')
})

app.get('/client', (req, res) => {
  res.render('../views/clientSideMapping')
})

app.get('/server', (req, res) => {
  res.render('../views/serverSideMapping')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
   