const crypto = require('crypto')

const key = crypto.randomBytes(256).toString('base64')

console.log(`🔑 Add a new JWT_SECRET to your .env file: ${key}`);