let express = require('express')
let app = express()
let port = process.env.PORT || 3000
let routes = require('./routes/route.js')
let passport = require('passport')
let session = require('express-session')
let cors = require('cors')

app.use(cors())

app.use(session({
  secret: 'yeah',
  saveUnitialized: true,
  resave: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.set('view-engine', 'ejs')

app.use('/', routes)

app.listen(port, function() {
  console.log('listening on port', port)
})
