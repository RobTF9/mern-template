const fs = require('fs')

const CLIENT_PATH = './client/constants.ts'
const SERVER_PATH = './server/constants.ts'
const ROOT_PATH = './constants/index.ts'

const ROOT_FILE = fs.readFileSync(ROOT_PATH, (err) => {
  if (err) throw err
})

function exectute() {
  ;[CLIENT_PATH, SERVER_PATH].forEach((p) => {
    fs.writeFileSync(p, ROOT_FILE)
  })
}
exectute()
