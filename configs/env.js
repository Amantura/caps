const Path = require('path')
const Fs = require('fs')

const env = process.env.NODE_ENV

const envPath = Path.resolve(__dirname, `../.env.${env}`)

if (!Fs.existsSync(envPath)) {
  console.log(`.env.${env} NOT FOUND`)
  process.exit(1)
}

require('dotenv').config({ path: envPath })
