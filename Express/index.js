const express = require("express")

console.log(typeof express)

const app = express()


/**
 * Starting server
 */

app.listen(8000, () => {
    console.log('Server got started')
})