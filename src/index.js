import express from 'express'

const api = express()
api.use(express.json())

api.listen(5000, () => console.log('Expresse Listenning...'))