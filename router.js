const express = require('express')
const fetch = require('node-fetch') // fetch doesn't work on node. Only on browsers

const router = express.Router()

/*
   Browser --REQ--> Server --REQ--> Database
   Database --RES--> Server --RES--> Browser
*/

router.get('/boards/:id', (req, res) => {
  const id = req.params.id
  fetch(`https://hear-me-out-956f8.firebaseio.com/boards/${id}.json`)
    .then(fetchRes => fetchRes.json())
    .then(jsdata => res.json(jsdata.buttons))
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
        name: newBoard.boardName,
        buttons: newBoard.buttons
    })
  })
    .then(result => result.json())
    .then(data => res.json({type: 'success', data: data}))
    .catch(err => {
      console.log(err)
      res.json({type: 'error', message: err})
    })
})

router.get('/boards', (req, res) => {
  fetch('https://hear-me-out-956f8.firebaseio.com/boards.json')
    .then(result => result.json())
    .then(data => res.json(customisedArray(data)))
})

router.post('/upload', (req, res) => {
console.log(req.body.fileName, req.body.data)
  fetch('https://api.cloudinary.com/v1_1/hearmeout/image/upload', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      file: req.body.data,
      upload_preset: 'uploads'
    })
  })
    .then(result => result.json())
    .then(data => res.json(data.url))
})

function customisedArray (data) {
  const resultArr = []
  for (let key in data) {
    resultArr.push({id: key, name: data[key].name})
  }
  return resultArr
}




module.exports = router
