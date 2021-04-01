// Require Node's http module and assign it to a variable
const http = require('http')

// Create a new server that just says "Hi!!" at every route
const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Welcome to this half-baked server-side website</h1><p>Here are some fun pages!</p><a href="/random-joke">Joke </a><a href="/cuteness">Cute</a>')
  } else if (request.url === '/random-joke') {
    let joke = ''
    const randResult = Math.random() * 3
    // First joke is original, other two are from https://www.thedad.com/the-worst-101-dad-jokes-that-will-make-your-kids-cringe/
    if (randResult < 1) {
      joke = '<p>What do you call a bad joke?</p><p>Yours!</p>'
    } else if (randResult < 2) {
      joke = '<p>How do trees access the internet?</p><p>They log in.</p>'
    } else {
      joke = '<p>Why can’t you trust anything balloons say?</p><p>They are full of hot air.</p>'
    }
    response.end('<h1>Have a random bad joke!</h1>' + joke + '<p>Click <a href="/">here</a> to go back to the start.</p>')
  } else if (request.url === '/cuteness') {
    response.end('<h1>Look at all those kittens!</h1><img src = "https://preview.redd.it/asrktbla0kq61.jpg?width=960&crop=smart&auto=webp&s=c98fc2c7db6b62e3ef4f9599c580e9b26b4200b7" alt = "A family of cats."><p><p>Click <a href="/">here</a> to go back to the start.</p>')
  } else {
    response.end('<h1>It seems you\'ve gotten lost.</h1><p>The requested url ' + request.url + ' is not available. Click <a href="/">here</a> to go back to the start.</p>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
const port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
