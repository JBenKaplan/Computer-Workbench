const db = require('../db')
const { Part } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parts = [
    {
      name: 'i7-8700k',
      type: 'CPU',
      price: 200,
      details: '6 core 12 thread',
      misc: '',
      brand: 'Intel',
      SKU: 'jsksns9sbn209287',
      inUse: false,
      image:
        'https://imgs.search.brave.com/tEGOwqn4F4ojRWaKAs1pfduqbzwYy5tkPJjxlSnJGEs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2ludGVsX2J4/ODA2ODRpNzg3MDBr/X2NvcmVfaTdfODcw/MGtfM183X2doel8x/MzU2NjM0LmpwZw'
    }
  ]

  await Part.insertMany(parts)
  console.log('Created some parts')
}
const run = async () => {
  await main()
  db.close()
}

run()
