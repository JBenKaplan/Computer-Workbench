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
      brand: 'Intel',
      SKU: '',
      inUse: true,
      image:
        'https://imgs.search.brave.com/tEGOwqn4F4ojRWaKAs1pfduqbzwYy5tkPJjxlSnJGEs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2ludGVsX2J4/ODA2ODRpNzg3MDBr/X2NvcmVfaTdfODcw/MGtfM183X2doel8x/MzU2NjM0LmpwZw'
    },
    {
      name: '1080 Ti SC Black Edition',
      type: 'GPU',
      price: 400,
      details:
        'Part# 11G-P4-6393-KR | Memory: 11 GB GDDR5X | Core Clock: 1556 MHz | Boost Clock: 1670 MHz | TDP: 250 W | 1 HDMI | 1 DVI-D | 3 Display Ports',
      brand: 'EVGA',
      SKU: '',
      inUse: true,
      image:
        'https://imgs.search.brave.com/rInZ-nEcbTDvPraiBje7rd5rOgV4c-V8p2aMQeXdDKk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9kZHRl/Y2gubXgvYXNzZXRz/L3VwbG9hZHMvMDc3/OTdhZmNmNzUzMTU2/NDViNzY3Nzg4ZjU2/NjI1OTQuanBn'
    },
    {},
    {},
    {},
    {}
  ]

  await Part.insertMany(parts)
  console.log('Created some parts')
}
const run = async () => {
  await main()
  db.close()
}

run()
