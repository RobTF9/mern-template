const { exec } = require('child_process')

const name = process.argv[2]

const fs = require('fs/promises')

const now = new Date()
const date = now.toISOString()
const yesterday = new Date(now - 1)

const users = []
const items = []
