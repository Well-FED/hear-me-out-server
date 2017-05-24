const express = require('express')
const fetch = require('node-fetch') // fetch doesn't work on node. Only on browsers

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
   Browser --REQ--> Server --REQ--> Database
   Database --RES--> Server --RES--> Browser
*/

router.get('/boards/default', (req, res) => {
  fetch('https://hear-me-out-956f8.firebaseio.com/temp.json')
    .then(fetchRes => fetchRes.json())
    .then(jsdata => res.json(jsdata))
})

router.get('/users', (req, res) => {
  fetch('https://hear-me-out-956f8.firebaseio.com/users.json')
    .then(result => result.json())
    .then(data => res.json(data))
})

router.post('/boards', (req, res) => {
  const newBoard = req.body
  fetch('https://hear-me-out-956f8.firebaseio.com/boards.json', {
    method: 'post',
    body: JSON.stringify({
        name: newBoard.boardName
    })
  })
    .then(result => result.json())
    .then(data => res.json({type: 'success', data: data}))
    .catch(err => {
      console.log(err)
      res.json({type: 'error', message: err})
    })
})

module.exports = router
