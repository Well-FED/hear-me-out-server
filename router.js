const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/data', (req, res) => {
  res.json(data)
  //https://hear-me-out-956f8.firebaseio.com/boards.json
})

module.exports = router

const data = [
  {
    msg: 'Small Talk',
    img: '/images/small-talk/small-talk.png',
    buttons: [
      {
        msg: 'Hello',
        type: 'category-item'
      },
      {
        msg: 'Goodbye',
        type: 'category-item'
      }
    ],
    type: 'category'
  },
  {
    msg: 'Question',
    img: '/images/question/question.png',
    type: 'category'
  },
  {
    msg: 'Food',
    img: '/images/food/food.png',
    type: 'category'
  },
  {
    msg: 'Pain',
    img: '/images/pain/pain.png',
    type: 'category'
  },
  {
    msg: 'Need',
    img: '/images/need/need.png',
    type: 'category'
  },
  {
    msg: 'Place',
    img: '/images/place/place.png',
    type: 'category'
  },
  {
    msg: 'Person',
    img: '/images/person/person.png',
    type: 'category'
  }
]
